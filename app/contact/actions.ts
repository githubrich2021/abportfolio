'use server';

import { profile } from '@/data/profile';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  // Echoed back on error so the visitor doesn't lose what they typed.
  values?: { name: string; email: string; subject: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (data: FormData, key: string, max: number) => String(data.get(key) ?? '').trim().slice(0, max);

// Sends the contact form to your inbox through Resend (https://resend.com).
// Needs RESEND_API_KEY in .env.local locally, and in your host's environment variables when deployed.
export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: field(formData, 'name', 100),
    email: field(formData, 'email', 200),
    subject: field(formData, 'subject', 150) || 'Project inquiry',
    message: field(formData, 'message', 5000),
  };

  // Spam trap: real visitors never see or fill this field.
  if (field(formData, 'company', 100)) return { status: 'success' };

  if (!values.name || !values.message) {
    return { status: 'error', message: 'Please fill in your name and message.', values };
  }
  if (!EMAIL_RE.test(values.email)) {
    return { status: 'error', message: 'Please enter a valid email address so I can reply.', values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set, so the message was not sent.');
    return { status: 'error', message: 'The form isn’t able to send right now.', values };
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // onboarding@resend.dev works without verifying a domain, but only delivers to your Resend account's email.
      from: process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL || profile.contact.email],
      reply_to: values.email,
      subject: `Portfolio: ${values.subject}`,
      text: `New message from your portfolio contact form\n\nName: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\n\n${values.message}`,
    }),
  });

  if (!res.ok) {
    console.error('Contact form: Resend returned', res.status, await res.text());
    return { status: 'error', message: 'Something went wrong sending your message.', values };
  }

  return { status: 'success', message: 'Thanks! Your message has been sent. I’ll get back to you soon.' };
}
