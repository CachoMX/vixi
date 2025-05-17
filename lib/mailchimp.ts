import mailchimp from '@mailchimp/mailchimp_marketing';

const mailchimpConfig = {
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER,
};

console.log('Mailchimp Config:', {
  hasApiKey: !!mailchimpConfig.apiKey,
  hasServer: !!mailchimpConfig.server,
});

mailchimp.setConfig(mailchimpConfig);

export async function addSubscriber(email: string) {
  try {
    if (!process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || 
        !process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID || 
        !process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER) {
      console.error('Missing Mailchimp configuration:', {
        apiKey: !!process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
        audienceId: !!process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
        server: !!process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER
      });
      return { success: false, error: 'Newsletter service not configured' };
    }

    const response = await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
      }
    );
    
    return { success: true, data: response };
  } catch (error: any) {
    console.error('Mailchimp API Error:', error);
    return { 
      success: false, 
      error: error.response?.body?.detail || 'Something went wrong. Please try again.' 
    };
  }
}