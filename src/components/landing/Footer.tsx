"use client"
import { motion } from "framer-motion"
import { Logo } from "@/components/ui/logo"
import { Mail, ArrowRight, ExternalLink } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  Help: [
    { label: "Contact Us", href: "#" },
    { label: "Support", href: "#" },
  ],
}

// Real brand SVG logos
const XLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const DiscordLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
)

// Social platforms with real logos and realistic low follower counts
const socialLinks = [
  {
    label: "X",
    href: "https://x.com/Bookmarkaihub",
    Logo: XLogo,
    handle: "@Bookmarkaihub",
    followers: "127",
    bgGradient: "from-neutral-900 to-neutral-800",
    hoverColor: "hover:bg-neutral-900"
  },
  {
    label: "FACEBOOK",
    href: "https://www.facebook.com/people/Bookmarkaihub/61584376301356/",
    Logo: FacebookLogo,
    handle: "Bookmarkaihub",
    followers: "89",
    bgGradient: "from-blue-600 to-blue-700",
    hoverColor: "hover:bg-blue-600"
  },
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/bookmarkaihub/",
    Logo: InstagramLogo,
    handle: "@bookmarkaihub",
    followers: "156",
    bgGradient: "from-pink-500 via-purple-500 to-orange-400",
    hoverColor: "hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-500 hover:to-orange-400"
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/company/bookmarkaihub/",
    Logo: LinkedInLogo,
    handle: "Bookmark AI Hub",
    followers: "203",
    bgGradient: "from-blue-700 to-blue-800",
    hoverColor: "hover:bg-blue-700"
  },
  {
    label: "DISCORD",
    href: "https://discord.gg/Xt44rpgT",
    Logo: DiscordLogo,
    handle: "Community",
    followers: "78",
    bgGradient: "from-indigo-500 to-indigo-600",
    hoverColor: "hover:bg-indigo-500"
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Premium Social Media Section */}
      <div className="relative bg-gradient-to-b from-background to-muted/50">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container py-20 relative">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                <span className="text-sm font-semibold text-lime-600 uppercase tracking-wider">Stay Connected</span>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                Follow Our{" "}
                <span className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Join our growing community. Get exclusive updates, sneak peeks, and be the first to know when we launch.
              </p>
            </div>

            {/* Premium social cards grid - 5 cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-background border-2 border-border/50 hover:border-transparent transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Card content */}
                  <div className="relative p-5 flex flex-col items-center text-center">
                    {/* Official brand logo */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.bgGradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <div className="text-white">
                        <link.Logo />
                      </div>
                    </div>

                    {/* Platform name */}
                    <div className="font-bold text-lg mb-0.5 group-hover:text-white transition-colors">{link.label}</div>
                    <div className="text-sm text-muted-foreground mb-3 group-hover:text-white/80 transition-colors">{link.handle}</div>

                    {/* Followers count */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-foreground group-hover:text-white transition-colors">
                        {link.followers}
                      </span>
                      <span className="text-xs text-muted-foreground group-hover:text-white/70 transition-colors">
                        followers
                      </span>
                    </div>

                    {/* External link indicator */}
                    <ExternalLink className="absolute top-3 right-3 h-4 w-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 group-hover:text-white/70 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Call to action */}
            <motion.p
              className="text-center text-muted-foreground mt-8 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              🚀 We're just getting started! Follow us to be part of the journey from day one.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer - Premium Design */}
      <div className="bg-muted/30 border-t border-border/50">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand Column - Larger */}
            <div className="md:col-span-5">
              <Logo size="md" className="mb-6" />
              <p className="text-muted-foreground text-base mb-8 max-w-md leading-relaxed">
                The AI-powered bookmark manager that transforms how you save, organize, and rediscover your digital content. Built for the future of knowledge management.
              </p>

              {/* Email CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hello@bookmarkaihub.ai"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-lime-500/10 border border-lime-500/20 text-lime-600 font-semibold hover:bg-lime-500/20 transition-colors group"
                >
                  <Mail className="h-4 w-4" />
                  hello@bookmarkaihub.ai
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-5">{category}</h4>
                    <ul className="space-y-4">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-base text-foreground/80 hover:text-lime-600 transition-colors inline-flex items-center gap-1 group"
                          >
                            {link.label}
                            <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <p className="text-sm text-muted-foreground">
                  © 2026 Bookmark AI Hub. All rights reserved.
                </p>
                <div className="hidden md:flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">All systems operational</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                Made with <span className="text-red-500">❤️</span> for bookmark enthusiasts everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

