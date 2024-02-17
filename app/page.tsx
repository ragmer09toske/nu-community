import { ModeToggle } from '@/components/Mode'
import { Navigation } from '@/components/Navigation'
import VideoPlayer from '@/components/VideoPlayer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-5">
      <div className='flex justify-center'>
        <Navigation />
      </div>
        <VideoPlayer />
    </main>
  )
}
