"use client"

import React from 'react'
import { Command} from './ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Feed } from './Feed'
import { ControlBar } from './ControlBar/ControlBar'
import { Main } from './Main'
import useDeviceType from '@/app/Device'
import { OutReachBar } from './OutReachBar'
import Image from 'next/image'

export const Landing = () => {
  const isDesktop: boolean = useDeviceType();

  return (
    <div className='flex w-full gap-3 justify-center top-5 items-center h-full fixed bottom-7'>
      {isDesktop && <OutReachBar />}
      <Card style={{
          backdropFilter: "blur(5px)",
          // background: "#09090bd9",
          borderWidth: "1px",
          height: "85%"
      }}
        className="flex justify-center dark:bg-[#09090bd9] lg:w-[80%] sm:w-[90%] bg-[#FFFFFFFF]"
      >
        <Feed />
        <div>
        <Image
            src="/mainIcons.svg"
            alt="Nucleus Logo"
            className="relative lg:dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            width={520}
            height={24}
            priority
        />
        </div>
      </Card>
    </div>
  )
}
