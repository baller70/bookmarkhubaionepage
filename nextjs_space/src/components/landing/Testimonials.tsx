"use client"
import { useRef, useState } from "react"
import { motion, useAnimationFrame } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "The AI categorization is surprisingly accurate. I imported 500+ bookmarks and it organized them better than I ever could manually. Really impressed with the beta.",
    author: "Sarah C.",
    role: "Graduate Researcher",
    avatar: "SC",
    rating: 5
  },
  {
    quote: "As a developer, I save tons of documentation links. The smart tagging and search have already saved me hours. The Kanban view is perfect for project resources.",
    author: "Marcus J.",
    role: "Full-Stack Developer",
    avatar: "MJ",
    rating: 5
  },
  {
    quote: "Love the concept of the marketplace! Being able to share curated collections with my team is exactly what we needed. Can't wait for the full launch.",
    author: "Emily R.",
    role: "Content Creator",
    avatar: "ER",
    rating: 4
  },
  {
    quote: "The DNA Profile feature is unique. It actually learns my preferences and the recommendations get better over time. Haven't seen this in other bookmark tools.",
    author: "David K.",
    role: "Startup Founder",
    avatar: "DK",
    rating: 5
  },
  {
    quote: "I've tried many bookmark tools. This one has the most thoughtful design. The 8 different views mean I can organize differently for different projects.",
    author: "Lisa T.",
    role: "Freelance Designer",
    avatar: "LT",
    rating: 5
  },
  {
    quote: "The analytics feature is eye-opening. I now know which resources I actually use vs. just save. Great for understanding my own browsing habits.",
    author: "Alex P.",
    role: "Data Science Student",
    avatar: "AP",
    rating: 4
  }
]

// Custom rating indicator - filled circles instead of stars
function RatingIndicator({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full transition-all ${
            i < rating
              ? 'bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 shadow-sm shadow-lime-500/30'
              : 'bg-muted-foreground/20'
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-semibold text-muted-foreground">{rating}.0</span>
    </div>
  )
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Auto-scroll animation
  useAnimationFrame(() => {
    if (!isPaused && scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      setScrollPosition(prev => {
        const newPos = prev + 0.5
        return newPos >= maxScroll ? 0 : newPos
      })
      scrollRef.current.scrollLeft = scrollPosition
    }
  })

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const newPosition = direction === 'left'
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount
      setScrollPosition(Math.max(0, newPosition))
      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
    }
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-500/5 via-transparent to-transparent" />

      <div className="container relative">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-lime-500/10 to-orange-500/10 text-lime-600 border border-lime-500/20 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold">
            <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-md border border-lime-500/30 flex items-center justify-center mr-2">
              <Quote className="h-2.5 sm:h-3 w-2.5 sm:w-3" />
            </div>
            BETA TESTER FEEDBACK
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight px-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Beta Testers
            </span>{" "}
            Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Real feedback from real users who've been testing Bookmark AI Hub before launch.
          </p>
        </motion.div>

        {/* Navigation buttons - MOBILE OPTIMIZED */}
        <div className="flex justify-end gap-2 mb-4 sm:mb-6 px-4">
          <motion.button
            onClick={() => scroll('left')}
            className="p-2 sm:p-3 rounded-lg sm:rounded-xl border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-muted transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
          <motion.button
            onClick={() => scroll('right')}
            className="p-2 sm:p-3 rounded-lg sm:rounded-xl border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-muted transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        </div>

        {/* Scrolling testimonials container - MOBILE OPTIMIZED */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Double the testimonials for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[360px] md:w-[400px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1 }}
              >
                <Card className="h-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-lime-500/30 hover:shadow-xl hover:shadow-lime-500/5 transition-all duration-300 group">
                  <CardContent className="p-5 sm:p-6 md:p-8">
                    {/* Top row: Quote icon and rating */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-lime-500/10 to-orange-500/10 border border-lime-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-lime-600" strokeWidth={1.5} />
                      </div>
                      <RatingIndicator rating={testimonial.rating} />
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-6 sm:mb-8 leading-relaxed line-clamp-4">
                      "{testimonial.quote}"
                    </p>

                    {/* Author - Premium card style */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 border-2 border-lime-500/20 ring-2 sm:ring-4 ring-lime-500/5">
                        <AvatarFallback className="bg-gradient-to-br from-lime-500/20 to-orange-500/20 text-lime-600 font-bold text-base sm:text-lg">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-base sm:text-lg">{testimonial.author}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                Math.floor(scrollPosition / 300) % testimonials.length === index
                  ? 'bg-primary w-4 sm:w-6'
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
