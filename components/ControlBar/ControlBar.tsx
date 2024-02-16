import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Angagements } from './Angagements'
import { Socials } from './Socials'

export const ControlBar = () => {
  return (
    <div className='w-1/2 h-full p-2  flex justify-center' style={{
        width: "35%",
      }}>
        <Tabs defaultValue="account" className="flex flex-col">
            <TabsList>
                <TabsTrigger value="account">Current Angagements</TabsTrigger>
                <TabsTrigger value="password">Socials</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Angagements />
            </TabsContent>
            <TabsContent value="password">
                <Socials />
            </TabsContent>
        </Tabs>
      </div>
  )
}
