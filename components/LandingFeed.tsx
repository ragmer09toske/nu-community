"use client"
import React from 'react'
import { Command} from './ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import useDeviceType from '@/app/Device'
import Image from 'next/image'
import Link from 'next/link'
import { ShimmerButton} from './Shimmer'

export const LandingFeed = () => {
  const isDesktop: boolean = useDeviceType();
  return (
    <div className='lg:w-[60%]  sm:w-[100%] h-full p-2 ' style={{
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
                  // hello world
              />
            </div>}
            
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
              <div className='flex flex-col  gap-5'>
              <Link href="/codinginitiative">
              <Card className="relative w-[100%]">
                <CardHeader>
                    <CardTitle>Welcome to our Coding Initiative</CardTitle>
                    <CardDescription>We believe that everyone should have the opportunity to learn how to code and to create innovative solutions. That's why we're thrilled to introduce our Coding Initiative, an empowering program designed to help individuals and startups on digital transformation through coding.</CardDescription>
                </CardHeader>
                <Image
                    src="/nerdish.jpg"
                    alt="Nucleus Logo"
                    style={{
                      borderRadius:"0 0 8px 8px"
                    }}
                    width={855}
                    height={24}
                    priority
                />
                <div className='absolute bottom-14 lg:bottom-44 lg:left-10 left-5'>
                  <ShimmerButton />  
                </div>
              </Card>
              </Link>

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
                    src="/loading-overview.avif"
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
                    src="/fill-container.avif"
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
