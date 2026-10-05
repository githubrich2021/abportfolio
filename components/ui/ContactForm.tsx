"use client";

import { useActionState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { sendContactMessage, type ContactState } from '@/app/contact/actions';

const fieldClass =
  'mt-2 w-full rounded-2xl border border-line bg-bg px-4 py-3.5 text-ink placeholder:text-muted/80 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2';

const initialState: ContactState = { status: 'idle' };

export default function ContactForm({ email }: { email: string }) {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const v = state.values;

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot: hidden from people, bots tend to fill it in */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-medium text-ink">Name</label>
          <input id="cf-name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Your name" defaultValue={v?.name} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-medium text-ink">Email</label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@example.com" defaultValue={v?.email} className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-subject" className="text-sm font-medium text-ink">Subject</label>
        <input id="cf-subject" name="subject" type="text" maxLength={150} placeholder="Project inquiry" defaultValue={v?.subject} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="cf-message" className="text-sm font-medium text-ink">Message</label>
        <textarea id="cf-message" name="message" rows={6} required maxLength={5000} placeholder="Tell me about your project..." defaultValue={v?.message} className={`${fieldClass} resize-y`} />
      </div>

      <button type="submit" disabled={pending} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
        {pending ? 'Sending…' : 'Send Message'} <Send size={18} aria-hidden="true" />
      </button>

      <div aria-live="polite">
        {state.status === 'success' && (
          <p className="flex items-start gap-2.5 rounded-2xl bg-success/10 p-4 text-sm font-medium text-ink">
            <CheckCircle2 size={20} aria-hidden="true" className="shrink-0 text-success" />
            {state.message}
          </p>
        )}
        {state.status === 'error' && (
          <p role="alert" className="rounded-2xl bg-accent-strong/10 p-4 text-sm text-ink">
            <span className="font-semibold">{state.message}</span> You can also email me directly at{' '}
            <a href={`mailto:${email}`} className="font-semibold underline underline-offset-2">{email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
