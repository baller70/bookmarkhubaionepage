import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Smartphone,
  Chrome,
  Puzzle,
  CheckCircle2,
  Monitor,
  ArrowRight,
  Laptop
} from "lucide-react"

const platforms = [
  {
    icon: Globe,
    name: "Web App",
    status: "Launching Q1 2026",
    features: ["Full dashboard access", "All 21 power tools", "Analytics & insights", "Marketplace access"],
    color: "from-blue-500 to-cyan-500",
    available: true,
    description: "Access your bookmarks from any browser with our full-featured web application."
  },
  {
    icon: Smartphone,
    name: "iOS App",
    status: "Launching Q1 2026",
    features: ["Native mobile experience", "Offline access", "Quick capture", "Push notifications"],
    color: "from-lime-500 via-yellow-400 to-orange-500",
    available: true,
    description: "Save and organize bookmarks on the go with our native iOS application."
  },
  {
    icon: Chrome,
    name: "Chrome Extension",
    status: "Launching Q1 2026",
    features: ["One-click save", "Right-click context menu", "Keyboard shortcuts", "Instant sync"],
    color: "from-green-500 to-emerald-500",
    available: true,
    description: "Save bookmarks instantly while browsing with our powerful Chrome extension."
  },
  {
    icon: Puzzle,
    name: "More Coming",
    status: "2026 Roadmap",
    features: ["Firefox Extension", "Safari Extension", "Android App", "Desktop Apps"],
    color: "from-orange-500 to-red-500",
    available: false,
    description: "We're expanding to more platforms. Firefox, Safari, Android, and desktop apps coming soon."
  },
]

export function PlatformSection() {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState(0)

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0_/_0.03)_1px,_transparent_0)] bg-[length:32px_32px]" />

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-5 py-2.5 text-base">
            <Laptop className="h-4 w-4 mr-2" />
            Cross-Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One Platform, <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">All Your Devices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access your bookmarks anywhere with seamless sync across all platforms.
          </p>
        </motion.div>

        {/* Interactive Device Showcase */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-8 border-2">
            {/* Central device mockup */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <motion.div
                className="relative"
                animate={{ y: hoveredPlatform === 0 ? -10 : 0 }}
              >
                <div className="w-48 h-32 bg-background rounded-lg border-2 border-border shadow-xl flex items-center justify-center">
                  <Monitor className="h-12 w-12 text-muted-foreground" strokeWidth={1} />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-border rounded-full" />
              </motion.div>

              <motion.div
                className="relative"
                animate={{ y: hoveredPlatform === 1 ? -10 : 0 }}
              >
                <div className="w-16 h-28 bg-background rounded-xl border-2 border-border shadow-xl flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-muted-foreground" strokeWidth={1} />
                </div>
              </motion.div>

              <motion.div
                className="relative"
                animate={{ y: hoveredPlatform === 2 ? -10 : 0 }}
              >
                <div className="w-12 h-12 bg-background rounded-lg border-2 border-border shadow-xl flex items-center justify-center">
                  <Chrome className="h-6 w-6 text-muted-foreground" strokeWidth={1} />
                </div>
              </motion.div>
            </div>

            {/* Sync animation lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <motion.div
                className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-lime-500/0 via-lime-500 to-lime-500/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Selected platform info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlatform}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center"
              >
                <p className="text-lg text-muted-foreground">
                  {platforms[selectedPlatform].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => {
                setHoveredPlatform(i)
                setSelectedPlatform(i)
              }}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <Card className={`h-full border-2 cursor-pointer transition-all ${
                selectedPlatform === i
                  ? 'border-primary shadow-lg shadow-primary/20'
                  : platform.available ? 'hover:border-primary/50' : 'opacity-80'
              }`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-6 border-2 border-white/20`}>
                    <platform.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <Badge variant="secondary" className="mb-6 text-sm px-3 py-1">
                    {platform.status}
                  </Badge>
                  <ul className="space-y-3">
                    {platform.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-base text-muted-foreground">
                        <div className="w-6 h-6 rounded-md bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {platform.available && (
                    <motion.div
                      className="mt-6 flex items-center text-primary font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: selectedPlatform === i ? 1 : 0 }}
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

