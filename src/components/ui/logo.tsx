"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animated?: boolean
}

const sizes = {
  sm: { height: 36, width: 180 },
  md: { height: 44, width: 220 },
  lg: { height: 56, width: 280 },
  xl: { height: 72, width: 360 },
}

export function Logo({ size = "md", className, animated = false }: LogoProps) {
  const { height, width } = sizes[size]

  const imageElement = (
    <Image
      src="/logo.png"
      alt="Bookmark AI Hub"
      width={width}
      height={height}
      className="h-auto object-contain"
      style={{ width: 'auto', height: `${height}px` }}
      priority
    />
  )

  if (animated) {
    return (
      <motion.div
        className={cn("flex items-center", className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {imageElement}
      </motion.div>
    )
  }

  return (
    <div className={cn("flex items-center", className)}>
      {imageElement}
    </div>
  )
}

// Alternative minimal logo for small spaces (just the icon portion)
export function LogoMark({ size = "md", className }: { size?: "sm" | "md" | "lg", className?: string }) {
  const sizeClasses = {
    sm: { height: 28, width: 28 },
    md: { height: 36, width: 36 },
    lg: { height: 48, width: 48 }
  }

  const { height, width } = sizeClasses[size]

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo-icon.png"
        alt="Bookmark AI Hub"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}
