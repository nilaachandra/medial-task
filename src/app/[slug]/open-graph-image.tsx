import { ImageResponse } from 'next/og'
import posts from '@/staticData/posts'

export const runtime = 'edge'

export const alt = 'Blog post og image'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  console.log('Generating OG image for slug:', params.slug);
  
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    console.error('Post not found for slug:', params.slug);
    return new Response('Post not found', { status: 404 })
  }

  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>{post.title}</div>
          <div style={{ fontSize: 30, textAlign: 'center' }}>{post.description.substring(0, 100)}...</div>
          {/* Removing the image for now to simplify troubleshooting */}
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (e) {
    console.error('Error generating OG image:', e);
    return new Response('Error generating image', { status: 500 })
  }
}