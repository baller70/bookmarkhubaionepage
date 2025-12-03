"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Sparkles, Shield, Zap, Users, Folder, Brain, Globe } from "lucide-react"

const faqs = [
  {
    icon: Sparkles,
    question: "How does the AI categorization work?",
    answer: "Our AI analyzes the content, title, and metadata of each bookmark to automatically assign relevant categories and tags. It learns from your preferences over time to improve accuracy. You can also set custom rules in the AI LinkPilot settings."
  },
  {
    icon: Folder,
    question: "Can I import bookmarks from my current browser?",
    answer: "Yes! Bookmark AI Hub supports importing from all major browsers including Chrome, Firefox, Safari, Edge, and Opera. Simply export your bookmarks as HTML or JSON and upload them to Bookmark AI Hub. We'll preserve your folder structure and add AI-powered enhancements."
  },
  {
    icon: Shield,
    question: "Is my data secure and private?",
    answer: "Absolutely. Your data is encrypted both in transit and at rest. We never share your bookmarks or browsing data with third parties. You have full control over your privacy settings, and you can export or delete your data at any time."
  },
  {
    icon: Zap,
    question: "What are Playbooks in the Marketplace?",
    answer: "Think of Playbooks like curated playlists, but for bookmarks. They're collections of links around specific topics like 'Web Development Resources' or 'UX Design Inspiration'. You can browse and download playbooks created by the community, or create and sell your own."
  },
  {
    icon: Brain,
    question: "How does the DNA Profile personalization work?",
    answer: "Your DNA Profile captures your content preferences, interests, learning style, and browsing habits. This information helps Bookmark AI Hub provide personalized recommendations, smart suggestions, and organize your bookmarks in ways that match how you think."
  },
  {
    icon: Globe,
    question: "Can I use Bookmark AI Hub offline?",
    answer: "Yes, the browser extension allows you to access your bookmarks offline. Any changes you make will sync automatically when you're back online. The web app requires an internet connection for full functionality."
  },
  {
    icon: Users,
    question: "Can I collaborate with my team?",
    answer: "With the Team plan, you can create shared workspaces, collaborate on collections, and manage permissions. Team members can contribute bookmarks, leave comments, and work together on curated resources."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0_/_0.03)_1px,_transparent_0)] bg-[length:32px_32px]" />

      <div className="container max-w-4xl relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 text-white border-0 px-5 py-2.5 text-base">
            <HelpCircle className="h-4 w-4 mr-2" />
            Got Questions?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Bookmark AI Hub. Can't find what you're looking for?
            <span className="text-lime-600 font-medium"> Reach out to us!</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-xl px-6 bg-background hover:border-lime-500/30 transition-colors data-[state=open]:border-lime-500/50"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border-2 border-lime-500/20 bg-lime-500/5 flex items-center justify-center flex-shrink-0">
                      <faq.icon className="h-6 w-6 text-lime-600" strokeWidth={1.5} />
                    </div>
                    <span className="text-lg font-bold uppercase tracking-wide">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6 pl-16 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

