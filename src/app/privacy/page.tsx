import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Database, Cookie, Globe, Lock, UserCheck, Mail, Server, Trash2 } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Bookmark AI Hub",
  description: "Privacy Policy for Bookmark AI Hub. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container max-w-4xl py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-purple-500/10 text-purple-700 border-purple-500/30">
            <Shield className="h-4 w-4 mr-2" />
            Your Privacy Matters
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: January 24, 2026
          </p>
        </div>

        {/* Summary Box */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
          <h2 className="text-xl font-bold mb-3">Privacy at a Glance</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Your bookmarks and data belong to you</li>
            <li>✅ We use AES-256 encryption to protect your data</li>
            <li>✅ We never sell your personal information</li>
            <li>✅ Payments are processed securely by Lemon Squeezy</li>
            <li>✅ You can export or delete your data anytime</li>
            <li>✅ GDPR and CCPA compliant</li>
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bookmark AI Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our website and 
              services. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Database className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">1. Information We Collect</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">1.1 Information You Provide:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
                  <li><strong>Profile Information:</strong> Optional profile picture and display name</li>
                  <li><strong>Bookmark Data:</strong> URLs, titles, descriptions, notes, tags, and categories you save</li>
                  <li><strong>Payment Information:</strong> Processed securely by Lemon Squeezy (we do not store card details)</li>
                  <li><strong>Communications:</strong> Messages you send to our support team</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">1.2 Automatically Collected Information:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
                  <li><strong>Usage Data:</strong> Features used, pages visited, time spent, clicks, and interactions</li>
                  <li><strong>Log Data:</strong> IP address, access times, referring URLs, error logs</li>
                  <li><strong>Location Data:</strong> Country and region based on IP address (not precise location)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Eye className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">2. How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Provide the Service:</strong> Store, organize, and sync your bookmarks across devices</li>
                <li><strong>AI Features:</strong> Generate summaries, auto-categorize, and provide personalized insights</li>
                <li><strong>Improve the Service:</strong> Analyze usage patterns to enhance features and fix issues</li>
                <li><strong>Process Payments:</strong> Manage subscriptions and billing through Lemon Squeezy</li>
                <li><strong>Communicate:</strong> Send service updates, security alerts, and support responses</li>
                <li><strong>Personalization:</strong> Customize your experience based on your preferences and usage</li>
                <li><strong>Security:</strong> Detect and prevent fraud, abuse, and unauthorized access</li>
                <li><strong>Legal Compliance:</strong> Comply with legal obligations and enforce our Terms</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <Server className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">3. AI Data Processing</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">3.1 How AI Works:</strong> Our AI features analyze your bookmark content (URLs, titles, descriptions) to provide summaries, automatic categorization, and insights. This processing happens on our secure servers.</p>
              <p><strong className="text-foreground">3.2 AI Training:</strong> We do NOT use your personal bookmarks to train our AI models. Your data remains private and is only used to provide services directly to you.</p>
              <p><strong className="text-foreground">3.3 Third-Party AI:</strong> We may use third-party AI services (such as OpenAI) to power certain features. When used, only the minimum necessary data is shared, and these providers are bound by strict data processing agreements.</p>
              <p><strong className="text-foreground">3.4 Opt-Out:</strong> You can disable AI features in your account settings if you prefer not to have your content processed by AI.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Globe className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">4. Information Sharing</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="font-semibold text-foreground">We do NOT sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Lemon Squeezy:</strong> Our payment processor and Merchant of Record, who processes payments, handles taxes, and manages billing on our behalf</li>
                <li><strong>Service Providers:</strong> Cloud hosting (for data storage), analytics tools, and email services that help us operate</li>
                <li><strong>AI Providers:</strong> Third-party AI services for specific features, with data minimization practices</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you would be notified)</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <Cookie className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">5. Cookies & Tracking</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">5.1 Essential Cookies:</strong> Required for the Service to function, including authentication and session management. These cannot be disabled.</p>
              <p><strong className="text-foreground">5.2 Analytics Cookies:</strong> Help us understand how users interact with our Service to improve features. You can opt out via your browser settings.</p>
              <p><strong className="text-foreground">5.3 Preference Cookies:</strong> Remember your settings and preferences for a better experience.</p>
              <p><strong className="text-foreground">5.4 Third-Party Cookies:</strong> We may use services like Google Analytics. These providers have their own privacy policies.</p>
              <p><strong className="text-foreground">5.5 Managing Cookies:</strong> You can control cookies through your browser settings. Disabling certain cookies may affect Service functionality.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/10">
                <Lock className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">6. Data Security</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Encryption:</strong> All data is encrypted at rest (AES-256) and in transit (TLS 1.3)</li>
                <li><strong>Secure Infrastructure:</strong> Our servers are hosted on secure, SOC 2 compliant infrastructure</li>
                <li><strong>Access Controls:</strong> Strict internal access controls and authentication requirements</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong>Password Security:</strong> Passwords are hashed using bcrypt and never stored in plain text</li>
              </ul>
              <p className="mt-4">While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <UserCheck className="h-5 w-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">7. Your Rights & Choices</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Export:</strong> Download your data in a portable format</li>
                <li><strong>Restriction:</strong> Request limitation of how we process your data</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at privacy@bookmarkaihub.com. We will respond within 30 days.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Globe className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">8. International Data Transfers</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Data Processing Agreements with all service providers</li>
                <li>Compliance with applicable data transfer regulations</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-teal-500/10">
                <Trash2 className="h-5 w-5 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">9. Data Retention</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">9.1 Active Accounts:</strong> We retain your data for as long as your account is active and as needed to provide the Service.</p>
              <p><strong className="text-foreground">9.2 Account Deletion:</strong> When you delete your account, your personal data and bookmarks are permanently deleted within 30 days.</p>
              <p><strong className="text-foreground">9.3 Legal Requirements:</strong> Some data may be retained longer if required by law or for legitimate business purposes (e.g., transaction records for tax purposes).</p>
              <p><strong className="text-foreground">9.4 Anonymized Data:</strong> Aggregated, anonymized data that cannot identify you may be retained indefinitely for analytics.</p>
            </div>
          </section>

          {/* Section 10 - GDPR */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <h2 className="text-2xl font-bold mb-4">10. GDPR Compliance (European Users)</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>If you are in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Legal Basis:</strong> We process your data based on: contract performance, legitimate interests, consent, or legal obligations</li>
                <li><strong>Data Protection Officer:</strong> Contact our DPO at dpo@bookmarkaihub.com</li>
                <li><strong>Supervisory Authority:</strong> You have the right to lodge a complaint with your local data protection authority</li>
              </ul>
            </div>
          </section>

          {/* Section 11 - CCPA */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <h2 className="text-2xl font-bold mb-4">11. CCPA Compliance (California Users)</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Know:</strong> What personal information we collect and how it's used</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we do not sell your data)</li>
                <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
              </ul>
              <p className="mt-4">To exercise your CCPA rights, contact us at privacy@bookmarkaihub.com or call [Phone Number].</p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <h2 className="text-2xl font-bold mb-4">12. Children's Privacy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Bookmark AI Hub is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will promptly delete it. If you believe a child has provided us with personal information, please contact us immediately.</p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="mb-10 p-6 rounded-2xl bg-muted/30 border">
            <h2 className="text-2xl font-bold mb-4">13. Changes to This Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We may update this Privacy Policy from time to time. We will notify you of material changes by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the new policy on this page with an updated "Last updated" date</li>
                <li>Sending an email notification to your registered email address</li>
                <li>Displaying a notice within the Service</li>
              </ul>
              <p className="mt-4">Your continued use of the Service after changes take effect constitutes acceptance of the updated policy.</p>
            </div>
          </section>

          {/* Contact */}
          <section className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Mail className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold m-0">Contact Us</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Privacy Inquiries:</strong> privacy@bookmarkaihub.com</li>
              <li><strong className="text-foreground">Data Protection Officer:</strong> dpo@bookmarkaihub.com</li>
              <li><strong className="text-foreground">General Support:</strong> hello@bookmarkaihub.com</li>
            </ul>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}
