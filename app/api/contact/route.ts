// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

if (!process.env.SENDGRID_API_KEY || !process.env.SLACK_WEBHOOK_URL) {
  console.error('Missing required environment variables')
  throw new Error('Configuration error')
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

    // Send email via SendGrid
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

    // Send to Slack
    try {
      const slackResponse = await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: 'New Contact Form Submission 📬',
                emoji: true
              }
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Name:*\n${fullName}`
                },
                {
                  type: 'mrkdwn',
                  text: `*Email:*\n${email}`
                }
              ]
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Phone:*\n${phone || 'Not provided'}`
                },
                {
                  type: 'mrkdwn',
                  text: `*Service:*\n${service || 'Not specified'}`
                }
              ]
            },
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*Message:*\n${message}`
              }
            }
          ]
        })
      })

      if (!slackResponse.ok) {
        throw new Error('Failed to send Slack notification')
      }

      console.log('Slack notification sent successfully')
    } catch (slackError) {
      console.error('Slack notification error:', slackError)
      // Don't fail the whole request if Slack fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully'
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message',
        details: error.message
      },
      { status: 500 }
    )
  }
}