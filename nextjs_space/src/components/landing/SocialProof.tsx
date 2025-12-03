"use client"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Bookmark, Shield, Sparkles, Microscope, Code2, Palette, Video, GraduationCap, Rocket, User } from "lucide-react"

const stats = [
  { icon: Users, value: 247, suffix: "+", label: "On Waitlist" },
  { icon: Bookmark, value: 21, suffix: "", label: "Power Tools" },
  { icon: Star, value: 4.8, suffix: "/5", label: "Beta Rating", decimals: 1 },
  { icon: Shield, value: 100, suffix: "%", label: "Privacy First", decimals: 0 },
]

// Beta tester industries with unique icons
const betaTesters = [
  { label: "RESEARCHERS", icon: Microscope },
  { label: "DEVELOPERS", icon: Code2 },
  { label: "DESIGNERS", icon: Palette },
  { label: "CONTENT CREATORS", icon: Video },
  { label: "STUDENTS", icon: GraduationCap },
  { label: "ENTREPRENEURS", icon: Rocket },
  { label: "EVERYDAY USERS", icon: User }
]

function AnimatedCounter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(current)
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  )
}

export function SocialProof() {
  return (
    <section className="py-16 border-y bg-muted/30">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl p-[2px] bg-gradient-to-br from-lime-500 via-yellow-400 to-orange-500">
                <div className="w-full h-full rounded-[10px] bg-white dark:bg-background flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-lime-600" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Beta Testers */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Built for and tested by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {betaTesters.map((tester, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1.5 text-sm md:text-base font-bold text-muted-foreground/70 hover:text-foreground transition-colors tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <tester.icon className="h-3 w-3 text-lime-500" />
                {tester.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-[2px] rounded-full bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:scale-105 transition-transform">
            <Badge variant="outline" className="px-5 py-2.5 text-base border-0 bg-background rounded-full">
              <div className="w-8 h-8 rounded-lg p-[1.5px] bg-gradient-to-br from-lime-500 via-yellow-400 to-orange-500 flex items-center justify-center mr-2">
                <div className="w-full h-full rounded-[5px] bg-background flex items-center justify-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              Beta Tested & Refined
            </Badge>
          </div>
          <div className="p-[2px] rounded-full bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:scale-105 transition-transform">
            <Badge variant="outline" className="px-5 py-2.5 text-base border-0 bg-background rounded-full">
              <div className="w-8 h-8 rounded-lg p-[1.5px] bg-gradient-to-br from-lime-500 via-yellow-400 to-orange-500 flex items-center justify-center mr-2">
                <div className="w-full h-full rounded-[5px] bg-background flex items-center justify-center">
                  <Shield className="h-4 w-4 text-green-500" />
                </div>
              </div>
              Privacy First Design
            </Badge>
          </div>
          <div className="p-[2px] rounded-full bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:scale-105 transition-transform">
            <Badge variant="outline" className="px-5 py-2.5 text-base border-0 bg-background rounded-full">
              <div className="w-8 h-8 rounded-lg p-[1.5px] bg-gradient-to-br from-lime-500 via-yellow-400 to-orange-500 flex items-center justify-center mr-2">
                <div className="w-full h-full rounded-[5px] bg-background flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                </div>
              </div>
              AI-Powered Organization
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

