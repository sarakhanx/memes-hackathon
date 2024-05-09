import { ImageResponse } from 'next/og'
 
export const alt = 'โปรแกรมเมอร์ Quote'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
 
  return new ImageResponse(
    (
        <div
        className="ibm-plex-sans-bold"
        style={{
          fontSize: 12,
          background: '#333',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column', // Set flex direction to column
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>PROGRAMMER BIRTHDAY QUOTE</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>โควทนี้แหละ เหมาะมากกับวันเกิดของคุณ</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>มาเล่นกันเต๊อะะะ</h1>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}