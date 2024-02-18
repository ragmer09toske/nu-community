import { Content } from '@/components/Content'
import { Landing } from '@/components/Landing'
import { ModeToggle } from '@/components/Mode'
import { Navigation } from '@/components/Navigation'
import { Network } from '@/components/Network'
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
