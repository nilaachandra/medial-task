import posts from '@/staticData/posts'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Blog post og image'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    return new Response('Post not found', { status: 404 })
  }

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
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${post.image}`}
          alt={post.title}
          style={{ width: '300px', height: '200px', objectFit: 'cover', marginTop: '20px' }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}