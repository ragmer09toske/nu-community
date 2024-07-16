"use client"
import Navbar from '@/components/Navbar'
import PricingComponent from '@/components/Pricing'
import React from 'react'
import useMobile from '../Mobile'
import { AnimatedTooltip } from '../codiac/learn/animated-tooltip'
import FooterLinks from '../webinar/socilaLinks'
import { WebinarFooter } from '../webinar/Footer'
import Image from 'next/image'
import { Layers3 } from 'lucide-react'
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
        "/vee2.png",
    },
    {
      id: 3,
      name: "Tankiso Fuma",
      designation: "Data Scientist",
      image:
        "/fuma.png",
    },
  ];
const Page = () => {
  const isMobile = useMobile()
  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
        <a href="/">
            <Image
                src="/nu.png"
                width={40}
                height={10}
                alt="Float UI logo"
            />
        </a>
    </div>
)
  return (
    <>
    {!isMobile && <Navbar />}
    {isMobile && 
    <div className='fixed w-full -top-5 z-[9999] h-[80px]' style={{backdropFilter: "blur(14px)"}}>
        <div className='p-3 px-8 flex  justify-between items-center'>
            <Brand />
            <Layers3 />
        </div>
    </div>}
    <div className="flex flex-row items-center justify-center pt-36 w-full">
        <AnimatedTooltip items={people} />
        <div className='pl-7'>
        130+ join members
        </div>
    </div>
    <PricingComponent />
    <WebinarFooter />
    </>
  )
}

export default Page