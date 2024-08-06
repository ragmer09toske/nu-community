"use client"
import React, { useState } from 'react'
import QRCode from 'qrcode'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button, Card } from '@tremor/react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Youthconnect = () => {
  const [attendentID, setAttendentID] = useState<string>("");
  const [src, setSrc] = useState<string>('');

  const generateQR = () => {
    QRCode.toDataURL(`https://github.com/${attendentID}`).then(setSrc);
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

  return (
    <div  className='p-10 bg-white border-t-0 border-gray-700'>
      <div className='py-5'>
        <Input onChange={(e) => setAttendentID(e.target.value)} />
        <Button onClick={generateQR}>Generate</Button>
      </div>
      <div id='ticket' className='p-10'>
      <div className='pb-5'>
        <h4 className='text-black'><b>This is your Ticket</b></h4>
      </div>
      <div className=''>
        <div className='bg-gray-200 lg:w-[950px] w-[80%] h-3'></div>
        <div className='p-10 flex justify-between bg-gray-100 text-black lg:w-[950px] w-[80%]'>
          <div className='flex'>
            <div>
              <p className='text-sm text-gray-500'><b>Youth Connect-Maseru</b></p>
              <h4><b>Lesotho Youth Connect Maseru</b></h4>
              <div className='pt-10'>
                <p className='text-gray-500 text-sm'><b>'Manthabiseng Convention Center, Maseru</b></p>
              </div>
              <h4 className='text-sm'><b>August 14, 2024 10:00am (SAT)</b></h4>
              <div className='flex gap-5 pt-5'>
                <div>
                  <h4 className='text-sm font-bold'>ISSUED TO</h4>
                  <p className='text-sm text-gray-700'>Retsepile Shao</p>
                </div>
                <div>
                  <h4 className='text-sm font-bold'>ORDER NUMBER</h4>
                  <p className='text-sm text-gray-700'>Youth Connect32234243</p>
                  <p className='text-sm text-gray-700'>Registered</p>
                  <p className='text-sm text-gray-700'>August 05, 2024</p>
                </div>
                <div>
                  <h4 className='text-sm font-bold'>Ticket</h4>
                  <h4 className='text-sm'>Lesotho Youth Connect Maseru</h4>
                  <p className='text-sm text-gray-700'>Youth Connect Lesotho</p>
                  <p className='text-sm text-gray-700'><b>Free</b></p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={src} width={250} height={250} alt='' />
          </div>
        </div>
      </div>
      <div className='flex ml-72'>
        <h4 className='text-gray-500 text-sm pt-2'><b>© 2024 Youth Connekt Lesotho - All Rights Reserved</b></h4>
      </div>
      </div>
      <Button onClick={generatePDF}>Download PDF</Button>
    </div>
  );
}

export default Youthconnect;
