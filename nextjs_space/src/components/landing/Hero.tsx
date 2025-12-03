"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  Brain,
  Globe,
  Smartphone,
  Chrome,
  ArrowRight,
  Bookmark,
  FolderOpen,
  Tag,
  Search,
  BarChart3,
  Sparkles,
  Store,
  TrendingUp,
  Zap,
  Clock,
  PieChart,
  FolderKanban
} from "lucide-react"
const analyticsImg = "/screenshots/ANALYTICS.png"
import { CalloutBadge, FloatingIcon, StatBadge } from "@/components/ui/screenshot-annotations"
import { AnimatedScreenshot } from "@/components/ui/animated-screenshot"
import { WaitlistModal } from "./WaitlistModal"

const platforms = [
  { icon: Globe, label: "Web App" },
  { icon: Smartphone, label: "iOS App" },
  { icon: Chrome, label: "Chrome Extension" },
]

// Interactive demo states - 7 steps including Project Management and Marketplace
const demoSteps = [
  { action: "Save", icon: Bookmark, text: "One-click save from any page", color: "bg-blue-500" },
  { action: "Organize", icon: FolderOpen, text: "AI auto-categorizes instantly", color: "bg-purple-500" },
  { action: "Tag", icon: Tag, text: "Smart tags applied automatically", color: "bg-green-500" },
  { action: "Find", icon: Search, text: "Search across all your bookmarks", color: "bg-orange-500" },
  { action: "Analyze", icon: BarChart3, text: "Track usage & engagement", color: "bg-pink-500" },
  { action: "Manage", icon: FolderKanban, text: "21 tools to organize every bookmark", color: "bg-teal-500" },
  { action: "Marketplace", icon: Store, text: "Monetize your curated collections", color: "bg-amber-500" },
]

