"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  LayoutGrid,
  Bot,
  Store,
  Sparkles,
  Eye,
  BarChart3,
  Folder,
  Columns3,
  Wand2,
  Tags,
  DollarSign,
  Users,
  Brain,
  Layers
} from "lucide-react"
const dashboardV2Img = "/screenshots/Dashboard.png"
const differentViewsImg = "/screenshots/Different views.png"
const aiLinkpilotImg = "/screenshots/ai-linkpilot.png"
const marketplaceImg = "/screenshots/marketplace.png"
import { CalloutBadge, FloatingIcon, StatBadge } from "@/components/ui/screenshot-annotations"
import { AnimatedScreenshot } from "@/components/ui/animated-screenshot"

// Annotation configurations for each showcase
interface AnnotationConfig {
  callouts: Array<{
    icon: LucideIcon
    label: string
    sublabel?: string
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
    color: string
    arrowDirection: "left" | "right"
  }>
  floatingIcons: Array<{
    icon: LucideIcon
    position: string
    color: string
    size?: "sm" | "md" | "lg"
  }>
  stat?: {
    value: string
    label: string
    position: string
    color: string
  }
}

const annotationConfigs: Record<string, AnnotationConfig> = {
  dashboard: {
    callouts: [
      { icon: BarChart3, label: "Analytics", sublabel: "Real-time data", position: "top-left", color: "from-lime-500 via-yellow-400 to-orange-500", arrowDirection: "right" },
      { icon: Brain, label: "AI Assistant", sublabel: "Ask anything", position: "bottom-right", color: "from-purple-500 to-pink-500", arrowDirection: "left" }
    ],
    floatingIcons: [
      { icon: Layers, position: "-top-4 right-8", color: "from-lime-500/20 via-yellow-400/20 to-orange-500/20" },
      { icon: LayoutGrid, position: "top-1/3 -right-4", color: "from-purple-500/20 to-pink-500/20", size: "sm" }
    ],
    stat: { value: "8", label: "View modes", position: "-bottom-6 left-8", color: "from-lime-500 via-yellow-400 to-orange-500" }
  },
  views: {
    callouts: [
      { icon: Folder, label: "Folder 2.0", sublabel: "Enhanced folders", position: "top-left", color: "from-purple-500 to-pink-500", arrowDirection: "right" },
      { icon: Columns3, label: "Kanban 2.0", sublabel: "Visual boards", position: "top-right", color: "from-indigo-500 to-purple-500", arrowDirection: "left" }
    ],
    floatingIcons: [
      { icon: LayoutGrid, position: "-top-4 left-1/4", color: "from-purple-500/20 to-pink-500/20", size: "lg" },
      { icon: Layers, position: "bottom-1/4 -right-4", color: "from-indigo-500/20 to-purple-500/20" }
    ],
    stat: { value: "6+", label: "View types", position: "-bottom-6 right-8", color: "from-purple-500 to-pink-500" }
  },
  ai: {
    callouts: [
      { icon: Wand2, label: "Auto-Categorize", sublabel: "AI-powered", position: "top-right", color: "from-green-500 to-emerald-500", arrowDirection: "left" },
      { icon: Tags, label: "Smart Tags", sublabel: "Auto-generated", position: "bottom-left", color: "from-teal-500 to-cyan-500", arrowDirection: "right" }
    ],
    floatingIcons: [
      { icon: Bot, position: "-top-4 left-8", color: "from-green-500/20 to-emerald-500/20", size: "lg" },
      { icon: Sparkles, position: "top-1/2 -left-4", color: "from-teal-500/20 to-cyan-500/20", size: "sm" }
    ],
    stat: { value: "95%", label: "Accuracy", position: "-bottom-6 left-8", color: "from-green-500 to-emerald-500" }
  },
  marketplace: {
    callouts: [
      { icon: DollarSign, label: "Monetize", sublabel: "Earn revenue", position: "top-left", color: "from-orange-500 to-amber-500", arrowDirection: "right" },
      { icon: Users, label: "Community", sublabel: "Expert curators", position: "bottom-right", color: "from-amber-500 to-yellow-500", arrowDirection: "left" }
    ],
    floatingIcons: [
      { icon: Store, position: "-top-4 right-8", color: "from-orange-500/20 to-amber-500/20", size: "lg" },
      { icon: Sparkles, position: "bottom-1/3 -left-4", color: "from-amber-500/20 to-yellow-500/20" }
    ],
    stat: { value: "80%", label: "Revenue share", position: "-bottom-6 right-8", color: "from-orange-500 to-amber-500" }
  }
}

