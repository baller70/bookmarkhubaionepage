"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"
import {
  CheckSquare,
  Timer,
  FileBox,
  MessageSquare,
  StickyNote,
  Target,
  ListTodo,
  Code,
  Highlighter,
  Sparkles,
  DollarSign,
  Link2,
  Network,
  Share2,
  Bell,
  Image,
  Folder,
  Tags,
  Star,
  Calendar,
  BookOpen,
  Zap
} from "lucide-react"

// Power tools with unique gradient colors for each icon
const powerTools: { icon: LucideIcon; name: string; description: string; gradient: string; shadowColor: string; iconColor: string; textGradient: string }[] = [
  { icon: CheckSquare, name: "To-Do Lists", description: "Create task lists for each bookmark to track progress and action items", gradient: "from-emerald-400 via-green-500 to-teal-600", shadowColor: "shadow-emerald-500/50", iconColor: "text-emerald-500", textGradient: "from-emerald-500 to-teal-600" },
  { icon: Timer, name: "Pomodoro Timer", description: "Built-in focus timer to boost productivity while working on bookmarked content", gradient: "from-rose-400 via-red-500 to-pink-600", shadowColor: "shadow-rose-500/50", iconColor: "text-rose-500", textGradient: "from-rose-500 to-pink-600" },
  { icon: FileBox, name: "File Storage", description: "Attach PDFs, images, and documents directly to your bookmarks", gradient: "from-blue-400 via-indigo-500 to-violet-600", shadowColor: "shadow-blue-500/50", iconColor: "text-blue-500", textGradient: "from-blue-500 to-violet-600" },
  { icon: MessageSquare, name: "Comments", description: "Add notes and context to remember why you saved each link", gradient: "from-cyan-400 via-sky-500 to-blue-600", shadowColor: "shadow-cyan-500/50", iconColor: "text-cyan-500", textGradient: "from-cyan-500 to-blue-600" },
  { icon: StickyNote, name: "Quick Notes", description: "Instant note-taking with rich text formatting support", gradient: "from-yellow-400 via-amber-500 to-orange-600", shadowColor: "shadow-yellow-500/50", iconColor: "text-amber-500", textGradient: "from-amber-500 to-orange-600" },
  { icon: Target, name: "Habits Tracker", description: "Build consistent browsing habits with daily/weekly goals", gradient: "from-fuchsia-400 via-purple-500 to-violet-600", shadowColor: "shadow-fuchsia-500/50", iconColor: "text-fuchsia-500", textGradient: "from-fuchsia-500 to-violet-600" },
  { icon: ListTodo, name: "Custom Lists", description: "Create custom lists to organize bookmarks your way", gradient: "from-lime-400 via-green-500 to-emerald-600", shadowColor: "shadow-lime-500/50", iconColor: "text-lime-500", textGradient: "from-lime-500 to-emerald-600" },
  { icon: Code, name: "Code Snippets", description: "Save code with syntax highlighting for 50+ languages", gradient: "from-slate-400 via-gray-500 to-zinc-700", shadowColor: "shadow-slate-500/50", iconColor: "text-slate-500", textGradient: "from-slate-500 to-zinc-600" },
  { icon: Highlighter, name: "Web Highlights", description: "Highlight and save important text from any webpage", gradient: "from-yellow-300 via-yellow-400 to-amber-500", shadowColor: "shadow-yellow-400/50", iconColor: "text-yellow-500", textGradient: "from-yellow-500 to-amber-500" },
  { icon: Sparkles, name: "AI Summary", description: "Get AI-generated summaries of bookmarked articles", gradient: "from-violet-400 via-purple-500 to-fuchsia-600", shadowColor: "shadow-violet-500/50", iconColor: "text-violet-500", textGradient: "from-violet-500 to-fuchsia-600" },
  { icon: DollarSign, name: "Price Tracker", description: "Track price changes on e-commerce bookmarks", gradient: "from-green-400 via-emerald-500 to-teal-600", shadowColor: "shadow-green-500/50", iconColor: "text-green-500", textGradient: "from-green-500 to-teal-600" },
  { icon: Link2, name: "Related Sources", description: "Discover similar content based on your bookmarks", gradient: "from-indigo-400 via-blue-500 to-cyan-600", shadowColor: "shadow-indigo-500/50", iconColor: "text-indigo-500", textGradient: "from-indigo-500 to-cyan-600" },
  { icon: Network, name: "Connections", description: "Link related bookmarks together for easy navigation", gradient: "from-purple-400 via-violet-500 to-indigo-600", shadowColor: "shadow-purple-500/50", iconColor: "text-purple-500", textGradient: "from-purple-500 to-indigo-600" },
  { icon: Share2, name: "Sharing", description: "Share individual bookmarks or collections with anyone", gradient: "from-sky-400 via-cyan-500 to-teal-600", shadowColor: "shadow-sky-500/50", iconColor: "text-sky-500", textGradient: "from-sky-500 to-teal-600" },
  { icon: Bell, name: "Notifications", description: "Set smart reminders to revisit important bookmarks", gradient: "from-orange-400 via-amber-500 to-yellow-600", shadowColor: "shadow-orange-500/50", iconColor: "text-orange-500", textGradient: "from-orange-500 to-yellow-600" },
  { icon: Image, name: "Media Gallery", description: "Store screenshots and images with your bookmarks", gradient: "from-pink-400 via-rose-500 to-red-600", shadowColor: "shadow-pink-500/50", iconColor: "text-pink-500", textGradient: "from-pink-500 to-red-600" },
  { icon: Folder, name: "Sub-folders", description: "Create nested folder structures for deep organization", gradient: "from-amber-400 via-orange-500 to-red-600", shadowColor: "shadow-amber-500/50", iconColor: "text-amber-500", textGradient: "from-amber-500 to-red-600" },
  { icon: Tags, name: "Smart Tags", description: "AI automatically suggests relevant tags for each bookmark", gradient: "from-teal-400 via-cyan-500 to-sky-600", shadowColor: "shadow-teal-500/50", iconColor: "text-teal-500", textGradient: "from-teal-500 to-sky-600" },
  { icon: Star, name: "Priority Levels", description: "Mark bookmarks as high, medium, or low priority", gradient: "from-yellow-400 via-orange-500 to-red-500", shadowColor: "shadow-yellow-500/50", iconColor: "text-yellow-500", textGradient: "from-yellow-500 to-red-500" },
  { icon: Calendar, name: "Date Tracking", description: "View bookmarks on a timeline by date saved or modified", gradient: "from-blue-400 via-sky-500 to-cyan-600", shadowColor: "shadow-blue-500/50", iconColor: "text-blue-500", textGradient: "from-blue-500 to-cyan-600" },
  { icon: BookOpen, name: "Reading List", description: "Queue articles for later reading with progress tracking", gradient: "from-emerald-400 via-teal-500 to-cyan-600", shadowColor: "shadow-emerald-500/50", iconColor: "text-emerald-500", textGradient: "from-emerald-500 to-cyan-600" },
]

