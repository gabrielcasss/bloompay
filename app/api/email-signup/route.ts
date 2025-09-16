import { NextRequest, NextResponse } from 'next/server'
import { saveEmailSignup, checkEmailExists, getAllEmailSignups, getEmailSignupCount } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email format
    if (!email || !email.includes('@') || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if email already exists
    if (checkEmailExists(email)) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    // Save email to database
    const savedEmail = saveEmailSignup(email)
    
    console.log('New email signup saved:', savedEmail)

    return NextResponse.json(
      { 
        message: 'Email saved successfully',
        id: savedEmail.id,
        created_at: savedEmail.created_at
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Email signup error:', error)
    
    // Handle unique constraint violation specifically
    if (error instanceof Error && error.message.includes('UNIQUE constraint failed')) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const emails = getAllEmailSignups()
    const count = getEmailSignupCount()
    
    return NextResponse.json({
      emails,
      count,
      success: true
    })
  } catch (error) {
    console.error('Error fetching emails:', error)
    return NextResponse.json(
      { error: 'Failed to fetch emails' },
      { status: 500 }
    )
  }
}



