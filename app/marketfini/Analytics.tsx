import React from 'react'
import CodiacData from './codiacData'
import { BarListUsageExample } from './Tech'
import { Chart } from '@/components/Chart'
import { Blocks } from './Blocks'
import Time from './Time'
import Data from './Data'

const Analytics = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <CodiacData />
          <BarListUsageExample />
          <Time />
          <Data />
        </div>
          <div className=''>
            <Chart />
          </div>
      </div>
      <div className='-mt-8'> 
        <Blocks />
      </div>
    </main>
  )
}

export default Analytics