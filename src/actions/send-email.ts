import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { resend } from '../lib/resend';

export interface SendEmailData {
  email: string;
  subject: string;
  message: string;
}
export const sendEmail = defineAction({
  input: z.object({
    email: z.string().email(),
    subject: z.string().min(5).max(100),
    message: z.string().min(10).max(1000),
  }),
  accept: 'form',
  handler: async (input) => {
    try {
      const { data, error } = await resend.emails.send({
        from: 'Acika Salon <info@salonacika.com>',
        to: 'info@salonacika.com',
        subject: `Contact Form: ${input.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${input.email}</p>
          <p><strong>Subject:</strong> ${input.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });

      if (error) {
        console.error('Resend error:', error);
        throw new Error('Failed to send email');
      }

      return { success: true, data };
    } catch (error) {
      console.error('Email sending error:', error);
      throw new Error('Failed to send email');
    }
  },
});
