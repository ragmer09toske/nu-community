"use client"
import React, { useState } from 'react'
import QRCode from 'qrcode'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button, Card } from '@tremor/react';

const Youthconnect = () => {
  const [attendentID,setAttendentID] = useState<string>("");
  const [src,setSrc] = useState<string>('')
  const generateQR = () =>{
    QRCode.toDataURL(`https://github.com/${attendentID}`).then(setSrc)
  }
  return (
    <div className='p-10'>
      <Input onChange={(e)=>setAttendentID(e.target.value)}  />
      <Button onClick={generateQR}>Generate</Button>
      <div className='flex gap-10 board'>
          <div>
            <h4>This is your Ticket</h4> 
            <p>Youth Connect-Maseru</p>
            <h4>Lesotho Youth Connect Maseru</h4> 
            <p>&apos;Manthabiseng Convention Center, Maseru</p>
            <h4>August 14, 2024 10:00am (SAT)</h4>  
            <div>
              <div>
                <h4>ISSUED TO</h4>
                <p>Retsepile Shao</p>
              </div>
              <div>
                <h4>ORDER NUMBER</h4>
                <p>Youth Connect32234243</p>
                <p>Regitered</p>
                <p>Auguest 05, 2024</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Lesotho Youth Connect Maseru</h4>
            <Image src={src} width={200} height={200} alt='' />
            <h4>Ticket</h4>
            <p>Youth Connect Lesotho</p>
            <p>Free</p>
          </div>
      </div>
    </div>
  )
}

export default Youthconnect