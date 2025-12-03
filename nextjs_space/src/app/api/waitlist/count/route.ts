import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const count = await prisma.waitlistEntry.count()
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error getting waitlist count:', error)
    return NextResponse.json(
      { error: 'Failed to get waitlist count' },
      { status: 500 }
    )
  }
}
