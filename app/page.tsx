import { Content } from '@/components/Content'
import { Navigation } from '@/components/Navigation'
import VideoPlayer from '@/components/VideoPlayer'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='flex justify-center' style={{
      }}>
        <Navigation />
      </div>
        <VideoPlayer />
        <Content />
    </main>
  )
}
