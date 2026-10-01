import type { MetadataRoute } from 'next';

// TODO: keep in sync with metadataBase in app/layout.tsx
const siteUrl = 'https://richmondabenney.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/contact`, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