const showcases = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    badge: "DASHBOARD",
    badgeColor: "from-lime-500 via-yellow-400 to-orange-500",
    title: "Your Command Center",
    description: "A powerful dashboard with 8 different view modes, real-time analytics, and an AI assistant. See exactly how you interact with your digital content.",
    image: dashboardV2Img,
    features: [
      "8 view modes: Grid, List, Kanban, Timeline & more",
      "Real-time usage analytics with engagement scores",
      "AI-powered chat assistant for instant help",
      "Smart pagination handling 1000s of bookmarks"
    ],
    glowColor: "from-lime-500/30 via-yellow-400/30 to-orange-500/30"
  },
  {
    id: "views",
    icon: LayoutGrid,
    badge: "DIFFERENT VIEWS",
    badgeColor: "from-lime-500 via-yellow-400 to-orange-500",
    title: "Organize Your Way",
    description: "Choose from multiple view modes to organize your bookmarks exactly how you think. Folder 2.0, Kanban boards, Grid, Compact, List, and Timeline views.",
    image: differentViewsImg,
    features: [
      "Folder 2.0: Enhanced folder organization",
      "Kanban 2.0: Visual workflow boards",
      "Grid, Compact, List & Timeline views",
      "Switch views instantly with one click"
    ],
    glowColor: "from-lime-500/30 via-yellow-400/30 to-orange-500/30"
  },
  {
    id: "ai",
    icon: Bot,
    badge: "AI LINK PILOT",
    badgeColor: "from-green-500 to-emerald-500",
    title: "AI Does the Heavy Lifting",
    description: "Stop manually organizing. LinkPilot automatically processes, tags, and categorizes your bookmarks with high accuracy.",
    image: aiLinkpilotImg,
    features: [
      "Auto-tagging with AI confidence scores",
      "Smart duplicate detection & merging",
      "Custom rule builder for your workflow",
      "Bulk processing: hundreds of links in minutes"
    ],
    glowColor: "from-green-500/30 to-emerald-500/30"
  },
  {
    id: "marketplace",
    icon: Store,
    badge: "MARKETPLACE",
    badgeColor: "from-orange-500 to-amber-500",
    title: "Turn Knowledge Into Income",
    description: "Browse curated playbooks or monetize your own bookmark collections. Your expertise has value.",
    image: marketplaceImg,
    features: [
      "Browse playbooks from experts worldwide",
      "Set your price, keep 80% revenue",
      "Build passive income from curation",
      "Discover resources in your niche"
    ],
    glowColor: "from-orange-500/30 to-amber-500/30"
  }
]

export function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const activeShowcase = showcases[activeTab]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0_/_0.03)_1px,_transparent_0)] bg-[length:32px_32px]" />

      <div className="container relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 text-white border-0 px-5 py-2.5 text-base">
            <div className="w-6 h-6 rounded-lg border-2 border-white/30 flex items-center justify-center mr-2">
              <Eye className="h-3 w-3" />
            </div>
            Product Tour
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See{" "}
            <span className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bookmark AI Hub
            </span>{" "}
            in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the powerful features that will transform how you organize your digital world.
          </p>
        </motion.div>

        {/* Horizontal Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {showcases.map((showcase, index) => (
            <motion.button
              key={showcase.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                activeTab === index
                  ? `bg-gradient-to-r ${showcase.badgeColor} text-white border-transparent shadow-lg`
                  : 'bg-background border-border hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                activeTab === index ? 'bg-white/20' : 'bg-muted'
              }`}>
                <showcase.icon className={`h-5 w-5 ${activeTab === index ? 'text-white' : 'text-foreground'}`} strokeWidth={1.5} />
              </div>
              <span className="font-bold text-lg">{showcase.badge}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <Badge className={`bg-gradient-to-r ${activeShowcase.badgeColor} text-white border-0 px-4 py-2 text-base`}>
                <activeShowcase.icon className="h-4 w-4 mr-2" />
                {activeShowcase.badge}
              </Badge>

              <h3 className="text-3xl md:text-4xl font-bold">
                {activeShowcase.title}
              </h3>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {activeShowcase.description}
              </p>

              <ul className="space-y-4">
                {activeShowcase.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 border-2 border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button className="mt-6 h-14 px-8 text-lg group bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:from-lime-600 hover:via-yellow-500 hover:to-orange-600 text-white" size="lg">
                <Sparkles className="h-5 w-5 mr-2" />
                Join Waitlist #248
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Image with annotations */}
            <div className="relative order-1 lg:order-2 px-4 md:px-12">
              {/* Render annotations based on active tab */}
              {annotationConfigs[activeShowcase.id] && (
                <>
                  {/* Floating icons */}
                  {annotationConfigs[activeShowcase.id].floatingIcons.map((floatIcon, idx) => (
                    <FloatingIcon
                      key={`float-${idx}`}
                      icon={floatIcon.icon}
                      position={floatIcon.position}
                      color={floatIcon.color}
                      size={floatIcon.size}
                      delay={0.2 + idx * 0.15}
                    />
                  ))}

                  {/* Callout badges */}
                  {annotationConfigs[activeShowcase.id].callouts.map((callout, idx) => (
                    <CalloutBadge
                      key={`callout-${idx}`}
                      icon={callout.icon}
                      label={callout.label}
                      sublabel={callout.sublabel}
                      position={callout.position}
                      color={callout.color}
                      arrowDirection={callout.arrowDirection}
                      delay={0.3 + idx * 0.2}
                    />
                  ))}

                  {/* Stat badge */}
                  {annotationConfigs[activeShowcase.id].stat && (
                    <StatBadge
                      value={annotationConfigs[activeShowcase.id].stat!.value}
                      label={annotationConfigs[activeShowcase.id].stat!.label}
                      position={annotationConfigs[activeShowcase.id].stat!.position}
                      color={annotationConfigs[activeShowcase.id].stat!.color}
                      delay={0.6}
                    />
                  )}
                </>
              )}

              <div className={`absolute -inset-4 bg-gradient-to-r ${activeShowcase.glowColor} rounded-2xl blur-2xl opacity-50`} />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedScreenshot className="shadow-2xl">
                  <img
                    src={activeShowcase.image}
                    alt={activeShowcase.title}
                    className="w-full h-auto"
                  />
                </AnimatedScreenshot>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

