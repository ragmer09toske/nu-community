import React from 'react'
import { Command} from './ui/command'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import VideoPost from './Feed/VideoPost'
import useDeviceType from '@/app/Device'

export const Feed = () => {
 

  return (
    <div className='w-1/2 h-full p-2 ' style={{
        borderWidth: "1px",
        borderLeftColor: "rgba(255, 255, 255, 0.164)",
        borderRightColor: "rgba(255, 255, 255, 0.164)",
        borderTopWidth: "0px",
        borderBottomWidth: "0px",
        width: "60%",
    }}>
          
          <Command className="rounded-lg border shadow-md p-2" style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px"}}>
            <h4 className="scroll-m-20 p-2 pl-5 text-2xl font-extrabold tracking-tight lg:text-3xl">
              Socials
            </h4>
            <div className='p-4
             '>
              <Input placeholder="Type a command or search..." />
            </div>
            
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
              <div className='flex flex-col  gap-5'>
              <Card className="w-[100%] p-0.5 pl-3 flex items-center">
                <VideoPost />
                <div>
                <CardHeader>
                <div className='flex gap-2 items-center'>
                    <Avatar>
                        <AvatarImage src="nuAvater.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Nucleus
                </div>
                  <CardDescription>
                    Just as Peter outsmarted the pirates with his cleverness and agility
                    we too can navigate the corporate seas with ingenuity and adaptability.
                  </CardDescription>
                </CardHeader>
                </div>
              </Card>

              <Card className="w-[100%]  flex">
                <div>
                <CardHeader>
                <div className='flex gap-2 items-center'>
                    <Avatar>
                        <AvatarImage src="/me2.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                        <h5>Retsepile Shao</h5>
                        <p style={{fontSize:11}}>CEO @Nucleus</p>
                    </div>
                </div>
                  <CardDescription>
                    The worst mistake you can make is to think Lesotho has (Basotho have) no skills. If you think so, it&apos;s probably because you&apos;ve been spending too much time in your bedroom rather than networking. Go outside, and I swear you will be amazed.
                  </CardDescription>
                </CardHeader>
                </div>
              </Card>

              <Card className="w-[100%]">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>

              <Card className="w-[100%]">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
              </div>
            </ScrollArea>
          </Command>
      </div>
  )
}
