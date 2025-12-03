import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'khouston@thebasketballfactorynj.com'

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function sendNotificationEmail(newEmail: string, joinedAt: Date, totalCount: number) {
  try {
    if (!resend) {
      console.log('RESEND_API_KEY not configured, skipping email notification')
      return
    }

    const formattedDate = joinedAt.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    const formattedTime = joinedAt.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    })

    await resend.emails.send({
      from: 'Bookmark AI Hub Waitlist <onboarding@resend.dev>',
      to: NOTIFICATION_EMAIL,
      subject: `New Waitlist Signup #${totalCount}: ${newEmail}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(135deg, #84cc16 0%, #facc15 50%, #f97316 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 28px; color: #ffffff;">New Waitlist Signup!</h1>
              <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9);">Someone just joined Bookmark AI Hub</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <p><strong>Position:</strong> #${totalCount}</p>
              <p><strong>Email:</strong> ${newEmail}</p>
              <p><strong>Joined:</strong> ${formattedDate} at ${formattedTime}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `
    })

    console.log(`Notification email sent for: ${newEmail}`)
  } catch (error) {
    console.error('Failed to send notification email:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source } = body

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const userAgent = request.headers.get('user-agent') || null
    const referrer = request.headers.get('referer') || null
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || null

    const existingEntry = await prisma.waitlistEntry.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (existingEntry) {
      return NextResponse.json(
        { success: false, error: 'This email is already on the waitlist!' },
        { status: 409 }
      )
    }

    const entry = await prisma.waitlistEntry.create({
      data: {
        email: email.toLowerCase(),
        source: source || 'unknown',
        userAgent,
        referrer,
        ipAddress
      }
    })

    const totalCount = await prisma.waitlistEntry.count()

    await sendNotificationEmail(entry.email, entry.createdAt, totalCount)

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist!',
      position: totalCount
    }, { status: 201 })

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
