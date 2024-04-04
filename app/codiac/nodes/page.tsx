"use client"
import { AnimatedPin } from '@/components/AnimatedPin'
import React, { useEffect, useState } from 'react'
import { Card, ProgressBar, ProgressCircle } from '@tremor/react';
import { Navigation } from '@/components/Navigation'
import axios from 'axios'
import { RiRecordCircleFill } from '@remixicon/react';
import { Badge, BadgeDelta } from '@tremor/react';
import TablePagination from '@mui/material/TablePagination';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { Stack } from '@mui/material';
import { RSVP } from './Tabs';
import { Input } from '@/components/ui/input';
import { Loader2, Send } from 'lucide-react';


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

  const handleSearch = ()=>{
    const getAllCodiacs = async()  => {
      setLoading(true)
      try{
        const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/search/?searchParam=${search}`)
        setCodiacs(response.data)
        setLoading(false)
      }
      catch(error){
        setLoading(false)
        // console.log(error)
      }
    }
    getAllCodiacs()
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleShowMore = () => {
    setStartIndex(prevIndex => prevIndex + 10);
  };
  const handleShowLess = () => {
    setStartIndex(prevIndex => prevIndex - 10);
  };
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
        <div className='flex w-[100%] items-center justify-center pl-10'>
          <div>
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
            <RSVP />
          </div>
          <div className="mx-auto max-w-5xl">
            <div className='flex gap-5'>
              <Input placeholder='search' onChange={(e)=>{setSearch(e.target.value)}} />
              <Badge>
                {
                  !loading ? 
                  (<Send onClick={handleSearch}/>)
                  : 
                  (<Loader2 className='animate-spin'/>)
                }
              </Badge>
            </div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>First Name</TableHeaderCell>
                  <TableHeaderCell>Last Name</TableHeaderCell>
                  <TableHeaderCell>Number</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Reason</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {codiacs.slice(startIndex, startIndex + 10).map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{item.firstname}</TableCell>
                      <TableCell>{item.lastname}</TableCell>
                      <TableCell>{item.number}</TableCell>
                      <TableCell>
                        <HoverCard>
                          <HoverCardTrigger>{item.email.length > 10 ? `${item.email.slice(0, 10)}...` : item.email}</HoverCardTrigger>
                          <HoverCardContent>
                            {item.email}
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                      <TableCell>
                        <pre>
                          
                        </pre>
                        <HoverCard>
                          <HoverCardTrigger>{item.reason.length > 20 ? `${item.reason.slice(0, 20)}...` : item.reason}</HoverCardTrigger>
                          <HoverCardContent>
                          <div className='flex flex-wrap w-[100%]'>
                            {item.reason &&
                              item.reason
                                .match(/.{1,33}/g) // Split text into chunks of 40 characters
                                .map((chunk:any, index:any) => (
                                  <React.Fragment key={index}>
                                    {chunk}
                                    <br /> {/* Add a line break after each chunk */}
                                  </React.Fragment>
                                ))}
                          </div>
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            {/* <button onClick={handleShowMore}>Show More</button>
            <button onClick={handleShowLess}>Show More</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
