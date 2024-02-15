import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { CommandDemo } from './Command'
import { Separator } from './ui/separator'

export const Messages = () => {
  return (
    <div className='flex flex-col gap-5 pt-5'>
        <Separator />
        <div className='flex gap-2 items-center'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Retsepile Shao
        </div>
        <CommandDemo />
    </div>
  )
}
