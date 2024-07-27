"use client"
import Navbar from '@/components/Navbar'
import PricingComponent from '@/components/Pricing'
import useMobile from '../Mobile'
import { AnimatedTooltip } from '../codiac/learn/animated-tooltip'
import { WebinarFooter } from '../academy/Footer'
import Image from 'next/image'
import { Layers3 } from 'lucide-react'
import { PriceContext } from '../academy/AppContex'
import { useState } from 'react'
import RegisterDialog from './RegisterDialog'
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
  const [isOpenOnlinePresence, setIsOpenOnlinePresence] = useState<boolean>(false)
  const [isOpenFullstackMentorship, setIsOpenFullstackMentorship] = useState<boolean>(false)
  const [isOpenUnderTheHoodStudies, setIsOpenUnderTheHoodStudies] = useState<boolean>(false)
  
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
    <PriceContext.Provider value={{
      isOpenOnlinePresence, setIsOpenOnlinePresence,
      isOpenFullstackMentorship, setIsOpenFullstackMentorship,
      isOpenUnderTheHoodStudies, setIsOpenUnderTheHoodStudies
    }}>
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
      <RegisterDialog />
      <PricingComponent />
      <WebinarFooter />
    </PriceContext.Provider>
  )
}

export default Page