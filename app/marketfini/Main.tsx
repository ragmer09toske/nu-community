import React, { useEffect, useState } from 'react'
import CodiacData from "./codiacData"
import NewCodian from "./NewCodian"
import { BarListUsageExample } from "./Tech"
import { Chart } from '@/components/Chart';
import { Blocks } from './Blocks';

interface Codiac {
  _id: string; // Represents the unique identifier of the object
  firstname: string; // Represents the first name of the person
  lastname: string; // Represents the last name of the person
  number: number; // Represents the phone number of the person
  email: string; // Represents the email address of the person
  reason: string; // Represents the reason or purpose related to the person
  __v: number; // Represents the version key in MongoDB
}

interface CodiacUsers {
  _id: string; // Represents the unique identifier of the object
  name: string; // Represents the first name of the person
  email: string; // Represents the email address of the person
  number: number; // Represents the phone number of the person
  acount:string;
  __v: number; // Represents the version key in MongoDB
}


const Main = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <NewCodian />
          <CodiacData />
          <BarListUsageExample />
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

export default Main