"use client";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import QRCode from 'qrcode';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useMobile from '@/app/Mobile';
import { Navigation } from '@/components/Navigation';
import { WebinarFooter } from '@/app/academy/Footer';
const Youthconnect = () => {
  const [issuedTo, setIssuedTo] = useState<string>("");
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [ticketType, setTicketType] = useState<string>("");
  const [src, setSrc] = useState<string>('');
  const [ticketId, setTicketId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [generatePdf, setGeneratePdf] = useState<boolean>(false);
  const isMobile = useMobile()
  const generateQR = async (id: string) => {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(`https://nucleusdevs.com/util/tickets?q=${id}`);
      setSrc(qrCodeDataURL);
      setTicketId(id);
      setGeneratePdf(true); // Trigger PDF generation
    } catch (error: any) {
      console.error('Error generating QR code:', error.message);
    }
  };

  const generatePDF = async () => {
    const input = document.getElementById('ticket');
    if (input) {
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190;
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`YOUTHCONNECT_2024${ticketId}.pdf`);
      });
    }
  };

  const registerTicket = async () => {
    setLoading(true); // Show loading indicator

    const ticketData = {
      issued_to: issuedTo,
      order_number: Math.floor(Math.random() * 1000000000),
      date: new Date().toLocaleDateString('en-ZA', { timeZone: 'Africa/Johannesburg', year: 'numeric', month: '2-digit', day: '2-digit' }).split('/').reverse().join('-'),// Current date in YYYY-MM-DD format
      ticket_type: ticketType
    };

    try {
      const response = await axios.post('https://nu-com-0e51cf02b2c8.herokuapp.com/ticket/create-ticket', ticketData);
      const { _id } = response.data.savedTicket;
      
      // Generate QR code with the real ticket ID
      await generateQR(_id);
      
    } catch (error: any) {
      console.error('Error registering ticket:', error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

 

  useEffect(() => {
    if (generatePdf && src) {
      generatePDF();
      setGeneratePdf(false); // Reset to avoid multiple triggers
    }
  }, [generatePdf, src]);

  return (
    <>
    <Navigation />
    <div className='pt-5 flex flex-col justify-center items-center gap-5 border-t-0 border-gray-700'>
      <Card className='p-5 flex flex-col gap-3 '>
        <Input placeholder="Issued To" onChange={(e) => setIssuedTo(e.target.value)} />
        {/* <Input placeholder="" onChange={(e) => setTicketType(e.target.value)} /> */}
        <Label htmlFor="framework">Ticket Type</Label>
                <Select onValueChange={(v) => setTicketType(v)}>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="GENERAL">General</SelectItem>
                    <SelectItem value="VIP" disabled>VIP</SelectItem>
                  </SelectContent>
                </Select>
        <Button onClick={registerTicket} disabled={loading}>
          {loading ? <Loader2 className='animate-spin' size="sm" /> : 'Register and Download Ticket'}
        </Button>
      </Card>
      {!isMobile && <div id='ticket' className='p-10  bg-white'>
        <div className='pb-5'>
          <h4 className='text-black'><b>This is your Ticket</b></h4>
        </div>
        <div>
          <div className='bg-gray-200 lg:w-[950px] w-[80%] h-3'></div>
          <div className='p-10 flex justify-between bg-gray-100 text-black lg:w-[950px] w-[80%]'>
            <div className='flex'>
              <div>
                <p className='text-sm text-gray-500'><b>Youth Connekt-Maseru</b></p>
                <h4><b>Lesotho Youth Connect Maseru</b></h4>
                <div className='pt-10'>
                  <p className='text-gray-500 text-sm'><b>&apos;Manthabiseng Convention Center, Maseru</b></p>
                </div>
                <h4 className='text-sm'><b>August 14, 2024 8:00am (SAT)</b></h4>
                <div className='flex gap-5 pt-5'>
                  <div>
                    <h4 className='text-sm font-bold'>ISSUED TO</h4>
                    <p className='text-sm text-gray-700'>{issuedTo || 'N/A'}</p>
                  </div>
                  <div>
                    <h4 className='text-sm font-bold'>ORDER NUMBER</h4>
                    <p className='text-sm text-gray-700'>{orderNumber || 'N/A'}</p>
                    <p className='text-sm text-gray-700'>Registered</p>
                    <p className='text-sm text-gray-700'>{new Date().toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className='text-sm font-bold'>Ticket</h4>
                    <h4 className='text-sm'>{ticketType || 'N/A'}</h4>
                    <p className='text-sm text-gray-700'>Youth Connekt Lesotho</p>
                    <p className='text-sm text-gray-700'><b>Free</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {src && <Image src={src} width={250} height={250} alt='QR Code' />}
            </div>
          </div>
        </div>
        <div className='flex ml-72'>
          <h4 className='text-gray-500 text-sm pt-2'><b>© 2024 Youth Connekt Lesotho - All Rights Reserved</b></h4>
        </div>
      </div>}
      {isMobile&&
      <div id='ticket pt-5'>
        <div className='pb-3' style={{fontSize:8}}>
          <h4 className='text-black'><b>This is your Ticket</b></h4>
        </div>
      <Card className="w-[350px]"> 
        <div className='flex gap-2'>
            <div> 
                <CardHeader>
                <CardDescription style={{fontSize:10}}>Lesotho, Maseru</CardDescription>
                <CardTitle className='font-[10px]' style={{fontSize:8}}>Youth Connekt Lesotho</CardTitle>
                </CardHeader>
                <div className='-mt-5'>
                    <CardHeader>
                        <CardDescription style={{fontSize:7}}>&apos;Manthabiseng Convention Center, Maseru</CardDescription>
                        <CardTitle style={{fontSize:7}}>August 14, 2024 800am (SAT)</CardTitle>
                    </CardHeader>
                </div>
            </div>
            <div className='p-5 pl-0'>
                {src && <Image src={src} width={200} height={200} alt='QR Code' />}
            </div>
        </div>
        <div className=" bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
        <div className='flex justify-center gap-5 p-5'>
            <div>
            <h4 className='text-sm font-bold' style={{fontSize:8}}>ISSUED TO</h4>
            <p className='text-sm'style={{fontSize:8}}>{issuedTo || 'N/A'}</p>
            </div>
            <div>
            <h4 className='text-sm font-bold' style={{fontSize:8}}>ORDER NUMBER</h4>
            <p className='' style={{fontSize:8}}>{orderNumber || 'N/A'}</p>
            <p className='' style={{fontSize:8}}>Registered</p>
            <p className='' style={{fontSize:8}}>{new Date().toLocaleDateString()}</p>
            </div>
            <div>
            <h4 className='text-sm font-bold' style={{fontSize:8}}>Ticket</h4>
            <h4 className='text-sm' style={{fontSize:8}}>{ticketType || 'N/A'}</h4>
            <p className='' style={{fontSize:8}}>Youth Connekt Lesotho</p>
            <p className='' style={{fontSize:8}}><b>Free</b></p>
            </div>
        </div>
      </Card>
      <div className='flex justify-center' >
          <p className='text-gray-500 text-sm pt-2' style={{fontSize:8}}><b>© 2024 Youth Connekt Lesotho - All Rights Reserved</b></p>
      </div>
      </div>}
    </div>
    {/* <WebinarFooter /> */}
    </>
  );
}

export default Youthconnect;
