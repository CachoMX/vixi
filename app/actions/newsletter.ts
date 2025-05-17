'use server'

import { z } from 'zod';
import { addSubscriber } from '@/lib/mailchimp';

const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string;
  
  try {
    const validatedFields = NewsletterSchema.parse({ email });
    const result = await addSubscriber(email);
    
    if (result.success) {
      return { success: true };
    } else {
      return { error: result.error };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: 'Please enter a valid email address' };
    }
    return { error: 'Something went wrong. Please try again.' };
  }
}