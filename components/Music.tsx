import Image from 'next/image'
import React from 'react'
import { Progress } from './ui/progress'
import { Play } from 'lucide-react'

const Music = () => {
  return (
    <div className='absolute bottom-0 right-0 p-5 w-full flex justify-center  '>
        <div className='relative w-full p-5' 
        style={{
            backdropFilter: "blur(5px)",
            background: "rgba(255, 255, 255, 0.064)",
            borderRadius: "5px 5px 30px 30px",

        }}>
            <Progress className='absolute bottom-28 left-0 -top-0.5' value={33} />
            <div style={{
                zIndex: 9999
            }}>
                <div className='flex items-center'>
                    <Image
                        src="/pre.svg"
                        alt="Nucleus Music loader"
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        width={40}
                        height={24}
                        priority
                    />
                    <Play />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Music