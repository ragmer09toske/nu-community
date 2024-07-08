import React from 'react'
import RegisterForm from './RegisterForm'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const Home = () => {
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
        <Card className='p-2 mt-36'>
            <RegisterForm />
        </Card>
    </div>
    </>
  )
}

export default Home