import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { XCircle } from 'lucide-react'
import { Button } from './ui/button'


export const Notes = ({setFiles}) => {
  return (
    <div className='w-full flex flex-col gap-5 p-5'>
        <div className='w-full flex justify-end pr-5'>
            <XCircle onClick={()=>setFiles("Files")} />
        </div>
        <div>
            <p>
                Leave us a few pointers
            </p>
        </div>
        <div>
            <Textarea />
        </div>
        <Button variant={"outline"}>Save</Button>
    </div>
  )
}
