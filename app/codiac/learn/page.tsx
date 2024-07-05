import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='w-full h-[380px] relative flex flex-col gap-7 justify-center items-center bg-blue-700'
            style={{ backgroundImage: "url('/code.jpg')", backgroundSize: "cover" }}
        >
        <div className='w-full h-full absolute top-0 bg-black bg-opacity-50'></div>
            <div className='z-50'>
                <img
                    src="/nu.png"
                    width={80}
                    height={10}
                    alt="Float UI logo"
                />
            </div>
            <div className='z-50 border p-5 flex gap-2 rounded' style={{backgroundColor:"rgba(19, 10, 18, .349)"}}>
                <img
                    src="/one.png"
                    width={120}
                    height={40}
                    alt="Float UI logo"
                />
                Codiac
            </div>
            <div className='w-full h-[70px] p-5 px-20 flex justify-between items-center absolute bottom-0 z-50' style={{backgroundColor: "rgb(19, 10, 18)"}}>
                <div className="flex gap-5 items-center">
                    <div className='flex gap-2'>
                        <div className='z-50'>
                            <img
                                src="/nu.png"
                                width={30}
                                height={10}
                                alt="Float UI logo"
                            />
                        </div>
                        <div>
                            DEVS LAB 
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            CYBER TOOLKIT
                        </div>
                    </div>
                </div>
                <div className="flex float-end">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page