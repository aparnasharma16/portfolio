import { currentRole, profile } from '@/lib/portfolio-data';
import { ImageResponse } from 'next/og';

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Link-preview card for shared URLs: name, role, and the home headline. Flat, no gradients.
 * Rendered outside the page, so CSS variables are unavailable; colours mirror the light tokens.
 */
const role = currentRole ? `${profile.title} at ${currentRole.company}` : profile.title;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background: '#ffffff',
        color: '#17171a',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 36, fontWeight: 600 }}>{profile.name}</div>
        <div style={{ fontSize: 28, color: '#6a6a73', marginTop: 8 }}>{role}</div>
      </div>
      <div
        style={{
          fontSize: 68,
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.08,
          maxWidth: 960,
        }}
      >
        {profile.headline}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 24, color: '#6a6a73' }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: '#22c55e',
            marginRight: 12,
          }}
        />
        {profile.location}
      </div>
    </div>,
    size
  );
}
