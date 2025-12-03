"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "./WaitlistModal"
import {
  DollarSign,
  Download,
  Star,
  Users,
  Sparkles,
  ArrowRight,
  Store,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Bookmark
} from "lucide-react"
const marketplaceImg = "/screenshots/marketplace.png"
import { AnimatedScreenshot } from "@/components/ui/animated-screenshot"

// Realistic pre-launch stats
const stats = [
  { icon: Users, value: "50+", label: "Beta Creators" },
  { icon: Download, value: "200+", label: "Beta Downloads" },
  { icon: Star, value: "4.7", label: "Avg Rating" },
  { icon: DollarSign, value: "80%", label: "Creator Revenue" },
]

// Example playbooks with expanded content
const examplePlaybooks = [
  {
    name: "Web Dev Starter Kit",
    price: 19.99,
    category: "Development",
    rating: 4.9,
    sales: 127,
    bookmarks: [
      "MDN Web Docs - Complete Reference",
      "CSS-Tricks - Modern CSS Guide",
      "JavaScript.info Tutorial",
      "React Documentation",
      "Tailwind CSS Cheatsheet",
      "GitHub Best Practices",
      "+12 more resources"
    ]
  },
  {
    name: "Design Inspiration Pack",
    price: 14.99,
    category: "Design",
    rating: 4.8,
    sales: 89,
    bookmarks: [
      "Dribbble Top Shots Collection",
      "Behance Best Projects",
      "Figma Community Files",
      "Color Palette Generators",
      "Font Pairing Resources",
      "+8 more resources"
    ]
  },
  {
    name: "AI Learning Resources",
    price: 24.99,
    category: "AI/ML",
    rating: 4.9,
    sales: 203,
    bookmarks: [
      "OpenAI API Documentation",
      "Hugging Face Tutorials",
      "LangChain Guide",
      "Prompt Engineering Bible",
      "AI Research Papers",
      "ML Model Comparisons",
      "+15 more resources"
    ]
  },
  {
    name: "Startup Toolkit",
    price: 29.99,
    category: "Business",
    rating: 4.7,
    sales: 156,
    bookmarks: [
      "YC Startup Library",
      "Pitch Deck Templates",
      "Legal Document Templates",
      "Funding Database",
      "Growth Hacking Strategies",
      "Marketing Playbooks",
      "+20 more resources"
    ]
  },
]

function PlaybookCard({ playbook, index }: { playbook: typeof examplePlaybooks[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        className="border-2 border-green-500/20 hover:border-green-500/50 bg-background/80 backdrop-blur overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-0">
          {/* Price banner - HUGE emphasis */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white/80 text-sm font-medium">EARN</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-white text-3xl md:text-4xl font-black">$</span>
              <span className="text-white text-4xl md:text-5xl font-black">{playbook.price.toFixed(0)}</span>
              <span className="text-white text-2xl md:text-3xl font-bold">.{(playbook.price % 1).toFixed(2).slice(2)}</span>
            </div>
          </div>

          {/* Card content */}
          <div className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-lg group-hover:text-green-600 transition-colors">{playbook.name}</h4>
                <Badge variant="outline" className="mt-1 text-xs">{playbook.category}</Badge>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-bold">{playbook.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">{playbook.sales} sales</span>
              </div>
            </div>

            {/* Expand button */}
            <button
              className="w-full flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Bookmark className="h-4 w-4" />
              <span>{playbook.bookmarks.length} bookmarks included</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            {/* Expandable bookmarks list */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 border-t mt-2 space-y-2">
                    {playbook.bookmarks.map((bookmark, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ExternalLink className="h-3 w-3 flex-shrink-0" />
                        <span className="truncate">{bookmark}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function MarketplaceSection() {
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

  return (
    <section className="py-24 bg-gradient-to-b from-background via-green-500/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-5 py-2.5 text-base">
            <Store className="h-4 w-4 mr-2" />
            Unique Feature
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Monetize Your Knowledge
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The first bookmark manager where you can <span className="font-bold text-foreground">get paid for your curated collections</span>.
            Your bookmarks have value—now capitalize on your expertise.
          </p>
        </motion.div>

        {/* What is a Playbook - Layman's explanation */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl border-2 border-green-500/20 bg-green-500/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 border-2 border-green-500/30">
              <HelpCircle className="h-7 w-7 text-green-600" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-green-700">What's a Playbook?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Think of it like a curated playlist, but for bookmarks.</span> Instead of songs, you're collecting the best links around a topic you know well.
                For example, if you're a web developer, you might create a "Frontend Starter Kit" with your favorite tutorials, tools, and resources.
                Other users can buy your Playbook and instantly get access to all those carefully selected links. <span className="text-green-600 font-medium">You keep 80% of every sale.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <Card key={i} className="border-2 border-green-500/20 bg-background/50">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl border-2 border-green-500/20 bg-green-500/10 flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-green-600" strokeWidth={1.5} />
                </div>
                <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                <div className="text-base text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Screenshot */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur-2xl" />
            <AnimatedScreenshot className="shadow-2xl">
              <img src={marketplaceImg} alt="Marketplace" className="w-full" />
            </AnimatedScreenshot>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold">
              Turn Your Research Into Revenue
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Spent hours finding the best resources on a topic? Package them into a Playbook and sell it to others who need the same information.
              It's like being a curator at a museum—except you get paid for your expertise.
            </p>

            <Button 
              onClick={() => setIsModalOpen(true)}
              size="lg" 
              className="h-14 px-8 text-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Join Waitlist to Create Playbooks
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Example Playbooks - PREMIUM CARDS with huge pricing */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Example Playbooks You Could Create</h3>
            <p className="text-muted-foreground text-lg">Click to see what's included in each playbook</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {examplePlaybooks.map((playbook, i) => (
              <PlaybookCard key={i} playbook={playbook} index={i} />
            ))}
          </div>

          {/* Earnings potential callout */}
          <motion.div
            className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-2">Potential monthly earnings with just 10 sales per playbook:</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-green-600 text-5xl md:text-6xl font-black">$</span>
              <span className="text-green-600 text-6xl md:text-7xl font-black">712</span>
              <span className="text-2xl text-muted-foreground font-medium">/month</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Based on 80% creator revenue share</p>
          </motion.div>
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

