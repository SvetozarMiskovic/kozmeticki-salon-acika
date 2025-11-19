import { Resend } from 'resend';

interface AppwriteRequest {
  method: string;
  bodyRaw: string;
  headers: Record<string, string>;
}

interface AppwriteResponse {
  json: (
    body: any,
    statusCode?: number,
    headers?: Record<string, string>
  ) => void;
  send: (
    body: string,
    statusCode?: number,
    headers?: Record<string, string>
  ) => void;
}

interface AppwriteContext {
  req: AppwriteRequest;
  res: AppwriteResponse;
  log: (...args: any[]) => void;
  error: (...args: any[]) => void;
}

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export default async ({ req, res, log, error }: AppwriteContext) => {
  // Initialize Resend with API key from environment variable
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Handle CORS for browser requests
  if (req.method === 'OPTIONS') {
    return res.json({}, 200, {
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.json({ success: false, message: 'Method not allowed' }, 405, {
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
    });
  }

  try {
    // Parse request body
    const body: ContactFormData = JSON.parse(req.bodyRaw || '{}');
    const { email, subject, message } = body;

    // Validate input
    if (!email || !subject || !message) {
      return res.json(
        {
          success: false,
          message: 'Missing required fields: email, subject, message',
        },
        400,
        {
          'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.json(
        { success: false, message: 'Invalid email format' },
        400,
        {
          'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
        }
      );
    }

    // Validate subject length
    if (subject.length < 5 || subject.length > 100) {
      return res.json(
        {
          success: false,
          message: 'Subject must be between 5 and 100 characters',
        },
        400,
        {
          'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
        }
      );
    }

    // Validate message length
    if (message.length < 10 || message.length > 1000) {
      return res.json(
        {
          success: false,
          message: 'Message must be between 10 and 1000 characters',
        },
        400,
        {
          'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
        }
      );
    }

    log(`Sending email from: ${email}`);

    // Send email via Resend
    const { data, error: resendError } = await resend.emails.send({
      from: 'Acika Salon <info@salonacika.com>',
      to: 'info@salonacika.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (resendError) {
      error('Resend error:', resendError);
      return res.json(
        { success: false, message: 'Failed to send email' },
        500,
        {
          'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
        }
      );
    }

    log('Email sent successfully:', data);

    return res.json(
      { success: true, message: 'Email sent successfully', data },
      200,
      {
        'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
      }
    );
  } catch (err) {
    error('Error processing request:', err);
    return res.json({ success: false, message: 'Internal server error' }, 500, {
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
    });
  }
};
