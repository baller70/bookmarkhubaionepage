"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { WaitlistModal } from "@/components/landing/WaitlistModal"
import { Menu, X, ChevronRight, Sparkles } from "lucide-react"

const navLinks = [
  { label: "FEATURES", href: "#features" },
  { label: "ANALYTICS", href: "#analytics" },
  { label: "PRICING", href: "/pricing" },
  { label: "MARKETPLACE", href: "#marketplace" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(247)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    async function fetchWaitlistCount() {
      try {
        const response = await fetch("/api/waitlist/count")
        if (response.ok) {
          const data = await response.json()
          setWaitlistCount(data.count + 1)
        }
      } catch {
        // Use default count
      }
    }
    fetchWaitlistCount()
  }, [])

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Premium top accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500" />

      <div className="container flex h-18 py-4 items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Logo size="sm" animated />
        </motion.a>

        {/* Desktop Navigation - Premium pill style */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={`relative px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  activeLink === link.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onMouseEnter={() => setActiveLink(link.href)}
                onMouseLeave={() => setActiveLink("")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeLink === link.href && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 rounded-full"
                    layoutId="navbar-active"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop CTA - Premium design */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => setWaitlistModalOpen(true)}
              className="px-6 py-5 text-sm font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 hover:from-orange-600 hover:via-orange-500 hover:to-yellow-500 text-white border-0 rounded-full shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              JOIN WAITING LIST
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button - Enhanced */}
        <motion.button
          className="md:hidden p-3 rounded-xl border border-border/50 bg-muted/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu - Premium slide-down design */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="flex items-center justify-between p-4 rounded-xl text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
              <div className="pt-4 mt-4 border-t border-border/50">
                <Button
                  onClick={() => { setMobileMenuOpen(false); setWaitlistModalOpen(true); }}
                  className="w-full py-6 text-base font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 hover:from-orange-600 hover:via-orange-500 hover:to-yellow-500 text-white border-0 rounded-full shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  JOIN WAITING LIST
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={waitlistModalOpen}
        onClose={() => setWaitlistModalOpen(false)}
        nextPosition={waitlistCount}
      />
    </motion.nav>
  )
}

