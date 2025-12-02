import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Sparkles, LayoutGrid, Rocket, ArrowDown, ListOrdered } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Import Your Bookmarks",
    description: "Export bookmarks from any browser (Chrome, Firefox, Safari, Edge) and upload them to Bookmark AI Hub. We support HTML, JSON, and direct browser sync.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Organizes Everything",
    description: "Our AI analyzes each bookmark's content, automatically categorizing, tagging, and organizing them into logical groups. What takes hours manually happens in minutes.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: LayoutGrid,
    step: "03",
    title: "Choose Your View",
    description: "Access your organized bookmarks through 8 different view modes—Grid, List, Kanban, Timeline, and more. Each view is optimized for different workflows.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Rocket,
    step: "04",
    title: "Never Lose a Link Again",
    description: "With powerful search, smart filters, and AI-powered recommendations, you'll always find what you need. Your digital life, finally under control.",
    color: "from-green-500 to-emerald-500"
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0_/_0.03)_1px,_transparent_0)] bg-[length:32px_32px]" />

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 text-white border-0 px-5 py-2.5 text-base">
            <ListOrdered className="h-4 w-4 mr-2" />
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Chaos to Control in{" "}
            <span className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop spending hours organizing. Bookmark AI Hub does it in minutes.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 h-12 flex flex-col items-center justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-lime-500/50 to-lime-500/20" />
                  <ArrowDown className="h-4 w-4 text-lime-500/50" />
                </div>
              )}

              <Card className={`mb-16 border-2 hover:border-lime-500/30 transition-all overflow-hidden ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} md:max-w-[85%]`}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-stretch">
                    {/* Step number side */}
                    <div className={`bg-gradient-to-br ${step.color} p-8 flex flex-col items-center justify-center md:w-48 flex-shrink-0`}>
                      <div className="w-16 h-16 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center mb-3">
                        <step.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                      </div>
                      <span className="text-4xl font-bold text-white">{step.step}</span>
                    </div>

                    {/* Content side */}
                    <div className="p-8 flex-1">
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

