import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { Badge } from "@/components/ui/badge"
import { 
  Receipt, 
  AlertCircle, 
  CreditCard, 
  Gift, 
  HelpCircle, 
  Mail, 
  CheckCircle,
  XCircle,
  Coins,
  FileText
} from "lucide-react"

export const metadata = {
  title: "Refund Policy - Bookmark AI Hub",
  description: "Refund Policy for Bookmark AI Hub. Understand our no-refund policy, free credit system, and how to get support.",
}

export default function RefundPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container max-w-4xl py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-orange-500/10 text-orange-700 border-orange-500/30">
            <Receipt className="h-4 w-4 mr-2" />
            Billing Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-muted-foreground">
            Last updated: January 24, 2026
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-amber-500/20 flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Important: Try Before You Buy</h2>
              <p className="text-muted-foreground">
                We offer <strong className="text-foreground">3 free credits per premium feature</strong> so you can 
                thoroughly test any feature before committing to a paid plan. Because of this generous try-before-you-buy 
                system, <strong className="text-foreground">all sales are final and we do not offer refunds</strong> on 
                subscription payments.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1 - Free Credits */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-lime-500/10">
                <Gift className="h-5 w-5 text-lime-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">1. Free Credit System</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>Before purchasing any paid plan, every user receives:</p>
              <div className="bg-background rounded-xl p-4 border">
                <div className="flex items-center gap-3 mb-3">
                  <Coins className="h-5 w-5 text-lime-600" />
                  <span className="font-bold text-foreground text-lg">3 Free Credits Per Premium Feature</span>
                </div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Test AI Summaries - 3 free summary generations</li>
                  <li>Test AI LinkPilot - 3 free bulk URL validations</li>
                  <li>Test Oracle AI Assistant - 3 free AI conversations</li>
                  <li>Test DNA Profile - 3 free insight generations</li>
                  <li>And more premium features...</li>
                </ul>
              </div>
              <p><strong className="text-foreground">How it works:</strong> When you first use a premium feature, you'll see a credit counter. Once your 3 free credits for that specific feature are used, you'll be prompted to upgrade to continue using it.</p>
              <p><strong className="text-foreground">Purpose:</strong> This system allows you to fully evaluate whether Bookmark AI Hub meets your needs before making any financial commitment.</p>
            </div>
          </section>

          {/* Section 2 - No Refunds */}
          <section className="mb-10 p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/10">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">2. No Refund Policy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">All purchases are final. We do not offer refunds for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monthly subscription payments</li>
                <li>Annual subscription payments</li>
                <li>Lifetime access purchases</li>
                <li>Team/Enterprise add-ons</li>
                <li>Partial billing periods after cancellation</li>
                <li>Unused credits or features</li>
              </ul>
              <p className="mt-4"><strong className="text-foreground">Rationale:</strong> Because we provide 3 free credits per feature, you have ample opportunity to evaluate our service before purchasing. This allows us to keep our prices competitive while maintaining a sustainable business.</p>
            </div>
          </section>

          {/* Section 3 - Exceptions */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">3. Limited Exceptions</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>We may consider exceptions in the following circumstances:</p>
              <div className="space-y-3">
                <div className="p-4 bg-background rounded-xl border">
                  <p className="font-semibold text-foreground mb-1">✅ Duplicate Charges</p>
                  <p className="text-sm">If you were accidentally charged multiple times for the same subscription period due to a technical error.</p>
                </div>
                <div className="p-4 bg-background rounded-xl border">
                  <p className="font-semibold text-foreground mb-1">✅ Service Unavailability</p>
                  <p className="text-sm">If Bookmark AI Hub experienced significant downtime (more than 7 consecutive days) that prevented you from using the service.</p>
                </div>
                <div className="p-4 bg-background rounded-xl border">
                  <p className="font-semibold text-foreground mb-1">✅ Billing Errors</p>
                  <p className="text-sm">If you were charged an incorrect amount due to a system error on our end.</p>
                </div>
                <div className="p-4 bg-background rounded-xl border">
                  <p className="font-semibold text-foreground mb-1">✅ Legal Requirements</p>
                  <p className="text-sm">Where refunds are required by law in your jurisdiction (e.g., certain consumer protection laws).</p>
                </div>
              </div>
              <p className="mt-4 text-sm"><strong className="text-foreground">Note:</strong> Exception requests are reviewed on a case-by-case basis. We reserve the right to deny exception requests at our sole discretion.</p>
            </div>
          </section>

          {/* Section 4 - Payment Processing */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">4. Payment Processing</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">4.1 Merchant of Record:</strong> All payments are processed by <strong>Lemon Squeezy</strong>, who acts as our Merchant of Record. This means Lemon Squeezy handles:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payment processing and security</li>
                <li>Invoicing and receipts</li>
                <li>Tax calculation and remittance</li>
                <li>Chargeback management</li>
              </ul>
              <p><strong className="text-foreground">4.2 Chargebacks:</strong> If you initiate a chargeback through your bank or credit card company instead of contacting us, your account will be immediately suspended. Chargebacks should only be used for unauthorized transactions, not as a refund mechanism.</p>
              <p><strong className="text-foreground">4.3 Disputed Charges:</strong> If you believe a charge is unauthorized or incorrect, please contact us first at billing@bookmarkaihub.com. We'll investigate and resolve the issue faster than a formal dispute process.</p>
            </div>
          </section>

          {/* Section 5 - Cancellation */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">5. Subscription Cancellation</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">5.1 How to Cancel:</strong> You can cancel your subscription at any time through your Account Settings &gt; Subscription &gt; Cancel Subscription.</p>
              <p><strong className="text-foreground">5.2 Effect of Cancellation:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your subscription will remain active until the end of your current billing period</li>
                <li>You will not be charged for future periods after cancellation</li>
                <li>No partial refunds are provided for unused time in your current period</li>
                <li>After your subscription ends, you'll be downgraded to the Free plan</li>
                <li>Your bookmarks and data will be preserved (subject to Free plan limits)</li>
              </ul>
              <p><strong className="text-foreground">5.3 Reactivation:</strong> You can reactivate your subscription at any time. If you reactivate within 30 days, your previous settings and preferences will be restored.</p>
            </div>
          </section>

          {/* Section 6 - Lifetime Plans */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Coins className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">6. Lifetime Plan Policy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>Lifetime plans are one-time purchases that grant perpetual access to Bookmark AI Hub Professional tier features.</p>
              <p><strong className="text-foreground">6.1 No Refunds:</strong> Lifetime plan purchases are final and non-refundable. Please use your free credits to thoroughly test features before purchasing.</p>
              <p><strong className="text-foreground">6.2 What's Included:</strong> All current Professional tier features plus all future updates to that tier.</p>
              <p><strong className="text-foreground">6.3 Transferability:</strong> Lifetime plans are non-transferable and tied to your account.</p>
            </div>
          </section>

          {/* Section 7 - FAQ */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <HelpCircle className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">7. Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-xl border">
                <p className="font-semibold text-foreground mb-2">Q: I purchased by mistake. Can I get a refund?</p>
                <p className="text-muted-foreground text-sm">A: Unfortunately, accidental purchases do not qualify for refunds. We encourage all users to use the free credit system to evaluate features before purchasing. Please review your purchase carefully before completing checkout.</p>
              </div>
              <div className="p-4 bg-background rounded-xl border">
                <p className="font-semibold text-foreground mb-2">Q: The service doesn't work as I expected. Can I get a refund?</p>
                <p className="text-muted-foreground text-sm">A: This is why we offer 3 free credits per feature—to let you test before buying. If you're experiencing technical issues, please contact support and we'll help resolve them.</p>
              </div>
              <div className="p-4 bg-background rounded-xl border">
                <p className="font-semibold text-foreground mb-2">Q: I forgot to cancel before my renewal. Can I get a refund?</p>
                <p className="text-muted-foreground text-sm">A: Renewal charges are not refundable. We send reminder emails before renewal. You can manage subscription settings anytime in your account.</p>
              </div>
              <div className="p-4 bg-background rounded-xl border">
                <p className="font-semibold text-foreground mb-2">Q: How long do exception requests take to process?</p>
                <p className="text-muted-foreground text-sm">A: We review exception requests within 5-7 business days. If approved, refunds are processed through Lemon Squeezy and may take 5-10 business days to appear on your statement.</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Mail className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">Need Help?</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have questions about our refund policy or need to request an exception review, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Billing Support:</strong> billing@bookmarkaihub.com</li>
              <li><strong className="text-foreground">General Support:</strong> hello@bookmarkaihub.com</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Please include your account email, transaction ID (from your Lemon Squeezy receipt), and a detailed explanation of your request.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}
