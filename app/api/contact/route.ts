// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

if (!process.env.SENDGRID_API_KEY) {
  console.error('SendGrid API key is missing')
  throw new Error('SendGrid configuration error')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, service, message } = body

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          details: 'Please fill in all required fields'
        },
        { status: 400 }
      )
    }

    const msg = {
      to: 'info@vixi.agency',
      from: {
        email: 'noreply@vixi.agency',
        name: 'Vixi Contact Form'
      },
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    }

    await sgMail.send(msg)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully'
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message',
        details:
          error?.response?.body?.errors?.[0]?.message || error.message
      },
      { status: 500 }
    )
  }
}