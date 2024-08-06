"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@tremor/react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Loader2 } from 'lucide-react';

const Youthconnect = () => {
  const [issuedTo, setIssuedTo] = useState<string>("");
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [ticketType, setTicketType] = useState<string>("");
  const [src, setSrc] = useState<string>('');
  const [ticketId, setTicketId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [generatePdf, setGeneratePdf] = useState<boolean>(false);

  const generateQR = async (id: string) => {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(`https://nucleusdevs.com/tickets?q=${id}`);
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

        pdf.save('ticket.pdf');
      });
    }
  };

  const registerTicket = async () => {
    setLoading(true); // Show loading indicator

    const ticketData = {
      issued_to: issuedTo,
      order_number: Number(orderNumber),
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
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
    <div className='p-10 bg-white border-t-0 border-gray-700'>
      <div className='py-5'>
        <Input placeholder="Issued To" onChange={(e) => setIssuedTo(e.target.value)} />
        <Input placeholder="Order Number" onChange={(e) => setOrderNumber(e.target.value)} />
        <Input placeholder="Ticket Type" onChange={(e) => setTicketType(e.target.value)} />
        <Button onClick={registerTicket} disabled={loading}>
          {loading ? <Loader2 className='animate-spin' size="sm" /> : 'Register and Generate PDF'}
        </Button>
      </div>
      <div id='ticket' className='p-10'>
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
                <h4 className='text-sm'><b>August 14, 2024 10:00am (SAT)</b></h4>
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
      </div>
    </div>
  );
}

export default Youthconnect;
