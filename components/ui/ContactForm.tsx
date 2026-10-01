"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';

const fieldClass =
  'mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-ink placeholder:text-muted/80 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2';

// No backend yet: submitting opens the visitor's email app with the message pre-filled.
export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '');
    const from = String(data.get('email') ?? '');
    const subject = String(data.get('subject') || 'Project inquiry');
    const message = String(data.get('message') ?? '');
    const body = `${message}\n\n— ${name} (${from})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium text-ink">Name</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium text-ink">Email</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-subject" className="text-sm font-medium text-ink">Subject</label>
        <input id="cf-subject" name="subject" type="text" placeholder="Project inquiry" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-message" className="text-sm font-medium text-ink">Message</label>
        <textarea id="cf-message" name="message" rows={6} required placeholder="Tell me about your project..." className={`${fieldClass} resize-y`} />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send Message <Send size={18} aria-hidden="true" />
      </button>
      <p className="text-sm text-muted" aria-live="polite">
        {sent
          ? 'Your email app should now be open with your message. If nothing happened, email me directly at '
          : 'This opens your email app with your message ready to send. Prefer to write directly? '}
        <a href={`mailto:${email}`} className="font-semibold text-ink underline underline-offset-2">{email}</a>
      </p>
    </form>
  );
}
