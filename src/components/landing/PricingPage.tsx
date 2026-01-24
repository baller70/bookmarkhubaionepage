"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  Rocket,
  X,
  CreditCard,
  Users,
  ArrowRight,
  HelpCircle,
  Star,
  Clock,
  Gift,
  Lock,
  Mail
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const plans = [
  {
    id: "free",
    name: "Pro",
    tagline: "FREE TIER",
    price: { monthly: 0, yearly: 0 },
    period: "forever free",
    description: "Perfect for getting started with BookmarkAI",
    icon: Zap,
    color: "from-gray-500 to-slate-600",
    borderColor: "border-gray-200",
    features: [
      "50 bookmarks",
      "1 company workspace",
      "3 AI summaries/month",
      "2 AI brainstorms/month",
      "5 Oracle AI commands/month",
      "3 Mind Maps/month",
      "3 Vision Boards/month",
      "1 export/month",
      "Basic organization tools",
    ],
    notIncluded: [
      "E-Signatures not included"
    ],
    cta: "Get Started Free",
    popular: false,
    trial: false
  },
  {
    id: "pro_plus",
    name: "Pro Plus",
    tagline: "PRO PLUS",
    price: { monthly: 12, yearly: 120 },
    period: "/month",
    description: "For users who need more AI power",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-200",
    features: [
      "Unlimited bookmarks",
      "1 company workspace",
      "50 AI summaries/month",
      "30 AI brainstorms/month",
      "100 Oracle AI commands/month",
      "Unlimited Mind Maps",
      "Unlimited Vision Boards",
      "10 exports/month",
      "5 E-Signatures/month",
      "Priority support"
    ],
    notIncluded: [],
    cta: "Upgrade to Pro Plus",
    popular: false,
    trial: true
  },
  {
    id: "power_user",
    name: "Power User",
    tagline: "BEST VALUE",
    price: { monthly: 24, yearly: 240 },
    period: "/month",
    description: "Unlimited everything for power users",
    icon: Crown,
    color: "from-lime-500 via-yellow-400 to-orange-500",
    borderColor: "border-lime-400",
    features: [
      "✅ Everything in Pro Plus, plus:",
      "5 company workspaces",
      "Unlimited AI summaries",
      "Unlimited AI brainstorms",
      "Unlimited Oracle AI commands",
      "Unlimited E-Signatures",
      "White-label exports",
      "API access",
      "VIP support",
      "Early access to new features"
    ],
    notIncluded: [],
    cta: "Upgrade to Power User",
    popular: true,
    trial: true
  },
  {
    id: "team",
    name: "Team",
    tagline: "TEAM PLAN",
    price: { monthly: 49, yearly: 490 },
    period: "/month",
    description: "For teams that collaborate together",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-200",
    features: [
      "✅ Everything in Power User, plus:",
      "25 company workspaces",
      "Team collaboration",
      "Admin controls & permissions",
      "Advanced analytics",
      "Team sharing & mentions",
      "Dedicated support",
      "Priority feature requests"
    ],
    notIncluded: [],
    cta: "Upgrade to Team",
    popular: false,
    trial: true
  }
]

const faqs = [
  {
    question: "Can I try before I buy?",
    answer: "Yes! Every user gets 3 free credits per premium feature to test before committing. This lets you fully experience AI Summaries, Oracle AI, Mind Maps, and more before upgrading. You can also use our Free (Pro) tier forever with limited features."
  },
  {
    question: "What's your refund policy?",
    answer: "Because we offer 3 free credits per feature to test before purchasing, all sales are final. We do not offer refunds, but we're happy to help resolve any issues you experience with the service."
  },
  {
    question: "Can I upgrade or downgrade at any time?",
    answer: "Yes! You can change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the change takes effect at the start of your next billing period."
  },
  {
    question: "What are company workspaces?",
    answer: "Company workspaces let you organize bookmarks by project, client, or team. Free users get 1 workspace, Pro Plus gets 1, Power Users get 5, and Team plans get 25 workspaces for maximum organization."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through Lemon Squeezy."
  },
  {
    question: "Is my data secure?",
    answer: "Yes! We use bank-level encryption (AES-256) for all data. Your bookmarks are stored securely and we never share your data with third parties. We're also GDPR compliant."
  },
  {
    question: "What happens to my bookmarks if I cancel?",
    answer: "Your bookmarks are always yours. You can export all your data at any time. If you cancel a paid plan, you'll be downgraded to the Free tier and retain access to your first 50 bookmarks."
  },
  {
    question: "What are E-Signatures used for?",
    answer: "E-Signatures let you digitally sign and request signatures on documents directly within BookmarkAI Hub. Perfect for contracts, agreements, and approvals. Free users don't have access, Pro Plus gets 5/month, and Power User & Team plans get unlimited signatures."
  }
]

