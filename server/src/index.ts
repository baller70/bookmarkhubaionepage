import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Resend } from 'resend';

// Load environment variables
dotenv.config();

const app = express();

// Initialize Prisma with Postgres adapter
const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// Initialize Resend only if API key is provided
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const PORT = process.env.PORT || 3001;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'khouston@thebasketballfactorynj.com';

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Waitlist signup endpoint
app.post('/api/waitlist', async (req, res) => {
  try {
    const { email, source } = req.body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please provide a valid email address' 
      });
    }

    // Extract metadata from request
    const userAgent = req.headers['user-agent'] || null;
    const referrer = req.headers['referer'] || null;
    const ipAddress = req.ip || req.headers['x-forwarded-for']?.toString() || null;

    // Check if email already exists
    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existingEntry) {
      return res.status(409).json({ 
        success: false, 
        error: 'This email is already on the waitlist!' 
      });
    }

    // Create new waitlist entry
    const entry = await prisma.waitlistEntry.create({
      data: {
        email: email.toLowerCase(),
        source: source || 'unknown',
        userAgent,
        referrer,
        ipAddress
      }
    });

    // Get total waitlist count
    const totalCount = await prisma.waitlistEntry.count();

    // Send notification email
    await sendNotificationEmail(entry.email, entry.createdAt, totalCount);

    res.status(201).json({ 
      success: true, 
      message: 'Successfully joined the waitlist!',
      position: totalCount
    });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Something went wrong. Please try again later.' 
    });
  }
});

// Get waitlist count (public endpoint)
app.get('/api/waitlist/count', async (req, res) => {
  try {
    const count = await prisma.waitlistEntry.count();
    res.json({ count });
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    res.status(500).json({ error: 'Failed to get waitlist count' });
  }
});

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Send notification email via Resend
async function sendNotificationEmail(newEmail: string, joinedAt: Date, totalCount: number) {
  try {
    if (!resend) {
      console.log('RESEND_API_KEY not configured, skipping email notification');
      return;
    }

    const formattedDate = joinedAt.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = joinedAt.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });

    await resend.emails.send({
      from: 'Bookmark AI Hub Waitlist <onboarding@resend.dev>',
      to: NOTIFICATION_EMAIL,
      subject: `🎉 New Waitlist Signup #${totalCount}: ${newEmail}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">

          <!-- Header with gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #84cc16 0%, #facc15 50%, #f97316 100%); padding: 40px 40px 30px; text-align: center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <!-- Logo/Icon -->
                    <div style="width: 80px; height: 80px; background-color: rgba(255,255,255,0.2); border-radius: 20px; border: 2px solid rgba(255,255,255,0.3); margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                      <span style="font-size: 40px;">🔖</span>
                    </div>
                    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                      New Waitlist Signup!
                    </h1>
                    <p style="margin: 10px 0 0; font-size: 16px; color: rgba(255,255,255,0.9);">
                      Someone just joined Bookmark AI Hub
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Position Badge -->
          <tr>
            <td style="padding: 0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: -25px;">
                <tr>
                  <td align="center">
                    <div style="display: inline-block; background: linear-gradient(135deg, #84cc16 0%, #facc15 50%, #f97316 100%); padding: 3px; border-radius: 50px;">
                      <div style="background-color: #ffffff; border-radius: 50px; padding: 12px 30px;">
                        <span style="font-size: 14px; font-weight: 600; color: #84cc16;">Position</span>
                        <span style="font-size: 24px; font-weight: 700; color: #1f2937; margin-left: 8px;">#${totalCount}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px 40px;">
              <!-- User Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb;">
                <tr>
                  <td style="padding: 24px;">
                    <!-- Email -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #84cc16, #facc15); border-radius: 10px; text-align: center; line-height: 36px;">
                            <span style="font-size: 16px;">📧</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px; vertical-align: top;">
                          <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          <p style="margin: 4px 0 0; font-size: 16px; font-weight: 600; color: #1f2937; word-break: break-all;">${newEmail}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Date -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #facc15, #f97316); border-radius: 10px; text-align: center; line-height: 36px;">
                            <span style="font-size: 16px;">📅</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px; vertical-align: top;">
                          <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Joined On</p>
                          <p style="margin: 4px 0 0; font-size: 16px; font-weight: 600; color: #1f2937;">${formattedDate}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Time -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 40px; vertical-align: top;">
                          <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #f97316, #ef4444); border-radius: 10px; text-align: center; line-height: 36px;">
                            <span style="font-size: 16px;">⏰</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px; vertical-align: top;">
                          <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Time</p>
                          <p style="margin: 4px 0 0; font-size: 16px; font-weight: 600; color: #1f2937;">${formattedTime}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Stats Section -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #ecfccb 0%, #fef9c3 100%); border-radius: 12px; border: 1px solid #bef264;">
                      <tr>
                        <td style="padding: 20px 30px; text-align: center;">
                          <p style="margin: 0; font-size: 14px; color: #65a30d; font-weight: 500;">Total Waitlist Members</p>
                          <p style="margin: 8px 0 0; font-size: 36px; font-weight: 700; color: #3f6212;">${totalCount}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 40px; border-top: 1px solid #e5e7eb;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin: 0; font-size: 14px; color: #6b7280;">
                      🔖 <span style="font-weight: 600; color: #1f2937;">Bookmark AI Hub</span> • AI-Powered Bookmark Management
                    </p>
                    <p style="margin: 8px 0 0; font-size: 12px; color: #9ca3af;">
                      This is an automated notification. You're receiving this because you're the admin.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    });

    console.log(`Notification email sent for: ${newEmail}`);
  } catch (error) {
    console.error('Failed to send notification email:', error);
    // Don't throw - we don't want email failure to break the signup
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Notifications will be sent to: ${NOTIFICATION_EMAIL}`);
});

