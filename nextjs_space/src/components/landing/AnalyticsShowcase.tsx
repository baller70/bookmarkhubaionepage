"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  Clock,
  MousePointerClick,
  TrendingUp,
  Activity,
  Eye,
  Target,
  Zap,
  ChevronRight,
  Calendar,
  Sparkles,
  LineChart
} from "lucide-react"
const analyticsV1Img = "/screenshots/Anaylrics v1.png"
import { CalloutBadge, FloatingIcon, StatBadge } from "@/components/ui/screenshot-annotations"
import { AnimatedBrowserFrame } from "@/components/ui/animated-screenshot"

const analyticsFeatures = [
  {
    icon: Clock,
    title: "TIME TRACKING",
    description: "See exactly how long you spend on each bookmark. Understand your reading habits and optimize your time.",
    gradient: "from-blue-400 via-sky-500 to-cyan-600",
    shadowColor: "shadow-blue-500/40",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
    textGradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: MousePointerClick,
    title: "CLICK ANALYTICS",
    description: "Track every visit with detailed click history. Know which resources you return to most often.",
    gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
    shadowColor: "shadow-purple-500/40",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    textGradient: "from-purple-500 to-fuchsia-600"
  },
  {
    icon: TrendingUp,
    title: "USAGE PATTERNS",
    description: "Discover your browsing habits and trends over time. Identify peak productivity hours.",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    shadowColor: "shadow-green-500/40",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500",
    textGradient: "from-green-500 to-teal-600"
  },
  {
    icon: Activity,
    title: "ENGAGEMENT SCORE",
    description: "AI-calculated relevance score for each bookmark based on your actual usage patterns.",
    gradient: "from-orange-400 via-amber-500 to-yellow-500",
    shadowColor: "shadow-orange-500/40",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
    textGradient: "from-orange-500 to-yellow-500"
  },
]

const stats = [
  { value: "589", label: "Total Visits Tracked", icon: Eye, gradient: "from-blue-400 via-sky-500 to-cyan-600", shadowColor: "shadow-blue-500/50", iconColor: "text-blue-500", textGradient: "from-blue-500 to-cyan-600" },
  { value: "28", label: "Engagement Score", icon: Target, gradient: "from-violet-400 via-purple-500 to-fuchsia-600", shadowColor: "shadow-purple-500/50", iconColor: "text-purple-500", textGradient: "from-purple-500 to-fuchsia-600" },
  { value: "3.2h", label: "Avg Time/Week", icon: Clock, gradient: "from-emerald-400 via-green-500 to-teal-600", shadowColor: "shadow-green-500/50", iconColor: "text-green-500", textGradient: "from-green-500 to-teal-600" },
  { value: "94%", label: "Discovery Rate", icon: Zap, gradient: "from-orange-400 via-amber-500 to-yellow-500", shadowColor: "shadow-orange-500/50", iconColor: "text-orange-500", textGradient: "from-orange-500 to-yellow-500" },
]

