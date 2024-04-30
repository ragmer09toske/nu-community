import { ModeToggle } from '@/components/Mode'
import {  Home, LogOut, Menu, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideNav = () => {
  return (
    <div className='absolute w-[100px] h-[98%] flex flex-col dark:bg-[rgba(0,12,46,0.3463760504201681)] items-center gap-5'>
        <div className='p-5 pt-2'>
            <Link href={"/"}>
                <Image
                    src="/nu.png"
                    alt="Nucleus Logo"
                    width={30}
                    height={24}
                    priority
                />
            </Link>
        </div>
        <Home />
        <Star />
        <Menu />
        <div className='absolute bottom-0 p-5 flex flex-col gap-3 items-center'>
            <LogOut />
            <ModeToggle />
        </div>
    </div>
  )
}

export default SideNav