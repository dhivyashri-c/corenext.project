import { ImageResponse } from 'next/og'

export const alt = 'CoreNext Project – Final Year Projects, Journal Publishing & Hardware Projects in Chennai'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Shared as the link preview on WhatsApp, LinkedIn, X, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #030712 0%, #1e1b4b 60%, #3b0764 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #9333ea, #4f46e5)',
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            C
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>CoreNext Project</div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.15, maxWidth: 1000 }}>
          Final Year Projects, Journal Publishing & Hardware Projects
        </div>
        <div style={{ fontSize: 30, color: '#c4b5fd', marginTop: 32 }}>
          AI/ML · Web · Cloud · IoT · Scopus / IEEE Papers
        </div>
        <div style={{ fontSize: 28, color: '#9ca3af', marginTop: 48 }}>
          Chennai · +91 9360056977
        </div>
      </div>
    ),
    size
  )
}
