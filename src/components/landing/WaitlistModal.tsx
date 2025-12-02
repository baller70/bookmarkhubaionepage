import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, Check, Gift, AlertCircle, Sparkles, Users } from "lucide-react"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  nextPosition: number
}

export function WaitlistModal({ isOpen, onClose, nextPosition }: WaitlistModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [position, setPosition] = useState<number | null>(null)

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName("")
        setEmail("")
        setIsSubmitted(false)
        setError(null)
        setPosition(null)
      }, 300)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: "header-modal" }),
      })
      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setPosition(data.position || nextPosition)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Unable to connect. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <div className="bg-background rounded-2xl border-2 border-border shadow-2xl overflow-hidden">
              {/* Header gradient bar */}
              <div className="h-1.5 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500" />
              
              <div className="p-6">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Check className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">You're on the list! 🎉</h3>
                    <p className="text-muted-foreground mb-4">
                      You're <span className="font-bold text-foreground">#{position}</span> on the waitlist.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-500/20 to-orange-500/20 border border-lime-500/30">
                      <Gift className="h-4 w-4 text-lime-600" />
                      <span className="text-sm font-medium">Early Bird: Pro FREE for 6 months</span>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 mb-4">
                        <Users className="h-4 w-4 text-lime-600" />
                        <span className="text-sm font-medium">Position #{nextPosition} available</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Join the Waitlist</h2>
                      <p className="text-muted-foreground">Be among the first to experience Bookmark AI Hub</p>
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 p-3 mb-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>{error}</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full h-12 px-4 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-lime-500"
                      />
                      <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(null) }}
                        required
                        className="w-full h-12 px-4 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-lime-500"
                      />
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:from-lime-600 hover:via-yellow-500 hover:to-orange-600 text-white font-semibold"
                      >
                        {isLoading ? "Joining..." : <>
                          <Sparkles className="h-4 w-4 mr-2" />
                          Join as #{nextPosition}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

