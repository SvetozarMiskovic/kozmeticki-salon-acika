import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

export let resend: Resend;
if (!apiKey) {
  throw new Error('RESEND_API_KEY is not set in the environment');
} else {
  resend = new Resend(apiKey);
}
