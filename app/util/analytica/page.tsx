"use client"
import React, { useState } from 'react'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';

const Analytica = () => {
    const [issuedTo, setIssuedTo] = useState<string>("");
    const [orderNumber, setOrderNumber] = useState<string>("");
    const [ticketType, setTicketType] = useState<string>("");
    const [src, setSrc] = useState<string>('');
    const [ticketId, setTicketId] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [generatePdf, setGeneratePdf] = useState<boolean>(false);

    const generatePDF = async () => {
        const input = document.getElementById('ticket');
        if (input) {
          html2canvas(input).then(canvas => {
            // const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 190;
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
    
            // pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
    
            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              pdf.addPage();
              // pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
            }
    
            pdf.save('ticket.pdf');
          });
        }
      };
  return (
    <div id='ticket'>
      <Button onClick={()=>generatePDF}>page</Button> 
    </div>
  )
}

export default Analytica;