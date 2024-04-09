"use client"
import { AnimatedPin } from '@/components/AnimatedPin'
import React, { useEffect, useState } from 'react'
import { Card, ProgressBar, ProgressCircle } from '@tremor/react';
import { Navigation } from '@/components/Navigation'
import axios from 'axios'
import { RiRecordCircleFill } from '@remixicon/react';
import { Badge, BadgeDelta } from '@tremor/react';
import TablePagination from '@mui/material/TablePagination';
import { RSVP } from './Tabs';
import { Loader2 } from 'lucide-react';



const Page = () => {
  const [codiacs, setCodiacs] = useState<any[]>([]) 
  const [startIndex, setStartIndex] = useState<number>(0);
  const [search,setSearch] = useState<string>("")
  const [loading,setLoading] = useState<boolean>(false)
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  useEffect(()=>{
    const getAllCodiacs = async()  => {
      setLoading(true)
      try{
        const response = await axios.get("https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/registerers")
        setCodiacs(response.data)
        setLoading(false)
      }
      catch(error){
        console.log(error)
        setLoading(false)
      }
    }
    getAllCodiacs()
  },[])
  
  const arrayLength = codiacs.length;

  return (
    <div>
      <Navigation />
      <div className="space-y-3">
        <div className='flex w-[100%] items-center justify-center pl-10'>
          <div className='flex flex-col gap-5'>
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
                  <span className="text-xs font-medium text-slate-700">{!loading ? arrayLength : <Loader2 className='animate-spin'/>}</span>
                </ProgressCircle>
                <div>
                  <p className="text-tremor-default flex text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                    Number of codiacs ({!loading ? arrayLength : <Loader2 className='animate-spin'/>})
                  </p>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Spend management control
                  </p>
                </div>
              </div>
            </Card>
            <RSVP />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
