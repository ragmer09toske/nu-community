"use client"

import React from 'react'
import { Card} from './ui/card'
import { Feed } from './Feed'
import { ControlBar } from './ControlBar/ControlBar'
import { Main } from './Main'

export const Network = () => {

  return (
    <div className='flex w-full gap-3 justify-center top-5 items-center h-full fixed bottom-7'>
      <Card style={{
        backdropFilter: "blur(5px)",
        borderWidth: "1px",
        height: "85%"
      }}
        className="flex justify-center dark:bg-[#09090bd9] lg:w-[80%] sm:w-[90%] bg-[#FFFFFFFF]"
      >
        { <ControlBar />}
  
        <Feed />
  
        {<Main />}
      </Card>
    </div>
  )
}
