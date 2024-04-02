"use client"
import { AnimatedPin } from '@/components/AnimatedPin'
import React, { useEffect, useState } from 'react'
import { Card, ProgressBar, ProgressCircle } from '@tremor/react';
import { Navigation } from '@/components/Navigation'
import axios from 'axios'
import { RiRecordCircleFill } from '@remixicon/react';
import { Badge, BadgeDelta } from '@tremor/react';

const Page = () => {
  const [codiacs, setCodiacs] = useState<any[]>([]) // Initialize as empty array
  useEffect(()=>{
    const getAllCodiacs = async()  => {
      try{
        const response = await axios.get("https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/registerers")
        // console.log(response.data)
        setCodiacs(response.data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllCodiacs()
  },[])
  
  const arrayLength = codiacs.length;

  return (
    <div className='pt-5'>
        <Navigation />

        <div className="space-y-3">
        <p className="text-center font-mono text-sm text-slate-500">
          Codiac Subscribers
        </p>

        <div className="mx-auto space-y-12">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Badge icon={RiRecordCircleFill}>live</Badge>
            
            <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true}>
              21.2%
            </BadgeDelta>
          </div>
        </div>

        <Card className="mx-auto max-w-sm">
          <div className="flex justify-start space-x-5 items-center">
            <ProgressCircle value={75} size="md">
              <span className="text-xs font-medium text-slate-700">{arrayLength}</span>
            </ProgressCircle>
            <div>
              <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                Number of codiacs ({arrayLength})
              </p>
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Spend management control
              </p>
            </div>
          </div>
        </Card>
      </div>

    </div>
  )
}

export default Page