const comparisonFeatures = [
  { name: "Bookmarks", free: "50", proPlus: "Unlimited", powerUser: "Unlimited", team: "Unlimited" },
  { name: "Company Workspaces", free: "1", proPlus: "1", powerUser: "5", team: "25" },
  { name: "AI Summaries", free: "3/month", proPlus: "50/month", powerUser: "Unlimited", team: "Unlimited" },
  { name: "AI Brainstorm", free: "2/month", proPlus: "30/month", powerUser: "Unlimited", team: "Unlimited" },
  { name: "Oracle AI Commands", free: "5/month", proPlus: "100/month", powerUser: "Unlimited", team: "Unlimited" },
  { name: "Mind Maps", free: "3/month", proPlus: "Unlimited", powerUser: "Unlimited", team: "Unlimited" },
  { name: "Vision Boards", free: "3/month", proPlus: "Unlimited", powerUser: "Unlimited", team: "Unlimited" },
  { name: "Exports", free: "1/month", proPlus: "10/month", powerUser: "Unlimited", team: "Unlimited" },
  { name: "E-Signatures", free: "—", proPlus: "5/month", powerUser: "Unlimited", team: "Unlimited" },
  { name: "White-label Exports", free: "—", proPlus: "—", powerUser: "✓", team: "✓" },
  { name: "API Access", free: "—", proPlus: "—", powerUser: "✓", team: "✓" },
  { name: "Team Collaboration", free: "—", proPlus: "—", powerUser: "—", team: "✓" },
  { name: "Admin Controls", free: "—", proPlus: "—", powerUser: "—", team: "✓" },
  { name: "Support", free: "Basic", proPlus: "Priority", powerUser: "VIP", team: "Dedicated" },
]