export function AnalyticsShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-500/5 via-background to-orange-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(132_204_22_/_0.1)_1px,_transparent_0)] bg-[length:32px_32px]" />

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 text-white border-0 px-5 py-2.5 text-base">
            <BarChart3 className="h-4 w-4 mr-2" />
            Game-Changing Feature
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Analytics-Powered
            </span>
            <br />Bookmarking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The world's first bookmark manager with <span className="font-bold text-foreground">real-time usage analytics</span>.
            Finally know which bookmarks actually matter to you.
          </p>
        </motion.div>

        {/* Stats bar - White background with gradient border icons */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <Card className="border-2 border-primary/20 bg-background/80 backdrop-blur overflow-hidden h-full relative">
                <CardContent className="p-4 sm:p-6 md:p-8 text-center relative">
                  {/* Top gradient bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.gradient}`} />

                  {/* Glow effect behind icon - KEPT */}
                  <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`} />

                  {/* Icon container - WHITE background with gradient border */}
                  <div className={`relative w-16 h-16 rounded-2xl p-[2px] mx-auto mb-5 shadow-lg ${stat.shadowColor} transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                    {/* Gradient border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient}`} />
                    {/* White inner with colored icon */}
                    <div className="relative h-full w-full rounded-[14px] bg-white dark:bg-background flex items-center justify-center">
                      <stat.icon className={`h-8 w-8 ${stat.iconColor} relative z-10`} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  {/* Label with gradient color */}
                  <div className={`text-base font-medium bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent`}>{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center px-2 sm:px-0">
          {/* Analytics features - Interactive */}
          <motion.div
            className="space-y-4 max-w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
              KNOW YOUR BOOKMARKS LIKE <span className="text-primary">NEVER BEFORE</span>
            </h3>
            {analyticsFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className={`group flex gap-5 p-6 rounded-2xl border-2 cursor-pointer transition-all relative ${
                  activeFeature === i
                    ? `${feature.bgColor} ${feature.borderColor} shadow-lg`
                    : 'border-transparent hover:border-border'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveFeature(i)}
              >
                {/* Glow effect - KEPT */}
                <div className={`absolute left-4 top-4 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />

                {/* Icon container - WHITE background with gradient border */}
                <div className={`relative w-16 h-16 rounded-2xl p-[2px] flex-shrink-0 shadow-lg ${feature.shadowColor} transform group-hover:scale-105 transition-all duration-300`}>
                  {/* Gradient border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient}`} />
                  {/* White inner with colored icon */}
                  <div className="relative h-full w-full rounded-[14px] bg-white dark:bg-background flex items-center justify-center">
                    <feature.icon className={`h-8 w-8 ${feature.iconColor} relative z-10`} strokeWidth={2} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    {/* Title with gradient color */}
                    <h4 className={`font-bold text-xl bg-gradient-to-r ${feature.textGradient} bg-clip-text text-transparent`}>{feature.title}</h4>
                    <ChevronRight className={`h-5 w-5 transition-transform ${activeFeature === i ? 'rotate-90' : ''}`} />
                  </div>
                  {activeFeature === i && (
                    <motion.p
                      className="text-muted-foreground mt-2 text-lg leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Screenshot with premium frame and annotations */}
          <motion.div
            className="relative px-2 sm:px-4 md:px-12 py-8 sm:py-12 md:py-16 max-w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Floating icons */}
            <div className="hidden sm:block">
              <FloatingIcon icon={Calendar} position="-top-4 right-4" color="from-purple-500/20 to-pink-500/20" delay={0.3} />
              <FloatingIcon icon={LineChart} position="top-1/4 -right-4 md:-right-8" color="from-green-500/20 to-emerald-500/20" delay={0.5} size="lg" />
              <FloatingIcon icon={Sparkles} position="bottom-1/3 -left-2 md:-left-6" color="from-amber-500/20 to-orange-500/20" delay={0.7} />
            </div>

            {/* Callout badges */}
            <div className="hidden sm:block">
              <CalloutBadge
                icon={Activity}
                label="Activity Heatmap"
                sublabel="Daily patterns"
                position="top-right"
                color="from-pink-500 to-rose-500"
                delay={0.4}
                arrowDirection="left"
              />
              <CalloutBadge
                icon={Target}
                label="DNA Profile"
                sublabel="Your unique pattern"
                position="bottom-left"
                color="from-purple-500 to-indigo-500"
                delay={0.6}
                arrowDirection="right"
              />

              {/* Stat badge */}
              <StatBadge
                value="365"
                label="Days tracked"
                position="-bottom-6 right-4 md:right-8"
                color="from-purple-500 to-pink-500"
                delay={0.8}
              />
            </div>

            <div className="absolute -inset-2 sm:-inset-6 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" />
            <AnimatedBrowserFrame url="app.bookmarkaihub.ai/analytics" className="shadow-2xl max-w-full">
              <img src={analyticsV1Img} alt="Bookmark AI Hub Analytics - DNA Profile and Activity Heatmap" className="w-full h-auto" />
            </AnimatedBrowserFrame>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

