import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function addSubscriber(email: string) {
  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: 'subscribed',
      }
    );
    return { success: true, data: response };
  } catch (error: any) {
    if (error.response?.body?.title === 'Member Exists') {
      return { success: false, error: 'You\'re already subscribed to our newsletter!' };
    }
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}