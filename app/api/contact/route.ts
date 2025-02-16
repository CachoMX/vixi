// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import sendgrid from '@sendgrid/mail'

// Set SendGrid API key
sendgrid.setApiKey('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')
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'

// Send to Slack function
async function sendToSlack(data: any) {
  try {
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎯 New Contact Form Submission",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Full Name:*\n${data.fullName}`
            },
            {
              type: "mrkdwn",
              text: `*Company:*\n${data.companyName || 'N/A'}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Email:*\n${data.email}`
            },
            {
              type: "mrkdwn",
              text: `*Phone:*\n${data.phone}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Service:*\n${data.service}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n${data.message}`
          }
        }
      ]
    }

    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify(slackMessage),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to send to Slack')
    }

    return true
  } catch (error) {
    console.error('Slack notification error:', error)
    return false
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, companyName, email, phone, service, message } = body

    // Send to Slack
    await sendToSlack(body)

     // Send email (existing functionality)
    if (process.env.SENDGRID_API_KEY) {
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

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

      await sendgrid.send(emailContent)
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Full error details:', error)
    
    return NextResponse.json(
      { 
        error: 'Error sending message',
        details: error.message 
      },
      { status: 500 }
    )
  }
}