"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Users, Gift, AlertCircle, TrendingUp, Clock, Zap } from "lucide-react"

// API base URL - change this to your production URL when deploying
const API_BASE_URL = ""

interface WaitlistFormProps {
  variant?: "hero" | "inline" | "modal"
  showIncentive?: boolean
  source?: string // Track where the signup came from
}

interface WaitlistResponse {
  success: boolean
  message?: string
  error?: string
  position?: number
}

// Animated counter component for smooth number transitions
function AnimatedNumber({ value, className = "" }: { value: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 1500
      const steps = 40
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}
    </span>
  )
}

// Live activity indicator - shows recent signup activity
function LiveActivityPulse() {
  return (
    <motion.div
      className="flex items-center gap-1.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="text-xs text-green-600 font-medium">Live</span>
    </motion.div>
  )
}

export function WaitlistForm({ variant = "inline", showIncentive = true, source = "unknown" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [position, setPosition] = useState<number | null>(null)
  const [waitlistCount, setWaitlistCount] = useState<number>(247) // Default fallback
  const [showRecentSignup, setShowRecentSignup] = useState(false)
  const [spotsRemaining, setSpotsRemaining] = useState(1000)

  // Fetch current waitlist count on mount
  useEffect(() => {
    async function fetchWaitlistCount() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/waitlist/count`)
        if (response.ok) {
          const data = await response.json()
          setWaitlistCount(data.count)
          setSpotsRemaining(Math.max(0, 1000 - data.count))
        }
      } catch (err) {
        // Silently fail - use default count
        console.log("Could not fetch waitlist count, using default")
      }
    }
    fetchWaitlistCount()
  }, [])

  // Show subtle "recent signup" notification periodically (only if count > 5)
  useEffect(() => {
    if (waitlistCount > 5 && !isSubmitted) {
      const showNotification = () => {
        setShowRecentSignup(true)
        setTimeout(() => setShowRecentSignup(false), 3000)
      }

      // Show initial after 8 seconds, then every 30 seconds
      const initialTimer = setTimeout(showNotification, 8000)
      const interval = setInterval(showNotification, 30000)

      return () => {
        clearTimeout(initialTimer)
        clearInterval(interval)
      }
    }
  }, [waitlistCount, isSubmitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source }),
      })

      const data: WaitlistResponse = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setPosition(data.position || waitlistCount + 1)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.")
      console.error("Waitlist signup error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Check className="h-8 w-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2">You're on the list! 🎉</h3>
        <p className="text-muted-foreground mb-4">
          You're #{position || waitlistCount} on the waitlist.
          We'll notify you when Bookmark AI Hub launches!
        </p>
        <Badge className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 text-white">
          <Gift className="h-3 w-3 mr-1" />
          Early Bird: Pro Free for 6 Months
        </Badge>
      </motion.div>
    )
  }

  return (
    <div className={variant === "hero" ? "w-full max-w-xl mx-auto" : ""}>
      {showIncentive && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Badge variant="secondary" className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-500/30">
            <Gift className="h-3 w-3 mr-1" />
            First 1,000 users get Pro FREE for 6 months
          </Badge>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Error message display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        {variant === "hero" ? (
          <>
            {/* Recent signup notification - subtle FOMO */}
            <AnimatePresence>
              {showRecentSignup && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="flex items-center justify-center gap-2 mb-2"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/20 rounded-full text-sm">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Zap className="h-4 w-4 text-lime-600" />
                    </motion.div>
                    <span className="text-lime-700 dark:text-lime-400">
                      Someone just joined the waitlist
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError(null) // Clear error when user types
                }}
                required
                className={`flex-1 h-14 px-6 rounded-xl border bg-background text-base focus:outline-none focus:ring-2 focus:ring-lime-500 ${error ? 'border-red-500' : ''}`}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="h-14 px-8 text-base font-semibold bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:from-lime-600 hover:via-yellow-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Enhanced social proof stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
              {/* Live counter with animated number */}
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-lime-500/10 to-yellow-500/10 rounded-full border border-lime-500/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-lime-600" />
                  <span className="font-bold text-foreground">
                    <AnimatedNumber value={waitlistCount} />
                  </span>
                  <span className="text-muted-foreground">joined</span>
                </div>
                <LiveActivityPulse />
              </motion.div>

              {/* Spots remaining - creates urgency transparently */}
              {spotsRemaining > 0 && spotsRemaining < 1000 && (
                <motion.div
                  className="flex items-center gap-1.5 text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  <span>
                    <span className="font-semibold text-orange-600">{spotsRemaining.toLocaleString()}</span> early bird spots left
                  </span>
                </motion.div>
              )}

              {/* Launch date */}
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-4 w-4 text-amber-500" />
                Launching Q1 2026
              </span>
            </div>
          </>
        ) : (
          <Card className="border-2 border-lime-500/20 overflow-hidden">
            <CardContent className="p-6 space-y-4">
              <div className="grid gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError(null)
                  }}
                  required
                  className={`h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-lime-500 ${error ? 'border-red-500' : ''}`}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:from-lime-600 hover:via-yellow-500 hover:to-orange-600 text-white shadow-md hover:shadow-lg transition-shadow"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join the Waitlist"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Compact social proof for inline variant */}
              <div className="flex items-center justify-center gap-3 pt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-lime-600" />
                  <span className="font-semibold text-foreground">{waitlistCount}</span>
                  <span>joined</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <div className="flex items-center gap-1">
                  <LiveActivityPulse />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </form>
    </div>
  )
}

