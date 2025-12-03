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
    <section className="py-32 bg-gradient-to-br from-lime-500 via-yellow-400 to-orange-500 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Polka dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255_/_0.1)_1px,_transparent_0)] bg-[length:24px_24px]" />

      <div className="container relative">
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
            className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center"
          >
            <Rocket className="h-12 w-12" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-yellow-300">Digital Life?</span>
          </h2>
          <p className="text-2xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our growing community of early adopters. Be among the first to experience
            the future of bookmark management.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 text-base border border-white/20">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Users className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <span className="font-medium">{waitlistPosition - 1} on waitlist</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 text-base border border-white/20">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Clock className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <span className="font-medium">Launching Q1 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 text-base border border-white/20">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Shield className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <span className="font-medium">Privacy First</span>
            </div>
          </div>

          {/* Inline waitlist form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-16 px-6 rounded-xl bg-white/20 border-2 border-white/30 text-white text-lg placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <button 
                type="submit"
                className="h-16 px-10 rounded-xl bg-white text-lime-600 font-bold text-lg hover:bg-lime-50 hover:text-lime-700 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="h-5 w-5" />
                Join Waitlist
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>

          <p className="text-base opacity-80 mt-8 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              No spam, ever
            </span>
            <span>•</span>
            <span>Unsubscribe anytime</span>
            <span>•</span>
            <span>Free to join</span>
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

