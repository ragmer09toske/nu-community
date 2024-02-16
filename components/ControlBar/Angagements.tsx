import React from 'react'
import { Command } from '../ui/command'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
export const Angagements = () => {
  return (
    <div className='relative w-full'>
        <Command className="rounded-lg border shadow-md p-2" style={{ background: "rgba(255, 255, 255, 0)", borderWidth: "0px"}}>
            <ScrollArea style={{borderWidth: "0px"}} className="h-[100%] flex flex-col gap-5 w-full rounded-md border p-4">
            <div className='flex flex-col gap-5'>
            <h5 className="scroll-m-20 p-2 pl-5 text-2xl font-extrabold tracking-tight lg:text-xl">
                Our Pressence In Our Industry
            </h5>
            <Card className="w-[100%]">
                <CardHeader>
                    <CardTitle>CAfI</CardTitle>
                    <CardDescription>The Company is currently going through cafi training</CardDescription>
                </CardHeader>
            </Card>

            <Card className="w-[100%]">
                <CardHeader>
                    <CardTitle>Limkokwing University</CardTitle>
                    <CardDescription>We have collaborated with Limkokwing University to ignite the sparks of inspiration within young, brilliant minds. Together, we aim to foster creativity, innovation, and a passion for exploration, guiding the next generation towards boundless possibilities. </CardDescription>
                </CardHeader>
            </Card>

            <Card className="w-[100%]">
                <CardHeader>
                <CardTitle>STEAM</CardTitle>
                <CardDescription>The Science, Technology, Engineering, Arts, and Math (STEAM) initiative, championed by the UNDP, serves as a formidable force driving innovation. By integrating diverse disciplines and fostering creativity, STEAM empowers individuals to pioneer groundbreaking ...</CardDescription>
                </CardHeader>
            </Card>

            <Card className="w-[100%]">
                <CardHeader>
                <CardTitle>Virtual Mall of lesotho</CardTitle>
                <CardDescription>a pioneering platform that revolutionizes the concept of traditional shopping experiences. Here, we transcend physical boundaries, offering a dynamic space where the rich heritage and entrepreneurial spirit of Lesotho ...</CardDescription>
                </CardHeader>
            </Card>
            </div>
            </ScrollArea>
        </Command>
    </div>
  )
}
