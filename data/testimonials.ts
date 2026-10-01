// TODO: replace these placeholders with real feedback from real clients (with their permission).
// `photo` is optional: put an image in /public/images/testimonials/ and set the path, e.g. '/images/testimonials/ama.jpg'.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Placeholder: a short quote from a client about the website you designed for them.',
    name: 'Client Name',
    role: 'Role, Company',
  },
  {
    quote: 'Placeholder: what it was like working with you, e.g. communication, speed, results.',
    name: 'Client Name',
    role: 'Role, Company',
  },
  {
    quote: 'Placeholder: feedback on a logo, flyer or branding project you delivered.',
    name: 'Client Name',
    role: 'Role, Company',
  },
];
