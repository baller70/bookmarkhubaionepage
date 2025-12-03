"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/ui/logo"
import { Menu, X, Sparkles, ChevronRight, Rocket } from "lucide-react"
import { WaitlistModal } from "./WaitlistModal"

const navLinks = [
  { label: "FEATURES", href: "#features" },
  { label: "ANALYTICS", href: "#analytics" },
  { label: "MARKETPLACE", href: "#marketplace" },
  { label: "FAQ", href: "#faq" },
]

// Hardcoded waitlist position
const WAITLIST_POSITION = 248

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
          <Badge
            variant="outline"
            className="px-4 py-2 text-xs font-semibold border-amber-500/30 bg-amber-500/10 text-amber-600 gap-2"
          >
            <Rocket className="h-3.5 w-3.5" />
            Q1 2026
          </Badge>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="relative overflow-hidden bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:from-lime-600 hover:via-yellow-500 hover:to-orange-600 shadow-lg shadow-lime-500/25 px-6 py-5 text-sm font-semibold group text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Sparkles className="h-4 w-4 mr-2" />
              Join Waitlist #{WAITLIST_POSITION}
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
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
                  onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true) }}
                  className="w-full bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 py-6 text-base font-semibold text-white"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Join Waitlist #{WAITLIST_POSITION}
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nextPosition={WAITLIST_POSITION}
      />
    </motion.nav>
  )
}

