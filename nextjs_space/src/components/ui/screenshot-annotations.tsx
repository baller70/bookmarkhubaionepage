import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface CalloutBadgeProps {
  icon: LucideIcon
  label: string
  sublabel?: string
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left" | "right"
  color?: string
  delay?: number
  showArrow?: boolean
  arrowDirection?: "left" | "right" | "up" | "down"
  size?: "sm" | "md" | "lg" | "xl"
}

export function CalloutBadge({
  icon: Icon,
  label,
  sublabel,
  position,
  color = "from-primary to-purple-500",
  delay = 0,
  showArrow = true,
  arrowDirection = "right",
  size = "md"
}: CalloutBadgeProps) {
  const positionClasses = {
    "top-left": "-top-4 -left-8 md:-left-16",
    "top-right": "-top-4 -right-8 md:-right-16",
    "bottom-left": "-bottom-4 -left-8 md:-left-16",
    "bottom-right": "-bottom-4 -right-8 md:-right-16",
    "left": "top-1/2 -translate-y-1/2 -left-12 md:-left-24",
    "right": "top-1/2 -translate-y-1/2 -right-12 md:-right-24"
  }

  const arrowClasses = {
    left: "right-full mr-2",
    right: "left-full ml-2",
    up: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    down: "top-full mt-2 left-1/2 -translate-x-1/2"
  }

  const sizeConfig = {
    sm: { padding: "px-3 py-2", iconSize: "w-7 h-7", iconInner: "h-3.5 w-3.5", label: "text-sm", sublabel: "text-xs" },
    md: { padding: "px-4 py-2.5", iconSize: "w-8 h-8", iconInner: "h-4 w-4", label: "text-sm", sublabel: "text-xs" },
    lg: { padding: "px-5 py-3", iconSize: "w-10 h-10", iconInner: "h-5 w-5", label: "text-base font-extrabold", sublabel: "text-sm" },
    xl: { padding: "px-6 py-4", iconSize: "w-12 h-12", iconInner: "h-6 w-6", label: "text-lg font-extrabold", sublabel: "text-sm font-medium" }
  }

  const config = sizeConfig[size]

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} z-20`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="relative"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow effect for larger sizes */}
        {(size === "lg" || size === "xl") && (
          <div className={`absolute -inset-2 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-30`} />
        )}

        {/* Callout badge */}
        <div className={`relative flex items-center gap-3 ${config.padding} rounded-xl bg-background/95 backdrop-blur-sm border-2 border-border shadow-2xl`}>
          <div className={`${config.iconSize} rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
            <Icon className={`${config.iconInner} text-white`} strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <div className={`${config.label} whitespace-nowrap`}>{label}</div>
            {sublabel && <div className={`${config.sublabel} text-muted-foreground whitespace-nowrap`}>{sublabel}</div>}
          </div>
        </div>

        {/* Connecting arrow */}
        {showArrow && (
          <div className={`absolute ${arrowClasses[arrowDirection]} flex items-center`}>
            {(arrowDirection === "left" || arrowDirection === "right") && (
              <svg width="50" height="24" viewBox="0 0 50 24" className="text-primary">
                <path
                  d={arrowDirection === "right" ? "M0 12 Q25 12 50 12" : "M50 12 Q25 12 0 12"}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="5 3"
                />
                <circle cx={arrowDirection === "right" ? 47 : 3} cy="12" r="4" fill="currentColor" />
              </svg>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

interface FloatingIconProps {
  icon: LucideIcon
  position: string
  color?: string
  delay?: number
  size?: "sm" | "md" | "lg"
}

export function FloatingIcon({
  icon: Icon,
  position,
  color = "from-primary/20 to-purple-500/20",
  delay = 0,
  size = "md"
}: FloatingIconProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14"
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  }

  return (
    <motion.div
      className={`absolute ${position} z-10`}
      initial={{ opacity: 0, scale: 0, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br ${color} backdrop-blur-sm border border-white/20 shadow-lg flex items-center justify-center`}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className={`${iconSizes[size]} text-foreground/80`} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  )
}

interface StatBadgeProps {
  value: string
  label: string
  position: string
  color?: string
  delay?: number
}

export function StatBadge({ value, label, position, color = "from-green-500 to-emerald-500", delay = 0 }: StatBadgeProps) {
  return (
    <motion.div
      className={`absolute ${position} z-20`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="px-4 py-3 rounded-xl bg-background/95 backdrop-blur-sm border-2 border-border shadow-xl">
        <div className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{value}</div>
        <div className="text-xs text-muted-foreground whitespace-nowrap">{label}</div>
      </div>
    </motion.div>
  )
}

