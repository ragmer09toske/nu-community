"use client"
import React from 'react'
import { Command} from './ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import useDeviceType from '@/app/Device'
import Image from 'next/image'

export const LandingFeed = () => {
  const isDesktop: boolean = useDeviceType();
  return (
    <div className='lg:w-[60%] sm:w-[100%] h-full p-2 ' style={{
        borderWidth: "1px",
        borderTopWidth: "0px",
        borderBottomWidth: "0px", 
    }}>       

          <Command className="rounded-lg border shadow-md p-2" style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px"}}>
            <h4 className="scroll-m-20 p-2 pl-5 text-xl font-extrabold tracking-tight lg:text-xl">
                {/* Community Of Creatives */}
            </h4>
            {!isDesktop && <div className="p-5 mt-40 lg:mt-0">
              <Image
                  src="/one.png"
                  alt="Nucleus Logo"
                  className="relative lg:dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  width={120}
                  height={24}
                  priority
              />
            </div>}
            
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
              <div className='flex flex-col  gap-5'>
              <Card className="w-[100%]  flex">
                <div>
                <CardHeader>
                <div className='flex gap-2 items-center'>
                    <Avatar>
                        <AvatarImage src="/me2.png" />
                        <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                        <h5>Retsepile Shao</h5>
                        <p style={{fontSize:11}}>CEO @Nucleus</p>
                    </div>
                </div>
                <CardDescription>
                  The worst mistake you can make is to think Lesotho has no skills. If you think so, it&apos;s probably because you&apos;ve been spending too much time in your bedroom rather than networking. Go outside, and I swear you will be amazed.
                </CardDescription>
                </CardHeader>
                </div>
              </Card>

              <Card className="w-[100%] p-0.5 pl-3 ">
                <div>
                    <CardHeader>
                        <CardTitle>We Embrace the Art of Deverse Engineering</CardTitle>
                        <CardDescription>We unlocked the secrets of seamless transitions from Mobile to Desktop development.</CardDescription>
                    </CardHeader>
                    <div className="w-[100%] p-0.5 pl-3 flex justify-center">
                    <Image
                        src="/mainIcons.svg"
                        alt="Nucleus Logo"
                        className="relative lg:dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        width={520}
                        height={24}
                        priority
                    />
                    </div>
                </div>
              </Card>

              <Card className="w-[100%]">
                <CardHeader>
                    <CardTitle>Elevate Your Projects with our Innovative Designing Team</CardTitle>
                    <CardDescription>Experience the fusion of creativity and technical expertise.</CardDescription>
                </CardHeader>
                  <Image
                    src="/GraphicElements2.gif"
                    // className="relative "
                    alt="Nucleus Logo"
                    width={855}
                    style={{
                      borderRadius:"0 0 8px 8px"
                    }}
                    height={24}
                    priority
                />

              </Card>

              <Card className="w-[100%]">
                <CardHeader>
                    <CardTitle>Elevate Your Brand with Exquisite Typography</CardTitle>
                    <CardDescription>Take pleasure in the intricate craftsmanship of each character, enhancing your brand&apos;s story.</CardDescription>
                </CardHeader>
                <Image
                    src="/Typography.png"
                    alt="Nucleus Logo"
                    style={{
                      borderRadius:"0 0 8px 8px"
                    }}
                    width={855}
                    height={24}
                    priority
                />
              </Card>
              </div>
            </ScrollArea>
          </Command>
      </div>
  )
}
