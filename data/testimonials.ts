// TODO: these quotes are drafts written for Jeriel, Emmanuel and Sly. Before relying on them,
// send each person their quote to approve (or replace it with their own words), and add their
// real role/company if they're happy for it to be shown.
// `photo` is optional: put an image in /public/images/testimonials/ and set the path, e.g. '/images/testimonials/jeriel.jpg'.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  service: string;
  photo?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Richmond took the time to understand what my business actually needed before designing anything. The new website looks clean, works well on my phone, and I’m finally proud to share the link with customers.',
    name: 'Jeriel',
    role: 'Website client',
    service: 'Website Design',
  },
  {
    quote:
      'He turned my rough idea into screens that just made sense. Every time I gave feedback he came back quickly with something better. Working with him felt easy from start to finish.',
    name: 'Emmanuel',
    role: 'UI/UX client',
    service: 'UI/UX Design',
  },
  {
    quote:
      'The logo and flyers Richmond designed gave my brand a completely fresh look. People noticed the difference straight away, and he was patient with every change I asked for.',
    name: 'Sly',
    role: 'Branding client',
    service: 'Graphic Design',
  },
];
