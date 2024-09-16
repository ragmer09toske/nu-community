"use client";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import QRCode from 'qrcode';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { CalendarDays, InfoIcon, Loader2, MoreVertical, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTheme } from "next-themes";
import { toast } from "sonner"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { UploadDropzone } from '@/app/utils/uploadthing';
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
import { nu_api_base_url } from '@/app/Contants';
import NuLoad from '../NuLoad';
import { FileResponse } from '../Types';
import { Dialog,  DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
  const Youthconnect = () => {
  const [issuedTo, setIssuedTo] = useState<string>("");
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [ticketType, setTicketType] = useState<string>("");
  const [src, setSrc] = useState<string>('');
  const [ticketId, setTicketId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [generatePdf, setGeneratePdf] = useState<boolean>(false);
  const [disabled,setDisabled] = useState<boolean>(false)
  const isMobile = useMobile()
  const [formStage, setFormStage] = useState<string>('one')
  const [ticket,setTicket] = useState<boolean>(false)
  const [ticketReady,setTicketReady] = useState<boolean>(false)
  const [typeRegister,setTypeRegister] = useState<boolean>(true)
  const { theme, setTheme } = useTheme()
  const [thumbnail, setThumbnail] = useState<string>('');
  const [designition, setDesignition] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [phone, setPhone] = useState<string>();
  const [fileResponses, setFileResponses] = useState<FileResponse[]>([]);
  const fileResponsesArray = fileResponses[0];
  const fileResponses_len = fileResponses.length;

  const generateQR = async (id: string) => {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(`https://nucleusdevs.com/util/ticketing?q=${id}`);
      setSrc(qrCodeDataURL);
      setTicketId(id);
      setGeneratePdf(true); // Trigger PDF generation
    } catch (error: any) {
      console.error('Error generating QR code:', error.message);
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get('toske');

    if (id === "Xwyu768") {
        setDisabled(true);
    }   
  }, []);

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

        pdf.save(`YOUTHCONNEKT_2024${ticketId}.pdf`);
      });
    }
  };

  const registerTicket = async () => {
    setLoading(true);
    const ticketData = {
      issued_to: issuedTo,
      order_number: Math.floor(Math.random() * 1000000000),
      date1: new Date().toLocaleDateString('en-ZA', { timeZone: 'Africa/Johannesburg', year: 'numeric', month: '2-digit', day: '2-digit' }).split('/').reverse().join('-'),// Current date in YYYY-MM-DD format
      ticket_type: ticketType,
      email: email,
      organization: organization ,
      phone: phone,
      designition: designition,
      avatar:thumbnail
    };

    try {
      const response = await axios.post(`${nu_api_base_url}/ticket_auth`, ticketData);
      const { _id } = response.data.savedTicket;
      
      // Generate QR code with the real ticket ID
      await generateQR(_id);
      
    } catch (error: any) {
      console.error('Error registering ticket:', error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  const handleTicketReady = () =>{
    setTicketReady(true)
    setTypeRegister(!typeRegister)
  }
  useEffect(() => {
    if (ticketType) {
      setTicket(!ticket)
    }
  }, [ticketType]);

  useEffect(()=>{
    setTheme("light")
  })
  useEffect(() => {
    if (generatePdf && src) {
      generatePDF();
      setGeneratePdf(false);
    }
  }, [generatePdf, src]);
  useEffect(() => {
    setThumbnail(fileResponsesArray?.url);
  }, [fileResponsesArray]);


  return (
    <>
    <Navigation />
    {isMobile && 
    <div className="p-5 justify-center mt-10 lg:mt-0 ml-2">
      <div className='pb-10'>
        <div className='pb-10'>
          <div className='z-50 fixed w-[90.5%] border p-20 flex gap-2 -mt-6 -ml-2 justify-center rounded' style={{ backgroundImage: "url('/sebabatso.png')", backgroundSize: "cover" }}>
          </div>
        </div>
      </div>
    </div>}
    {formStage === 'two' && <div className='pt-5 mt-14 lg:mt-0 flex flex-col justify-center items-center gap-5'>
      {typeRegister &&
        <Card className='p-5 flex flex-col gap-3 w-[350px]'>
          <div className='flex gap-2 items-center'>
            <Avatar>
            {fileResponses_len === 0 && (<button className="flex items-center justify-center  border border-dashed aspect-square w-full rounded-md object-cover">
                <Dialog>
                  <DialogTrigger asChild>
                      <Upload className="h-4 w-4 text-muted-foreground" />
                  </DialogTrigger>
                  <DialogContent className="p-10">
                      <DialogHeader>
                          <DialogTitle>Thumbnail</DialogTitle>
                          <DialogDescription>
                            Select a presentable picture, preferably with a white background.
                          </DialogDescription>
                      </DialogHeader>
                      <UploadDropzone
                        endpoint="mediaPost"
                        onClientUploadComplete={(res: FileResponse[]) => {
                        // Do something with the response array
                        console.log("Files: ", res);

                        // Update the fileResponses state variable
                        setFileResponses(res);

                        // Accessing the name of each file
                        res.forEach(file => {
                          const fileName = file.name;
                          console.log("File Name: ", fileName);
                          // Do something with the file name
                        });
                        }}
                        onUploadError={(error: Error) => {
                        // Do something with the error.
                        
                        }}
                      />
                  </DialogContent>
                </Dialog>
                </button>)}
                {fileResponses_len >= 0 &&  <>
                  {fileResponses.map((file, index) => (
                     <AvatarImage
                      key={index}
                      alt="Product image"
                      height="84"
                      src={file.url}
                      width="84"
                    />
                  ))}</>
                }
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              {fileResponses_len === 0 && <p style={{fontSize: 12}}>Upload an Image of Yourself</p>}
            </div>
            <div>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <InfoIcon className='text-gray-500 ml-10' onClick={() =>
                    toast("Event has been created", {
                      description: "Sunday, December 03, 2023 at 9:00 AM",
                      action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                      },
                    })
                  }/>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        <Label htmlFor="framework">Ticket Type</Label>
            <Select onValueChange={(v) => setTicketType(v)}>
                <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                {!disabled ? (
                  <div>
                      <SelectItem value="GENERAL">General</SelectItem>
                  </div>
                ):
                  <div>
                      <SelectItem value="GENERAL" disabled>General</SelectItem>
                      <SelectItem value="VIP">VIP</SelectItem>
                  </div>
                }
                </SelectContent>
            </Select>
            {/* onClick={registerTicket} */}
        <Button onClick={handleTicketReady} disabled={!ticket}>
          {loading ? <NuLoad /> : 'Prepare Ticket'}
        </Button>
      </Card>}
      {ticketReady && <div className=''>
      {!isMobile && <div id='ticket' className='p-10  bg-white'>
        <div className='pb-5'>
          <h4 className='text-black'><b>This is your Ticket</b></h4>
        </div>
        <div>
          <div className='bg-gray-200 lg:w-[950px] w-[80%] h-3'></div>
          <div className='p-10 flex justify-between bg-gray-100 text-black lg:w-[950px] w-[80%]'>
            <div className='flex'>
              <div>
                <p className='text-sm text-gray-500'><b>Youth Connekt Lesotho</b></p>
                <h4><b>Youth Connekt Lesotho</b></h4>
                <div className='pt-10'>
                  <p className='text-gray-500 text-sm'><b>&apos;Manthabiseng Convention Center, Maseru</b></p>
                </div>
                <h4 className='text-sm'><b>October, 2024 8-11 (Mon-Fri)</b></h4>
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
          <h4 className='text-gray-500 text-sm pt-2'><b>© 2024 Youth Connekt - All Rights Reserved</b></h4>
        </div>
      </div>}
      {isMobile&&
      <div id='ticket'>
      <div className='pb-3 pt-5'>
        <h4 className='' style={{fontSize:8}}><b>This is your Ticket</b></h4>
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
                  <CardTitle style={{fontSize:7}}>October, 2024 08-11 (Mon-Fri)</CardTitle>
                </CardHeader>
              </div>
            </div>
            <div className='p-5 pl-0'>
                {src && <Image src={src} width={200} height={200} alt='QR Code' />}
            </div>
        </div>
        {/*  */}
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
            <p className='' style={{fontSize:8}}>Youth Connekt</p>
            <p className='' style={{fontSize:8}}><b>Free</b></p>
            </div>
        </div>
      </Card>

      <div className='flex justify-center' >
          <p className='text-gray-500 text-sm pt-2' style={{fontSize:8}}><b>© 2024 Youth Connekt Lesotho - All Rights Reserved</b></p>
      </div>
      
      </div>}
      <div className='w-full flex justify-center p-2'>
        <Button onClick={registerTicket}>
          {loading ?  <Loader2 className='animate-spin' size="sm" /> : 'Download Ticket'}
        </Button>
      </div>
      </div>}
    </div>}
    {formStage === "one" && 
    
    <div className='pt-5 flex flex-col mt-14 lg:mt-0 justify-center items-center gap-5'>
      <Card className='p-5 flex flex-col gap-3 w-[350px]'>
        <Label htmlFor="framework" >Name</Label>
        <Input placeholder="Full names" onChange={(e) => setIssuedTo(e.target.value)} />
        <Label htmlFor="framework" >Email</Label>
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)}  type='email' />
        <Label htmlFor="framework" >Phone</Label>
        <Input placeholder="country code + phone number" onChange={(e)=>setPhone(e.target.value)}  type='tel' />
        <Label htmlFor="framework" >Organization</Label>
        <Input placeholder="Organization" onChange={(e)=> setOrganization(e.target.value)}  type='text' />
        <Label htmlFor="framework">Designition</Label>
          <Select onValueChange={(v) => setDesignition(v)}>
            <SelectTrigger id="framework">
            <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <div>
                {!disabled && <div><SelectItem value="Youth Participant">Youth Participant</SelectItem>
                <SelectItem value="Youth Exhibitor">Youth Exhibitor</SelectItem>
                <SelectItem value="Youth Presenter">Youth Presenter</SelectItem></div>}
                <SelectItem value="Panelist">Panelist</SelectItem>
                <SelectItem value="Disability">Disability</SelectItem>
                <SelectItem value="Government Official">Government Official</SelectItem>
                <SelectItem value="NGO">NGO</SelectItem>
                <SelectItem value="Development Partner">Development Partner</SelectItem>
                <SelectItem value="Private Sector">Private Sector</SelectItem>
                <SelectItem value="Media">Media</SelectItem>
              </div>
            </SelectContent>
          </Select>
        <Button onClick={()=>setFormStage("two")} disabled={loading}>
          {loading ? <NuLoad /> : 'Continue'}
        </Button>
      </Card>
    </div>}
    </>
  );
}

export default Youthconnect;
