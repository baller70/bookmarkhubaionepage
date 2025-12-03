import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedScreenshotProps {
  children: ReactNode
  className?: string
  borderRadius?: string
}

export function AnimatedScreenshot({
  children,
  className,
  borderRadius = "rounded-2xl"
}: AnimatedScreenshotProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Static border */}
      <div
        className={cn(
          "absolute -inset-[2px] border-2 border-primary/20",
          borderRadius
        )}
      />

      {/* Animated moving streak/flair */}
      <div
        className={cn(
          "absolute -inset-[3px] overflow-hidden",
          borderRadius
        )}
      >
        <div
          className="absolute w-[150px] h-[150px]"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #84cc16 320deg, #facc15 340deg, #f97316 360deg)",
            animation: "rotate-streak 3.5s linear infinite",
            transformOrigin: "center",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />
      </div>

      {/* Glow for the streak */}
      <div
        className={cn(
          "absolute -inset-[3px] overflow-hidden blur-sm opacity-70",
          borderRadius
        )}
      >
        <div
          className="absolute"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #84cc16 320deg, #facc15 340deg, #f97316 360deg)",
            animation: "rotate-streak 3.5s linear infinite",
            transformOrigin: "center",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />
      </div>

      {/* Inner content container */}
      <div className={cn("relative bg-background overflow-hidden", borderRadius)}>
        {children}
      </div>

      {/* CSS for the animation */}
      <style>{`
        @keyframes rotate-streak {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

// Variant with browser frame
interface AnimatedBrowserFrameProps {
  children: ReactNode
  url?: string
  className?: string
}

export function AnimatedBrowserFrame({
  children,
  url = "app.bookmarkaihub.ai",
  className
}: AnimatedBrowserFrameProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Static border */}
      <div className="absolute -inset-[2px] rounded-2xl border-2 border-primary/20" />

      {/* Animated moving streak/flair */}
      <div className="absolute -inset-[3px] rounded-2xl overflow-hidden">
        <div
          className="absolute"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #84cc16 320deg, #facc15 340deg, #f97316 360deg)",
            animation: "rotate-streak 3.5s linear infinite",
            transformOrigin: "center",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />
      </div>

      {/* Glow for the streak */}
      <div className="absolute -inset-[3px] rounded-2xl overflow-hidden blur-sm opacity-70">
        <div
          className="absolute"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #84cc16 320deg, #facc15 340deg, #f97316 360deg)",
            animation: "rotate-streak 3.5s linear infinite",
            transformOrigin: "center",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />
      </div>

      {/* Browser frame */}
      <div className="relative bg-background rounded-2xl overflow-hidden">
        {/* Browser header */}
        <div className="bg-muted p-3 flex items-center gap-2 border-b border-border/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 bg-background rounded-lg px-4 py-1.5 text-sm text-muted-foreground text-center">
            {url}
          </div>
        </div>
        {/* Content */}
        <div className="overflow-hidden">
          {children}
        </div>
      </div>

      {/* CSS for the animation - reuse same keyframes */}
      <style>{`
        @keyframes rotate-streak {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

