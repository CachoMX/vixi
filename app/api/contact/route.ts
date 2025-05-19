// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, phone } = body

    // Email to your team via SendGrid
    await sgMail.send({
      to: 'info@vixi.agency',
      from: 'noreply@vixi.agency',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    // Notification to Slack
    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: `New Contact Form Submission\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
      })
    })

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}