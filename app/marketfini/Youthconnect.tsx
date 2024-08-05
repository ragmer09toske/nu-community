"use client"
import React, { useState } from 'react'
import QRCode from 'qrcode'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@tremor/react';

const Youthconnect = () => {
  const [attendentID,setAttendentID] = useState<string>("");
  const [src,setSrc] = useState<string>('')
  const generateQR = () =>{
    QRCode.toDataURL(`https://github.com/${attendentID}`).then(setSrc)
  }
  return (
    <div>
        <Input onChange={(e)=>setAttendentID(e.target.value)}  />
        <Image src={src} width={200} height={200} alt='' />
        <Button onClick={generateQR}>Generate</Button>
    </div>
  )
}

export default Youthconnect