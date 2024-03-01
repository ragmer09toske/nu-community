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
              <Card className="w-[100%]">
                <CardHeader>
                    <CardTitle>This is why I had to start blogging.</CardTitle>
                    <p style={{color:"gray", fontSize: 12 }}>Mar 1</p>
                    <CardDescription>
                    I used to think I was too smart for anything outside of IT (Information Technology). I figured all I needed to do was dive into programming and become the best at it. So, I spent my younger years buried in programming books, hitting the library with friends like Relebohile and Kabelo – Kabelo, being a year ahead, dragged me into the world of Java even when I was still in primary school. Meanwhile, my brother Tello was already studying computer science at university, showing off his latest projects whenever he came home. Inspired by them, I decided to focus solely on becoming the best software engineer.
                    <br/><br/>
                    This approach worked well for me in high school, although my grades suffered a bit because I was splitting my attention between coding and academics. I learned how to balance both, which came in handy later in life. I became pretty skilled at coding over the years, sacrificing some grades but still managing to keep both areas afloat, albeit with a few hiccups. Meanwhile, my friends Khotso, Mabula, and Joe were excelling academically, with some even getting opportunities to study abroad – something we all dreamed of.
                    <br/><br/>
                    Fast forward to university (Limkokwing), and I found an environment that suited me perfectly – no more juggling between coding and other subjects, it was all about tech, all the time. I even dabbled in subjects like Business Management, which I initially overlooked but later realized was essential for my entrepreneurial aspirations. Business? Easy. Find something, sell it, make money. Why complicate it?
                    <br/><br/>
                    To cut a long story short, I graduated as an improved version of myself, with a few lessons learned from my brothers along the way. My grades were decent, and I sailed through university without even glancing at the cheating playbook – unlike many others who treated it like their bible. I opted out of that game, still aced exams, and even received some shiny awards at graduation. But trust me, that&apos;s just scratching the surface, especially if you&apos;re aiming to build a business empire instead of just working for someone else.
                    <br/><br/>
                    I could create amazing software solutions but struggled to sell them. Why? Well, for starters, I lacked the right audience. Plus, I&apos;m a hardcore introvert who&apos;d rather endure a root canal than engage in small talk. Texting? Let&apos; s not even go there – my replies are as short and chilly as an Antarctic breeze, even though I mean well. And committing to a text conversation? About as likely as finding a unicorn in my backyard. Social media? Not my thing. And to top it all off, my network is as thin as a single LEGO block. It&apos;s just me and my code, navigating the digital world solo.
                    <br/><br/>
                    This is why I had to start blogging. Because when you&apos;re building, it has to be done in public. You need to be posting, building, publishing, launching. Why? Because you need data.
                    <br/><br/>
                    I refuse to be a starving artist, creating what I think is valuable, only to become attached to my version of value and wonder why I&apos;m not selling. &apos;But I created a beautiful painting,&apos; you might say. That&apos;s all well and good if you&apos;re content being a hobbyist. But if you want a career out of it, you&apos;re going to have to play a back-and-forth game with the market.
                    </CardDescription>
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