function FlipCard({ tool, index }: { tool: typeof powerTools[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-32 sm:h-36 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Clean minimal design with large icon */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-full w-full rounded-xl sm:rounded-2xl bg-white dark:bg-background border border-black/10 dark:border-white/10 flex flex-col items-center justify-center text-center p-2 sm:p-3">
            {/* Subtle glow effect behind icon */}
            <div className={`absolute top-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${tool.gradient} rounded-full blur-xl sm:blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />

            {/* Large icon - NO container, just the icon */}
            <tool.icon
              className={`h-10 sm:h-14 w-10 sm:w-14 ${tool.iconColor} relative z-10 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm`}
              strokeWidth={1.5}
            />

            {/* Title with gradient color */}
            <h4 className={`mt-1 sm:mt-2 font-bold text-[9px] sm:text-[10px] uppercase tracking-wider bg-gradient-to-r ${tool.textGradient} bg-clip-text text-transparent`}>{tool.name}</h4>
          </div>
        </div>

        {/* Back - Description (keep gradient fill) */}
        <div
          className={`absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl border-2 border-white/20 bg-gradient-to-br ${tool.gradient} p-3 sm:p-4 flex flex-col items-center justify-center text-center text-white shadow-lg sm:shadow-xl ${tool.shadowColor}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Inner highlight */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-black/10" />
          <tool.icon className="h-5 sm:h-7 w-5 sm:w-7 mb-1 sm:mb-2 relative z-10 drop-shadow-md" strokeWidth={1.5} />
          <p className="text-[10px] sm:text-xs leading-snug sm:leading-relaxed relative z-10 font-medium">{tool.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function PowerTools() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container relative">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 text-white border-0 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Revolutionary Feature
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">21 Power Tools</span>
            <br />
            <span className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Per Bookmark
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Not just bookmarks—<span className="font-bold text-foreground">your entire digital project management system</span>.
            Transform every saved link into a complete workspace. <span className="text-lime-600 font-medium">Hover to learn more about each tool.</span>
          </p>
        </motion.div>

        {/* Power tools grid with flip cards - MOBILE OPTIMIZED */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
          {powerTools.map((tool, i) => (
            <FlipCard key={i} tool={tool} index={i} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Every bookmark becomes a <span className="font-bold text-lime-600">mini-project hub</span> with all the tools you need.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
