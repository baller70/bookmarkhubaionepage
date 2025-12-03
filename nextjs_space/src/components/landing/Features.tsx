import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  LayoutDashboard, 
  Brain, 
  Sparkles, 
  Store, 
  FolderKanban, 
  Search,
  Tags,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Clock
} from "lucide-react"

const features = [
  {
    icon: LayoutDashboard,
    title: "8 Powerful View Modes",
    description: "Grid, Compact, List, Timeline, Hierarchy, Folder 2.0, Goal 2.0, and Kanban views to organize your way.",
    color: "text-blue-500"
  },
  {
    icon: Brain,
    title: "AI-Powered Organization",
    description: "Let AI automatically categorize, tag, and prioritize your bookmarks based on content analysis.",
    color: "text-purple-500"
  },
  {
    icon: Sparkles,
    title: "Smart DNA Profile",
    description: "Personalize your experience with content preferences, interests, and learning styles.",
    color: "text-pink-500"
  },
  {
    icon: Store,
    title: "Playbook Marketplace",
    description: "Browse 1,200+ curated playbooks or share your own bookmark collections with the community.",
    color: "text-green-500"
  },
  {
    icon: FolderKanban,
    title: "Advanced Filtering",
    description: "Filter by category, tags, priority, date, usage stats, and more with powerful search.",
    color: "text-orange-500"
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Track visits, engagement scores, and discover your most valuable bookmarks.",
    color: "text-cyan-500"
  },
  {
    icon: Tags,
    title: "Auto-Tagging",
    description: "AI LinkPilot automatically extracts metadata and applies relevant tags to new bookmarks.",
    color: "text-yellow-500"
  },
  {
    icon: Zap,
    title: "Bulk Operations",
    description: "Select multiple bookmarks for batch editing, moving, tagging, or deletion.",
    color: "text-red-500"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and never shared. Full control over your privacy settings.",
    color: "text-emerald-500"
  },
  {
    icon: Globe,
    title: "Browser Extension",
    description: "Save bookmarks instantly from any webpage with our Chrome and Firefox extensions.",
    color: "text-indigo-500"
  },
  {
    icon: Search,
    title: "Instant Search",
    description: "Find any bookmark in milliseconds with full-text search across titles, descriptions, and content.",
    color: "text-teal-500"
  },
  {
    icon: Clock,
    title: "Time Capsule",
    description: "Rediscover forgotten bookmarks with smart reminders and time-based suggestions.",
    color: "text-violet-500"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to master your bookmarks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to transform how you save, organize, and rediscover your digital content.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-muted hover:border-lime-500/20">
              <CardContent className="p-6">
                <feature.icon className={`h-10 w-10 mb-4 ${feature.color} group-hover:scale-110 transition-transform`} />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