export function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.id === "free") return 0
    return isYearly ? Math.round(plan.price.yearly / 12) : plan.price.monthly
  }

  const getPeriod = (plan: typeof plans[0]) => {
    if (plan.id === "free") return "forever free"
    return isYearly ? "/month (billed yearly)" : "/month"
  }

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.id === "free") return null
    const monthlyCost = plan.price.monthly * 12
    const yearlyCost = plan.price.yearly
    const savings = Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100)
    return savings
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(0_0_0_/_0.03)_1px,_transparent_0)] bg-[length:24px_24px]" />
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-lime-500/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="container relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-lime-500/20 to-orange-500/20 text-lime-700 border-lime-500/30">
              <Sparkles className="h-4 w-4 mr-2" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start free and upgrade as you grow. No hidden fees, cancel anytime.
              <br />
              <span className="font-semibold text-foreground">Join 10,000+ users</span> organizing their digital life.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  isYearly ? 'bg-gradient-to-r from-lime-500 to-green-500' : 'bg-muted'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ left: isYearly ? '32px' : '4px' }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge className="bg-green-500/20 text-green-700 border-green-500/30">
                  Save 17%
                </Badge>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                >
                  <Card
                    className={`relative h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      plan.popular
                        ? 'border-2 border-lime-500 shadow-lg shadow-lime-500/20'
                        : `border ${plan.borderColor}`
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 text-white px-4 py-1.5 text-sm font-bold shadow-lg">
                          <Star className="h-3.5 w-3.5 mr-1.5 fill-white" />
                          Best Value
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4 pt-6">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="mb-2 text-xs font-bold tracking-wider">
                        {plan.tagline}
                      </Badge>
                      <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">
                          {plan.id === "free" ? "Free" : `$${getPrice(plan)}`}
                        </span>
                        {plan.id !== "free" && (
                          <span className="text-muted-foreground text-sm ml-1">
                            {getPeriod(plan)}
                          </span>
                        )}
                      </div>
                      {isYearly && getSavings(plan) && (
                        <Badge className="mt-2 bg-green-500/20 text-green-700 border-green-500/30 text-xs">
                          Save {getSavings(plan)}%
                        </Badge>
                      )}
                      <CardDescription className="mt-3 text-sm">{plan.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-2.5 mb-4 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            {feature.startsWith("✅") ? (
                              <span className="text-sm font-semibold text-lime-600">{feature}</span>
                            ) : (
                              <>
                                <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </>
                            )}
                          </li>
                        ))}
                        {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                          <li key={`not-${i}`} className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full font-semibold ${
                          plan.popular
                            ? 'bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500 hover:from-lime-600 hover:via-yellow-500 hover:to-orange-600 text-white shadow-lg'
                            : ''
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <a href="https://app.bookmarkaihub.com/auth/signup">
                          {plan.cta}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>

                      {plan.trial && (
                        <p className="text-xs text-center text-muted-foreground mt-2">
                          3 free credits per feature to try
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Sign in link */}
          <p className="text-center mt-8 text-muted-foreground">
            Already have an account?{" "}
            <a href="https://app.bookmarkaihub.com/auth/signin" className="text-lime-600 hover:text-lime-700 font-semibold underline underline-offset-4">
              Sign in
            </a>
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Gift className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">3 free credits per feature</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">Secure payment via Lemon Squeezy</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-medium">All major cards accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">Compare Plans</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly what you get with each plan
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Pro (Free)</th>
                  <th className="text-center py-4 px-4 font-semibold">Pro Plus</th>
                  <th className="text-center py-4 px-4 font-semibold bg-lime-50 border-x-2 border-lime-200">
                    <div className="flex flex-col items-center">
                      <Badge className="mb-1 bg-lime-500 text-white text-xs">Best Value</Badge>
                      Power User
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">Team</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-medium">{feature.name}</td>
                    <td className="text-center py-3 px-4 text-muted-foreground">{feature.free}</td>
                    <td className="text-center py-3 px-4 text-muted-foreground">{feature.proPlus}</td>
                    <td className="text-center py-3 px-4 bg-lime-50/50 border-x border-lime-100 font-medium">{feature.powerUser}</td>
                    <td className="text-center py-3 px-4 text-muted-foreground">{feature.team}</td>
                  </tr>
                ))}
                <tr className="border-b-2">
                  <td className="py-4 px-4 font-semibold">Price</td>
                  <td className="text-center py-4 px-4 font-bold">Free</td>
                  <td className="text-center py-4 px-4 font-bold">${isYearly ? '10/mo' : '12/mo'}</td>
                  <td className="text-center py-4 px-4 bg-lime-50/50 border-x border-lime-100 font-bold text-lime-700">${isYearly ? '20/mo' : '24/mo'}</td>
                  <td className="text-center py-4 px-4 font-bold">${isYearly ? '41/mo' : '49/mo'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise/Custom CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Users className="h-12 w-12 mx-auto mb-4 text-purple-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-purple-200 mb-8">
              Contact us for custom enterprise pricing with unlimited workspaces,
              dedicated support, SSO, and custom integrations.
            </p>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50" asChild>
              <a href="mailto:enterprise@bookmarkaihub.com">
                <Mail className="h-5 w-5 mr-2" />
                Contact Sales
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              <HelpCircle className="h-3.5 w-3.5 mr-1.5" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-xl px-6 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-lime-500 via-yellow-400 to-orange-500">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Gift className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Organize Your Digital Life?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Start with our free plan today. No credit card required.
              Upgrade anytime as your needs grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-lime-700 hover:bg-lime-50 font-semibold" asChild>
                <a href="https://app.bookmarkaihub.com/auth/signup">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold" asChild>
                <a href="https://app.bookmarkaihub.com/auth/signin">
                  Sign In
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/80">
              🎁 3 free credits per feature • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
