import React from 'react';
import jsPDF from 'jspdf';
import { Box } from '@mui/material';
// import logo from '../public/nu.png';
import { Download } from 'lucide-react';

interface Skill {
  name: string;
  price: number;
}

interface PdfGeneratorProps {
  chosenSkills: Skill[];
  totalPrice: number;
}

const PdfGenerator: React.FC<PdfGeneratorProps> = ({ chosenSkills, totalPrice }) => {
  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    // Set up the initial position and formatting
    let yPos = 10;
    doc.setFontSize(12);

    // Add company logo
    // doc.addImage(logo, 'PNG', 10, yPos, 50, 20); 

    // Add company details as text
    doc.text('Nucleusdevs', 10, yPos);
    yPos += 10;
    doc.text('Phone: +266 59749725', 10, yPos);
    yPos += 10;
    doc.text('Email: nucleusdevs@gmail.com', 10, yPos);
    yPos += 20; // Increase yPos for spacing

    // Add a title
    doc.setFontSize(16);
    doc.text('Invoice', 10, yPos);
    yPos += 10;

    // Add selected items
    doc.setFontSize(12);
    chosenSkills.forEach((chosenSkill, index) => {
      const itemText = `${chosenSkill.name} - ${chosenSkill.price} M`;
      doc.text(itemText, 10, yPos);
      yPos += 10;
    });

    // Add total
    doc.setFontSize(14);
    doc.text(`Total: ${totalPrice} M`, 10, yPos);

    // Save the PDF with a specific name
    doc.save('Nucleus invoice.pdf');
  };

  return (
    <Box>
      <Download onClick={handleDownloadPdf} />
    </Box>
  );
};

export default PdfGenerator;