export function Hero() {
  const [currentStep, setCurrentStep] = useState(0)
  const [email, setEmail] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [waitlistPosition, setWaitlistPosition] = useState(248)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Fetch waitlist count on mount
  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch('/api/waitlist/count')
        if (response?.ok) {
          const data = await response.json()
          setWaitlistPosition(data?.count + 1 || 248)
        }
      } catch {
        // Use default value
      }
    }
    fetchCount()
  }, [])

  return (
    <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
      {/* Polka dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0_/_0.05)_1px,_transparent_0)] bg-[length:24px_24px]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-lime-500/30 rounded-full blur-[80px] sm:blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/30 rounded-full blur-[100px] sm:blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative py-12 sm:py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Launch badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              <Badge className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-500/30 gap-2">
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                <span className="hidden xs:inline">Launching Q1 2026</span>
                <span className="xs:hidden">Q1 2026</span>
              </Badge>
              <Badge variant="outline" className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base font-bold gap-2 border-2 border-lime-500/50 bg-lime-500/5">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-lime-600" strokeWidth={1.5} />
                AI-Powered
              </Badge>
            </motion.div>

            {/* Main headline - MOBILE OPTIMIZED */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block text-foreground">Organize Your</span>
              <span className="block bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Digital Life
              </span>
              <span className="block text-foreground">for the <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-lime-500 bg-clip-text text-transparent">AI Era</span></span>
            </motion.h1>

            {/* Subheadline - MOBILE OPTIMIZED */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AI will <span className="text-foreground font-semibold">exponentially increase</span> the information you encounter daily.
              The more <span className="text-lime-600 font-semibold">organized you are now</span>, the better decisions you'll make in the future.
            </motion.p>

            {/* Platform badges */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {platforms.map((platform, i) => (
                <Badge key={i} className="px-4 py-2 sm:px-5 sm:py-2.5 gap-2 text-sm sm:text-base bg-black text-white border-black">
                  <platform.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={1.5} />
                  {platform.label}
                </Badge>
              ))}
            </motion.div>

            {/* Waitlist CTA - MOBILE OPTIMIZED */}
            <motion.div
              className="mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <form 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg"
                onSubmit={(e) => {
                  e.preventDefault()
                  setIsModalOpen(true)
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 sm:h-14 px-4 sm:px-6 rounded-xl border-2 border-border bg-background text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 sm:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:from-lime-600 hover:via-yellow-500 hover:to-orange-600 text-white"
                >
                  JOIN WAITING LISTS
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </form>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground flex flex-wrap items-center gap-2 sm:gap-4">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-lime-500" />
                  <span className="font-semibold text-foreground">247</span> people on waitlist
                </span>
                <span>•</span>
                <span>No spam, ever</span>
              </p>
            </motion.div>
          </div>

          {/* Right side - Interactive Demo Card */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-lime-500/30 via-yellow-400/30 to-orange-500/30 rounded-3xl blur-2xl" />

              {/* Main demo card */}
              <div className="relative bg-background border-2 border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-muted/50 px-6 py-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Bookmark AI Hub Demo</span>
                </div>

                {/* Demo content */}
                <div className="p-8">
                  {/* Step indicator */}
                  <div className="flex gap-2 mb-8">
                    {demoSteps.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${i === currentStep ? 'bg-lime-500' : 'bg-muted'}`}
                        animate={{ scale: i === currentStep ? [1, 1.1, 1] : 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    ))}
                  </div>

                  {/* Current step display */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center"
                    >
                      <motion.div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${demoSteps[currentStep].color} flex items-center justify-center`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {(() => {
                          const Icon = demoSteps[currentStep].icon
                          return <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                        })()}
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">{demoSteps[currentStep].action}</h3>
                      <p className="text-lg text-muted-foreground">{demoSteps[currentStep].text}</p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Action buttons */}
                  <div className="flex justify-center gap-3 mt-8">
                    {demoSteps.map((step, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setCurrentStep(i)}
                        className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all ${
                          i === currentStep
                            ? 'border-lime-500 bg-lime-500/10'
                            : 'border-border hover:border-lime-500/50'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <step.icon className={`h-5 w-5 ${i === currentStep ? 'text-lime-600' : 'text-muted-foreground'}`} strokeWidth={1.5} />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard preview below with premium annotations - MOBILE OPTIMIZED */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 relative px-2 sm:px-4 md:px-12 lg:px-24 xl:px-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Floating icons around the screenshot - VISIBLE ON ALL SCREENS */}
          <div className="hidden sm:block">
            <FloatingIcon icon={TrendingUp} position="-top-8 left-8 md:left-4" color="from-green-500/30 to-emerald-500/30" delay={1.2} size="lg" />
            <FloatingIcon icon={PieChart} position="-top-6 right-12 md:right-8" color="from-yellow-400/30 to-orange-500/30" delay={1.4} size="lg" />
            <FloatingIcon icon={Clock} position="top-1/3 -left-4 md:-left-10" color="from-blue-500/30 to-cyan-500/30" delay={1.6} size="lg" />
            <FloatingIcon icon={Zap} position="top-1/2 -right-4 md:-right-10" color="from-amber-500/30 to-orange-500/30" delay={1.8} size="lg" />
          </div>

          {/* PROMINENT Callout badges - NOW VISIBLE ON MOBILE */}
          <CalloutBadge
            icon={BarChart3}
            label="Real-Time Analytics"
            sublabel="Track every click & visit"
            position="top-left"
            color="from-lime-500 via-yellow-400 to-orange-500"
            delay={1.3}
            arrowDirection="right"
            size="sm"
          />
          <CalloutBadge
            icon={Brain}
            label="AI-Powered Insights"
            sublabel="Smart recommendations"
            position="top-right"
            color="from-blue-500 to-cyan-500"
            delay={1.5}
            arrowDirection="left"
            size="sm"
          />
          <div className="hidden sm:block">
            <CalloutBadge
              icon={Sparkles}
              label="One-Click Save"
              sublabel="From any website"
              position="bottom-left"
              color="from-green-500 to-emerald-500"
              delay={1.7}
              arrowDirection="right"
              size="sm"
            />
          </div>

          {/* Stat badge - NOW VISIBLE ON MOBILE */}
          <StatBadge
            value="12+"
            label="Metrics tracked"
            position="-bottom-8 right-4 sm:right-12 md:right-20"
            color="from-green-500 to-emerald-500"
            delay={1.9}
          />

          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-lime-500/25 via-yellow-400/25 to-orange-500/25 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" />
          <AnimatedScreenshot className="shadow-xl sm:shadow-2xl">
            <img src={analyticsImg} alt="Bookmark AI Hub Analytics Dashboard" className="w-full h-auto" />
          </AnimatedScreenshot>
        </motion.div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nextPosition={waitlistPosition}
      />
    </section>
  )
}
