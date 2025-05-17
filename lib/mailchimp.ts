import mailchimp from '@mailchimp/mailchimp_marketing';

// Configurar Mailchimp
const mailchimpConfig = {
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
};

console.log('Mailchimp Config:', {
  hasApiKey: !!mailchimpConfig.apiKey,
  hasServer: !!mailchimpConfig.server,
});

mailchimp.setConfig(mailchimpConfig);

// Función para agregar un suscriptor
export async function addSubscriber(email: string) {
  try {
    if (
      !process.env.MAILCHIMP_API_KEY ||
      !process.env.MAILCHIMP_AUDIENCE_ID ||
      !process.env.MAILCHIMP_API_SERVER
    ) {
      console.error('Missing Mailchimp configuration:', {
        apiKey: !!process.env.MAILCHIMP_API_KEY,
        audienceId: !!process.env.MAILCHIMP_AUDIENCE_ID,
        server: !!process.env.MAILCHIMP_API_SERVER,
      });
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
    console.error('Mailchimp API Error:', error);
    return {
      success: false,
      error:
        error.response?.body?.detail ||
        'Something went wrong. Please try again.',
    };
  }
}
