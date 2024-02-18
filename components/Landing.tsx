import React from 'react'
import { Card } from './ui/card'
import { LandingFeed } from './LandingFeed'

export const Landing: React.FC = () => {
  return (
    <div className='flex w-full  gap-3 justify-center lg:top-5   items-center lg:h-full h-[120%] fixed bottom-7'>
      <Card style={{
          backdropFilter: "blur(5px)",
          borderWidth: "1px",
      }}
        className="flex justify-center dark:bg-[#09090bd9] lg:w-[80%] mt-16 lg:mt-0 h-[100%] lg:h-[85%] bg-[#FFFFFFFF]"
      >
        <LandingFeed />
      </Card>
    </div>
  )
}
