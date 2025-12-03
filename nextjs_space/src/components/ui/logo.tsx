import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  className?: string
  animated?: boolean
}

const sizes = {
  sm: { icon: "w-8 h-12", text: "text-lg" },
  md: { icon: "w-10 h-14", text: "text-xl" },
  lg: { icon: "w-14 h-20", text: "text-2xl" },
  xl: { icon: "w-20 h-28", text: "text-3xl" },
}

export function Logo({ size = "md", showText = true, className, animated = false }: LogoProps) {
  const { icon, text } = sizes[size]

  const IconWrapper = animated ? motion.div : "div"
  const animationProps = animated ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  } : {}

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <IconWrapper
        className={cn(
          icon,
          "relative flex items-center justify-center"
        )}
        {...animationProps}
      >
        {/* Main bookmark icon - Outlined with solid inside */}
        <div className="relative w-full h-full">
          <svg
            viewBox="0 0 32 48"
            fill="none"
            className="w-full h-full"
          >
            {/* Outer outlined bookmark stroke */}
            <path
              d="M2 4C2 2.89543 2.89543 2 4 2H28C29.1046 2 30 2.89543 30 4V44L16 35L2 44V4Z"
              stroke="url(#bookmark-outline-gradient)"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Inner solid filled bookmark */}
            <path
              d="M6 7C6 6.44772 6.44772 6 7 6H25C25.5523 6 26 6.44772 26 7V39L16 32L6 39V7Z"
              fill="url(#bookmark-fill-gradient)"
            />
            <defs>
              <linearGradient id="bookmark-outline-gradient" x1="16" y1="0" x2="16" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="bookmark-fill-gradient" x1="16" y1="6" x2="16" y2="39" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>

          {/* AI watermark text - centered in the bookmark */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '-15%' }}>
            <motion.span
              className="font-black text-amber-900/30 select-none"
              style={{ fontSize: 'clamp(10px, 45%, 18px)' }}
              animate={animated ? { opacity: [0.25, 0.4, 0.25] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AI
            </motion.span>
          </div>
        </div>
      </IconWrapper>

      {showText && (
        <span className={cn(text, "font-black tracking-tight leading-none whitespace-nowrap")}>
          <span className="text-foreground">BOOKMARK</span>
          <span className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">AI HUB</span>
        </span>
      )}
    </div>
  )
}

// Alternative minimal logo for small spaces
export function LogoMark({ size = "md", className }: { size?: "sm" | "md" | "lg", className?: string }) {
  const sizeClasses = {
    sm: "w-5 h-7",
    md: "w-6 h-9",
    lg: "w-10 h-14"
  }

  return (
    <div className={cn(
      sizeClasses[size],
      "relative flex items-center justify-center",
      className
    )}>
      <svg viewBox="0 0 32 48" fill="none" className="w-full h-full">
        {/* Outer outlined bookmark stroke */}
        <path
          d="M2 4C2 2.89543 2.89543 2 4 2H28C29.1046 2 30 2.89543 30 4V44L16 35L2 44V4Z"
          stroke="url(#bookmark-mark-outline)"
          strokeWidth="2"
          fill="none"
        />
        {/* Inner solid filled bookmark */}
        <path
          d="M6 7C6 6.44772 6.44772 6 7 6H25C25.5523 6 26 6.44772 26 7V39L16 32L6 39V7Z"
          fill="url(#bookmark-mark-fill)"
        />
        <defs>
          <linearGradient id="bookmark-mark-outline" x1="16" y1="0" x2="16" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="bookmark-mark-fill" x1="16" y1="6" x2="16" y2="39" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
      {/* AI text watermark */}
      <span className="absolute font-black text-amber-900/30 select-none" style={{ fontSize: 'clamp(6px, 35%, 12px)', marginTop: '-10%' }}>
        AI
      </span>
    </div>
  )
}

