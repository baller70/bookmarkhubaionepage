"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  className?: string
  animated?: boolean
}

const sizes = {
  sm: { icon: "w-12 h-12", text: "text-xl", aiText: "text-[10px]" },
  md: { icon: "w-14 h-14", text: "text-2xl", aiText: "text-xs" },
  lg: { icon: "w-18 h-18", text: "text-3xl", aiText: "text-sm" },
  xl: { icon: "w-24 h-24", text: "text-4xl", aiText: "text-base" },
}

export function Logo({ size = "md", showText = true, className, animated = false }: LogoProps) {
  const { icon, text, aiText } = sizes[size]

  const iconContent = (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-full h-full"
      >
        {/* Outer dark rounded rectangle border */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="10"
          ry="10"
          fill="#3D2F1F"
        />
        {/* Inner golden/tan background */}
        <rect
          x="5"
          y="5"
          width="38"
          height="38"
          rx="7"
          ry="7"
          fill="#C9A55C"
        />
        {/* Bookmark shape with AI text */}
        <path
          d="M16 10H32V32L24 26L16 32V10Z"
          fill="#3D2F1F"
        />
      </svg>

      {/* AI text inside the bookmark */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '-8%' }}>
        <span
          className={cn(aiText, "font-black text-[#C9A55C] select-none tracking-tight")}
        >
          AI
        </span>
      </div>
    </div>
  )

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {showText && (
        <span className={cn(text, "font-black tracking-tight leading-none whitespace-nowrap text-foreground")}>
          BOOKMARK
        </span>
      )}
      
      {animated ? (
        <motion.div
          className={cn(icon, "relative flex items-center justify-center")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {iconContent}
        </motion.div>
      ) : (
        <div className={cn(icon, "relative flex items-center justify-center")}>
          {iconContent}
        </div>
      )}

      {showText && (
        <span className={cn(text, "font-black tracking-tight leading-none whitespace-nowrap text-foreground")}>
          HUB
        </span>
      )}
    </div>
  )
}

// Alternative minimal logo for small spaces (just the icon)
export function LogoMark({ size = "md", className }: { size?: "sm" | "md" | "lg", className?: string }) {
  const sizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12"
  }

  const aiTextSizes = {
    sm: "text-[6px]",
    md: "text-[8px]",
    lg: "text-[10px]"
  }

  return (
    <div className={cn(
      sizeClasses[size],
      "relative flex items-center justify-center",
      className
    )}>
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        {/* Outer dark rounded rectangle border */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="10"
          ry="10"
          fill="#3D2F1F"
        />
        {/* Inner golden/tan background */}
        <rect
          x="5"
          y="5"
          width="38"
          height="38"
          rx="7"
          ry="7"
          fill="#C9A55C"
        />
        {/* Bookmark shape */}
        <path
          d="M16 10H32V32L24 26L16 32V10Z"
          fill="#3D2F1F"
        />
      </svg>
      {/* AI text inside */}
      <span 
        className={cn(aiTextSizes[size], "absolute font-black text-[#C9A55C] select-none tracking-tight")}
        style={{ marginTop: '-8%' }}
      >
        AI
      </span>
    </div>
  )
}
