import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Users, CreditCard, AlertTriangle, Scale, Mail } from "lucide-react"

export const metadata = {
  title: "Terms of Service - Bookmark AI Hub",
  description: "Terms of Service for Bookmark AI Hub. Read our terms and conditions for using our AI-powered bookmark management platform.",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container max-w-4xl py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-lime-500/10 text-lime-700 border-lime-500/30">
            <FileText className="h-4 w-4 mr-2" />
            Legal Document
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: January 24, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Bookmark AI Hub. These Terms of Service ("Terms") govern your access to and use of 
              the Bookmark AI Hub website, applications, and services (collectively, the "Service"). By accessing 
              or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, 
              please do not use our Service.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">1. Account Registration & Eligibility</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">1.1 Eligibility:</strong> You must be at least 13 years old to use Bookmark AI Hub. If you are under 18, you must have parental or guardian consent to use our Service.</p>
              <p><strong className="text-foreground">1.2 Account Creation:</strong> To access certain features, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.</p>
              <p><strong className="text-foreground">1.3 Account Security:</strong> You are responsible for safeguarding your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access.</p>
              <p><strong className="text-foreground">1.4 One Account Per User:</strong> Each user may only maintain one account. Creating multiple accounts to abuse free credits or other features is prohibited and may result in termination.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-lime-500/10">
                <CreditCard className="h-5 w-5 text-lime-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">2. Free Credits & Subscription Plans</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">2.1 Free Credits System:</strong> New users receive three (3) free credits per premium feature to test functionality. Once these credits are exhausted for a specific feature, you will need to upgrade to a paid plan to continue using that feature.</p>
              <p><strong className="text-foreground">2.2 Credit Non-Transferability:</strong> Free credits are non-transferable, cannot be exchanged for cash, and expire if your account is terminated.</p>
              <p><strong className="text-foreground">2.3 Subscription Plans:</strong> We offer various subscription tiers including Free (Starter), Pro, Professional, Enterprise, and Lifetime plans. Plan features and pricing are detailed on our Pricing page.</p>
              <p><strong className="text-foreground">2.4 Billing:</strong> Paid subscriptions are billed in advance on a monthly or yearly basis. Your subscription will automatically renew unless cancelled before the renewal date.</p>
              <p><strong className="text-foreground">2.5 Price Changes:</strong> We reserve the right to modify pricing with 30 days' notice. Existing subscribers will be grandfathered at their current rate until they change plans.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">3. Acceptable Use Policy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>You agree NOT to use Bookmark AI Hub to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Store, share, or bookmark illegal, harmful, or offensive content</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Use automated scripts, bots, or scrapers without permission</li>
                <li>Circumvent or manipulate our credit system or billing</li>
                <li>Resell, redistribute, or commercially exploit the Service without authorization</li>
                <li>Interfere with or disrupt the Service's integrity or performance</li>
                <li>Harass, abuse, or harm other users</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <FileText className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">4. Your Content & Data</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">4.1 Ownership:</strong> You retain ownership of all bookmarks, notes, and content you save to Bookmark AI Hub ("Your Content"). We do not claim ownership over Your Content.</p>
              <p><strong className="text-foreground">4.2 License to Us:</strong> By using our Service, you grant us a limited license to store, process, and display Your Content solely to provide the Service to you. This license terminates when you delete Your Content or close your account.</p>
              <p><strong className="text-foreground">4.3 AI Processing:</strong> Our AI features analyze Your Content to provide summaries, categorization, and insights. This processing is done to improve your experience and is subject to our Privacy Policy.</p>
              <p><strong className="text-foreground">4.4 Data Export:</strong> You may export Your Content at any time through our export feature. We support multiple formats including JSON, CSV, and HTML.</p>
              <p><strong className="text-foreground">4.5 Data Retention:</strong> Upon account deletion, Your Content will be permanently deleted within 30 days, except as required by law or for legitimate business purposes.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10">
                <CreditCard className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">5. Payment Processing</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">5.1 Payment Processor:</strong> All payments are processed by Lemon Squeezy, our Merchant of Record. By making a purchase, you also agree to Lemon Squeezy's terms of service.</p>
              <p><strong className="text-foreground">5.2 Merchant of Record:</strong> Lemon Squeezy acts as the Merchant of Record for all transactions, handling payment processing, tax collection, invoicing, and compliance on our behalf.</p>
              <p><strong className="text-foreground">5.3 Taxes:</strong> Lemon Squeezy will automatically calculate and collect applicable taxes (VAT, GST, sales tax) based on your location.</p>
              <p><strong className="text-foreground">5.4 Invoices:</strong> You will receive invoices from Lemon Squeezy for all purchases. These invoices serve as your receipt and proof of purchase.</p>
              <p><strong className="text-foreground">5.5 Currency:</strong> Prices are displayed in USD. Your final charge may vary based on currency conversion rates applied by your payment provider.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/10">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">6. Termination</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">6.1 By You:</strong> You may cancel your subscription or delete your account at any time through your account settings. Cancellation takes effect at the end of your current billing period.</p>
              <p><strong className="text-foreground">6.2 By Us:</strong> We may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion with reasonable notice.</p>
              <p><strong className="text-foreground">6.3 Effect of Termination:</strong> Upon termination, your right to use the Service ceases immediately. You may export Your Content before termination. We are not obligated to provide refunds upon termination.</p>
              <p><strong className="text-foreground">6.4 Survival:</strong> Sections relating to intellectual property, disclaimers, limitations of liability, and dispute resolution survive termination.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <Scale className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">7. Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">7.1 Our Property:</strong> The Bookmark AI Hub name, logo, website design, features, and all related intellectual property are owned by us and protected by copyright, trademark, and other laws.</p>
              <p><strong className="text-foreground">7.2 Limited License:</strong> We grant you a limited, non-exclusive, non-transferable license to use our Service for personal or internal business purposes in accordance with these Terms.</p>
              <p><strong className="text-foreground">7.3 Restrictions:</strong> You may not copy, modify, distribute, sell, or lease any part of our Service, nor may you reverse engineer or attempt to extract the source code.</p>
              <p><strong className="text-foreground">7.4 Feedback:</strong> If you provide feedback or suggestions, you grant us the right to use them without restriction or compensation.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <h2 className="text-2xl font-bold mb-4">8. Disclaimers & Limitations</h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">8.1 "As Is" Service:</strong> THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              <p><strong className="text-foreground">8.2 No Guarantee:</strong> We do not guarantee that the Service will be uninterrupted, secure, or error-free. We are not responsible for any data loss or corruption.</p>
              <p><strong className="text-foreground">8.3 AI Limitations:</strong> Our AI features provide suggestions and summaries that may not always be accurate. You are responsible for verifying AI-generated content.</p>
              <p><strong className="text-foreground">8.4 Limitation of Liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY IS LIMITED TO THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM. WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <h2 className="text-2xl font-bold mb-4">9. Dispute Resolution</h2>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">9.1 Informal Resolution:</strong> Before filing a claim, you agree to contact us at legal@bookmarkaihub.com to attempt informal resolution.</p>
              <p><strong className="text-foreground">9.2 Governing Law:</strong> These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.</p>
              <p><strong className="text-foreground">9.3 Arbitration:</strong> Any disputes not resolved informally shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
              <p><strong className="text-foreground">9.4 Class Action Waiver:</strong> You agree to resolve disputes individually and waive any right to participate in class actions.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We may update these Terms from time to time. We will notify you of material changes by email or through the Service. Your continued use of the Service after changes take effect constitutes acceptance of the new Terms.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="p-6 rounded-2xl bg-gradient-to-r from-lime-500/10 to-orange-500/10 border border-lime-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-lime-500/20">
                <Mail className="h-5 w-5 text-lime-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">Contact Us</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Email:</strong> legal@bookmarkaihub.com</li>
              <li><strong className="text-foreground">Support:</strong> hello@bookmarkaihub.com</li>
            </ul>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}
