"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Rocket, Users, ArrowRight, Sparkles, Clock, Shield } from "lucide-react"
import { WaitlistModal } from "./WaitlistModal"

export function CTA() {
  const [email, setEmail] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [waitlistPosition, setWaitlistPosition] = useState(248)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <section className="py-24 sm:py-28 md:py-32 bg-gradient-to-br from-lime-500 via-yellow-400 to-orange-500 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 sm:-top-40 -right-32 sm:-right-40 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 sm:-bottom-40 -left-32 sm:-left-40 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Polka dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255_/_0.1)_1px,_transparent_0)] bg-[length:24px_24px]" />

      <div className="container relative px-4 sm:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 sm:mb-8 rounded-xl sm:rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center"
          >
            <Rocket className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Ready to Transform Your
            <br />
            <span className="text-yellow-300">Digital Life?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Join our growing community of early adopters. Be among the first to experience
            the future of bookmark management.
          </p>

          {/* Trust badges - MOBILE OPTIMIZED */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-2">
            <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 text-sm sm:text-base border border-white/20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <span className="font-medium">{waitlistPosition - 1} on waitlist</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 text-sm sm:text-base border border-white/20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <span className="font-medium hidden xs:inline">Launching Q1 2026</span>
              <span className="font-medium xs:hidden">Q1 2026</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 text-sm sm:text-base border border-white/20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
              </div>
              <span className="font-medium">Privacy First</span>
            </div>
          </div>

          {/* Inline waitlist form - MOBILE OPTIMIZED */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-2">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-white/20">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 sm:h-14 md:h-16 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-white/20 border-2 border-white/30 text-white text-base sm:text-lg placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <button 
                type="submit"
                className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 rounded-lg sm:rounded-xl bg-white text-lime-600 font-bold text-base sm:text-lg hover:bg-lime-50 hover:text-lime-700 transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Join Waitlist</span>
                <span className="xs:hidden">Join</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </form>

          <p className="text-sm sm:text-base opacity-80 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4">
            <span className="flex items-center gap-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
              No spam, ever
            </span>
            <span>•</span>
            <span>Unsubscribe anytime</span>
            <span className="hidden xs:inline">•</span>
            <span className="hidden xs:inline">Free to join</span>
          </p>
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
