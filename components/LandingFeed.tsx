"use client"
import React from 'react'
import { Command} from './ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { ShimmerButton} from './Shimmer'
import useDeviceType from '@/app/Device'
import { AnimatedTooltip } from '@/app/codiac/learn/animated-tooltip'
const people = [
  {
    id: 1,
    name: "Tankiso Ntoko",
    designation: "Software Engineer",
    image:
      "/tinky.png",
  },
  {
    id: 2,
    name: "Nomvuduka Mabaleha",
    designation: "Product Manager",
    image:
      "/me2.png",
  },
  {
    id: 3,
    name: "Tankiso Fuma",
    designation: "Data Scientist",
    image:
      "/fuma.png",
  },
];

export const LandingFeed = () => {
  const isDesktop = useDeviceType()
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
        {!isDesktop && <div className="p-5 justify-center mt-36 lg:mt-0">
          <div className='pb-10'>
            <div className='z-50 fixed w-[84.5%] border p-5 flex gap-2 -mt-2 -ml-1 justify-center rounded' style={{ backgroundImage: "url('/code.jpg')", backgroundSize: "cover" }}>
              <div className='flex'>
                <Image
                  src="/nu.png"
                  alt="Nucleus Logo"
                  className="relative lg:dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  width={30}
                  height={14}
                  priority
                /> 
                <Image
                    src="/one.png"
                    width={120}
                    height={40}
                    alt="Float UI logo"
                />
              </div>
                  <b>Codiac</b>
              </div>
            </div>
        </div>}
        
        <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
          <div className='flex flex-col  gap-5'>
          
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
              <h1 className="text-2xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Training &<br /> Development classes 
              </h1>
              <div className='flex justify-center pl-10 pr-10 items-center'>
              </div>
          </div>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
            <div className='pl-7'>
              130+ members
            </div>
          </div>
          <Link href="/codiac">
          <Card className="relative w-[100%] ">
            <CardHeader>
                <CardTitle>
                  <b>Join Us as We Empower the Next Generation of Coders and Entrepreneurs!</b>   
                </CardTitle>
                <CardDescription>         
                 <br/>    
                  Are you a skilled software engineer passionate about sharing your knowledge and experience? We invite you to join our upcoming webinar aimed at training business-minded individuals and aspiring coders to build innovative software products.
                  <br/><br/>
                  <b>How to Get Involved:</b>
                  <br/>
                  Register: Sign up
                  <br/><br/>
                  Skill Validation: Complete an entry exam to validate your expertise.
                  <br/><br/>
                  Interview: Participate in an interview process to ensure a great fit for our program.
                  <br/><br/>
                </CardDescription>
            </CardHeader>
            <Image
              src="/webinar.png"
              alt="Nucleus Logo"
              style={{
                borderRadius:"0 0 8px 8px"
              }}
              width={855}
              height={24}
              priority
            />
            <div className='absolute bottom-14 left-[100px] top-[535px] lg:bottom-44 lg:left-10 '>
              {/* <ShimmerButton text='Register' />   */}
            </div>
          </Card>
          </Link>

          <Card className="relative w-[100%] p-0.5 pl-3 ">
            <div>
                <CardHeader>
                    <CardTitle>Join Our Freelance Developers Community</CardTitle>
                    <CardDescription>
                      We have developers around the globe seeking to simplify their challenges by distributing them among themselves. In a large project, more often than not, someone excels at a specific task where you may need assistance. 
                      <br/><br/>
                      Have a professional solve your daily issues; pay them for their expertise. Alternatively, become that professional and solve other programmers problems, earning compensation for your efforts.</CardDescription>
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
                <div className='absolute bottom-14 lg:bottom-44 lg:left-10 left-5'>
                  <ShimmerButton text='Join' />  
                </div>
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
