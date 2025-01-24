// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import sendgrid from '@sendgrid/mail'

// Set SendGrid API key
sendgrid.setApiKey('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')

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('Received form data:', body) // Log incoming data

    const { fullName, companyName, email, phone, service, message } = body

    const emailContent = {
      to: 'info@vixi.agency',
      from: 'noreply@vixi.agency',
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Company: ${companyName}
        Email: ${email}
        Phone: ${phone}
        Service Interest: ${service}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    console.log('Attempting to send email with content:', emailContent) // Log email content

    try {
      const response = await sendgrid.send(emailContent)
      console.log('SendGrid Response:', response) // Log SendGrid response
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } catch (sendGridError: any) {
      console.error('SendGrid specific error:', {
        message: sendGridError.message,
        response: sendGridError.response?.body,
        code: sendGridError.code,
      })
      throw sendGridError // Re-throw to be caught by outer try-catch
    }
  } catch (error: any) {
    console.error('Full error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      response: error.response?.body
    })
    
    return NextResponse.json(
      { 
        error: 'Error sending email',
        details: error.message // Include error details in response
      },
      { status: 500 }
    )
  }
}