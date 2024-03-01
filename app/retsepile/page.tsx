"use client"
import { Navigation } from '@/components/Navigation'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Command } from '@/components/ui/command'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import useDeviceType from '@/app/Device'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import useCurentUserStore from '../Store'

const Retsepile = () => {
  const isDesktop: boolean = useDeviceType();
  const userDetails = useCurentUserStore((state)=> state.user )

  return (
    <main>
      <div className='flex justify-center' style={{
      }}>
        <Navigation />
      </div>
      <div className='flex w-full  gap-3 justify-center lg:top-5   items-center lg:h-full h-[120%] fixed bottom-7'>
      <Card style={{
          backdropFilter: "blur(5px)",
          borderWidth: "1px",
      }}
        className="flex justify-center dark:bg-[#09090bd9] lg:w-[80%] mt-16 lg:mt-0 h-[100%] lg:h-[85%] bg-[#FFFFFFFF]"
      >
        <div className='lg:w-[60%] sm:w-[100%] h-full p-2 ' style={{
        borderWidth: "1px",
        borderTopWidth: "0px",
        borderBottomWidth: "0px", 
    }}>       

          <Command className="rounded-lg border shadow-md p-2" style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px"}}>
            <h4 className="scroll-m-20 p-2 pl-5 text-xl font-extrabold tracking-tight lg:text-xl">
                {/* Community Of Creatives */}
            </h4>
            {!isDesktop && <div className="p-5 mt-48 lg:mt-0">
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                Retsepile Raymond Shao
                <div>
                  <p style={{color:"gray", fontSize: 14 }}>Personal Blog</p>
                </div>
              </div>
            </div>
            </div>
            }
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
              <div className='flex flex-col  gap-5'>
              <Link href="/workspace">
              <Card className="w-[100%]">
                <CardHeader>
                    <CardTitle>Co-own a workspace.</CardTitle>
                    <CardDescription>Have your entire organization on the same working space as your clients, share files, and assign tasks seamlessly. Access your files anywhere in the world and make the whole world your office.</CardDescription>
                </CardHeader>
                <Image
                    src="/boys.jpeg"
                    alt="Nucleus Logo"
                    style={{
                      borderRadius:"0 0 8px 8px"
                    }}
                    width={855}
                    height={24}
                    priority
                />
              </Card>
              </Link>

              <Card className="w-[100%] p-0.5 pl-3 ">
                <div>
                    <CardHeader>
                        <CardTitle>Psychedelic collection of consciousness</CardTitle>
                        <CardDescription>
                          Whats crazy is the extension of our personal and collective minds, us putting out ideas (Ridic Originals, Nucleus Creative Studio) beliefs and opinions that form a digital society, culture(Daeman.) and the world. 
                          This is a psychedelic collection of consciousness.
                        </CardDescription>
                    </CardHeader>
                    <div className="w-[100%] p-0.5 pl-3 flex justify-center">
                    <Image
                        src="/psychodelic.jpg"
                        alt="Nucleus Logo"
                        className="relative"
                        width={520}
                        height={24}
                        priority
                    />
                    </div>
                </div>
              </Card>

              <Card className="w-[100%]">
                <CardHeader>
                    <CardTitle>A word from a young professional</CardTitle>
                    <CardDescription>The worst mistake you can make is to think Lesotho has no skills. If you think so, it&apos;s probably because you&apos;ve been spending too much time in your bedroom rather than networking. Go outside, and I swear you will be amazed.</CardDescription>
                </CardHeader>
                  <Image
                    src="/me2.jpg"
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
                    <CardTitle>Solar Storms</CardTitle>
                    <CardDescription>Today, I&apos;ll be featured at Bokamoso FM radio, one of the topics ama touch on is how the next Solar storm is going affect our internet activities, what&apos;s crazy is, Nasa had predicted that this will happen in 2025, but it could actually happen this year. Imagine the whole wide world without the internet for weeks 😳. This not a science phenomenon or myth, it&apos;s highly possible</CardDescription>
                </CardHeader>
                <Image
                    src="/solarFlares.jpg"
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
      </Card>
    </div>
    </main>
  )
}
export default Retsepile