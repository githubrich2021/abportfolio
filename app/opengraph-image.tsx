import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Richmond Abenney — Website, UI/UX & Graphic Designer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// ImageResponse only understands inline styles, so this file is the one exception to the no-inline-styles rule.
export default async function Image() {
  const photo = await readFile(join(process.cwd(), 'public/images/Richmond.jpg'));
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#ffffff', padding: 72, alignItems: 'center', gap: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 3, color: '#E0284F', textTransform: 'uppercase' }}>RiG_Designs</div>
          <div style={{ fontSize: 64, fontWeight: 800, color: '#15151A', lineHeight: 1.1, marginTop: 20 }}>Richmond Abenney</div>
          <div style={{ fontSize: 30, color: '#6B6E7B', marginTop: 24, lineHeight: 1.4 }}>Website · UI/UX · Graphic · WordPress Designer</div>
          <div style={{ fontSize: 24, color: '#6B6E7B', marginTop: 12 }}>Accra, Ghana</div>
        </div>
        <div style={{ display: 'flex', width: 380, height: 420, background: '#FF4D6D', borderRadius: '160px 32px 32px 32px', padding: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} alt="" width={352} height={392} style={{ objectFit: 'cover', borderRadius: '146px 20px 20px 20px' }} />
        </div>
      </div>
    ),
    size,
  );
}
