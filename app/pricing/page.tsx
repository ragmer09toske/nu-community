"use client"
import Navbar from '@/components/Navbar'
import PricingComponent from '@/components/Pricing'
import React from 'react'
import useMobile from '../Mobile'
import { AnimatedTooltip } from '../codiac/learn/animated-tooltip'
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
        "/vee.png",
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
  return (
    <>
    {!isMobile && <Navbar />}
    <div className="flex flex-row items-center justify-center pt-20 w-full">
        <AnimatedTooltip items={people} />
        <div className='pl-7'>
        130+ join members
        </div>
    </div>
    <PricingComponent />
    </>
  )
}

export default Page