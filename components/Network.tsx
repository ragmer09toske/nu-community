import React from 'react'
import { Command} from './ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Feed } from './Feed'
import { ControlBar } from './ControlBar/ControlBar'
import { Main } from './Main'

export const Network = () => {
  return (
    <div className='flex w-full gap-3 justify-center top-5 items-center h-full fixed bottom-7'>
      <Card style={{
          backdropFilter: "blur(5px)",
          background: "#09090bd9",
          borderWidth: "1px",
          width: "60%",
          height: "85%"
      }}
        className="flex justify-center"
      >
        <ControlBar />
  
        <Feed />
  
        <Main />
      </Card>
    </div>
  )
}
