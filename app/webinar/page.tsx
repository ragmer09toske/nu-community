"use client"
import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { WebinarContext } from './AppContex'

const Home = () => {
const [formType, setFormType] = useState<string>("initials")
  const [jobStatus, setJobStatus] = useState<string>('');
  return (
    <>
    <div className='relative' >
        <div className='p-5 fixed top-0 z-50'>
            <Image
                src="/webinarBanner.png"
                alt="Nucleus Logo"
                className="relative"
                width={920}
                height={24}
                priority
                style={{
                borderRadius:"8px 8px 8px 8px"
                }}
            />
        </div>
    </div>
    <div className='p-5'>
      <WebinarContext.Provider value={{formType, setFormType,jobStatus, setJobStatus}}>
        <Card className='p-2 mt-36'>
            <div className='h-full'>
                <RegisterForm />
            </div>
        </Card>
      </WebinarContext.Provider>
    </div>
    </>
  )
}

export default Home