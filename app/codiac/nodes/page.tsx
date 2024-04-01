"use client"
import { AnimatedPin } from '@/components/AnimatedPin'
import React, { useEffect, useState } from 'react'
import { Card, ProgressBar } from '@tremor/react';
import { Navigation } from '@/components/Navigation'
import axios from 'axios'

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
        <Card className="mx-auto max-w-md">
      <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Sales
      </h4>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        $71,465
      </p>
      <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        <span>32% of annual target</span>
        <span>$225,000</span>
      </p>
      <ProgressBar value={32} className="mt-2" />
    </Card>

    </div>
  )
}

export default Page
