import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Here you can integrate with email services like:
    // - Resend (recommended): https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Nodemailer with Gmail SMTP
    // - AWS SES
    
    // For now, we'll use a simple mailto link approach
    // You can replace this with actual email service integration
    
    // Example with mailto (browser will open email client)
    const mailtoLink = `mailto:BSAIRAM3011@GMAIL.COM?subject=Portfolio Contact: ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    // Log the message (in production, send via email service)
    console.log('Contact form submission:', { name, email, message })

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I\'ll get back to you soon.',
        mailtoLink // You can use this to open email client
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

