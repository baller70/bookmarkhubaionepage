"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  AlertTriangle,
  Shuffle,
  Clock,
  BarChart3,
  XCircle,
  Sparkles,
  Brain,
  Search,
  Zap
} from "lucide-react"

const problems = [
  {
    icon: Shuffle,
    question: "Ever saved a link and never found it again?",
    pain: "That perfect article. That crucial resource. Gone forever in a sea of forgotten bookmarks.",
    stat: "91%",
    statLabel: "of saved bookmarks are never revisited",
    solution: "Bookmark AI Hub's AI-powered search finds any bookmark instantly. Our smart organization automatically categorizes everything, so you'll never lose a link again. Plus, our 'Time Capsule' feature reminds you of forgotten gems.",
    solutionIcon: Search
  },
  {
    icon: XCircle,
    question: "Tired of bookmark systems that create more work?",
    pain: "Folders you forget. Tags that don't stick. Another tool that becomes another problem.",
    stat: "89%",
    statLabel: "abandon their bookmark system within 6 months",
    solution: "Zero manual work required. AI LinkPilot automatically tags, categorizes, and organizes every bookmark the moment you save it. Just save and forget—we handle the rest.",
    solutionIcon: Sparkles
  },
  {
    icon: BarChart3,
    question: "Do you actually know what content shapes your thinking?",
    pain: "No visibility into your digital consumption. No way to track what you learn or how you grow.",
    stat: "0",
    statLabel: "bookmark managers offer real analytics",
    solution: "Full analytics dashboard shows exactly how you consume content. Track time spent, visit frequency, engagement scores, and discover patterns in your digital learning journey.",
    solutionIcon: Brain
  },
  {
    icon: Clock,
    question: "How much time do you waste searching for saved links?",
    pain: "The frustration of knowing you saved it somewhere. The endless scrolling through folders.",
    stat: "12min",
    statLabel: "average time spent searching for a single bookmark",
    solution: "Instant full-text search across all your bookmarks. Find anything in milliseconds with AI-powered suggestions. Never waste another minute searching.",
    solutionIcon: Zap
  },
]

export function PASSection() {
  const [selectedProblems, setSelectedProblems] = useState<number[]>([])

  const toggleProblem = (index: number) => {
    setSelectedProblems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-red-500/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(239_68_68_/_0.1)_1px,_transparent_0)] bg-[length:24px_24px]" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 px-5 py-2.5 text-base">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Sound Familiar?
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Bookmark Chaos is
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Costing You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Be honest with yourself. <span className="font-bold text-foreground">Click the problems that apply to you.</span>
          </p>
        </motion.div>

        {/* Problem Cards - Interactive with color transition */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => {
            const isActive = selectedProblems.includes(i)
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-500 border-2 h-full overflow-hidden ${
                    isActive
                      ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/20 via-green-500/15 to-teal-500/10 shadow-xl shadow-emerald-500/20'
                      : 'hover:border-red-500/50 bg-background'
                  }`}
                  onClick={() => toggleProblem(i)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      {/* Icon - ALWAYS RED (stays red even when card is green) */}
                      <div className="relative flex-shrink-0 group">
                        {/* Glow effect */}
                        <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl blur-xl opacity-40" />

                        {/* 3D Icon container - Always red */}
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 via-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/40">
                          {/* Inner highlight for 3D effect */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                          {/* Bottom shadow for depth */}
                          <div className="absolute -bottom-1 left-2 right-2 h-2 bg-black/20 rounded-b-2xl blur-sm" />
                          <problem.icon className="h-8 w-8 text-white relative z-10 drop-shadow-lg" strokeWidth={1.5} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-xl mb-2">{problem.question}</p>
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {/* Problem text - IN RED */}
                              <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                <p className="text-red-600 font-semibold text-base mb-2">
                                  😤 THE PROBLEM:
                                </p>
                                <p className="text-red-500 text-base leading-relaxed">
                                  {problem.pain}
                                </p>
                                <div className="flex items-baseline gap-2 mt-3 pt-3 border-t border-red-500/20">
                                  <span className="text-2xl font-bold text-red-600">{problem.stat}</span>
                                  <span className="text-sm text-red-500/80">{problem.statLabel}</span>
                                </div>
                              </div>

                              {/* Solution text - IN GREEN */}
                              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md shadow-emerald-500/30">
                                    <problem.solutionIcon className="h-4 w-4 text-white" strokeWidth={2} />
                                  </div>
                                  <p className="text-emerald-600 font-semibold text-base">
                                    ✨ THE SOLUTION:
                                  </p>
                                </div>
                                <p className="text-emerald-700 dark:text-emerald-400 text-base leading-relaxed">
                                  {problem.solution}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Click hint when not active */}
                        {!isActive && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Click to see the problem & solution →
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

