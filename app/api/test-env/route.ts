import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    hasApiKey: !!process.env.MAILCHIMP_API_KEY,
    hasAudienceId: !!process.env.MAILCHIMP_AUDIENCE_ID,
    hasServer: !!process.env.MAILCHIMP_API_SERVER
  })
}