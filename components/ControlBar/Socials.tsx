import React from 'react'
import { Command } from '../ui/command'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export const Socials = () => {
  return (
    <div>
        <Command className="rounded-lg border shadow-md p-2" style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px"}}>
            <div className='p-4'>
            <Input placeholder="Type a command or search..." />
            </div>
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
            <div className='flex flex-col gap-5'>
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
