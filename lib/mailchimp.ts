import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function addSubscriber(email: string) {
  try {
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID || !process.env.MAILCHIMP_API_SERVER) {
      console.error('Missing Mailchimp configuration');
      return { success: false, error: 'Newsletter service not configured' };
    }

    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
      }
    );
    return { success: true, data: response };
  } catch (error: any) {
    console.error('Mailchimp error:', error);
    
    if (error.response?.body?.title === 'Member Exists') {
      return { success: false, error: 'You\'re already subscribed to our newsletter!' };
    }
    
    // More detailed error message for debugging
    const errorMessage = error.response?.body?.detail || error.message || 'Unknown error';
    console.error('Detailed error:', errorMessage);
    
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}