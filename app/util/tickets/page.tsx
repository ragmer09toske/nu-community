"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from "@/app/Store";
import { ListOrderedIcon, Loader2, Trophy, User2 } from 'lucide-react';
import { WebinarFooter } from '@/app/academy/Footer';
import Image from 'next/image';
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react"
   
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { RiOrganizationChart } from '@remixicon/react';

// Define the TypeScript interfaces for the ticket and response
interface Ticket {
  issued_to: string;
  order_number: number;
  date: string;
  ticket_type: string;
  _id: string;
  __v: number;
}

interface TicketResponse {
  ticket: Ticket;
}

const TicketDetails: React.FC = () => {
  const [ticketId, setTicketId] = useState<string>('');
  const [ticketDetails, setTicketDetails] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const loginToken = useStore((state) => state.loginToken);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const id = params.get('q');

    if (id) {
        setTicketId(id);
    }   
  }, []);

  async function fetchTicketDetails(id: string) {
    try {
      setLoading(true)
      const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/ticket/qr/${id}`, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
      });
      setLoading(false)
      setTicketDetails(response.data)
    } catch (error) {
      console.error('We ran into a prorblem');
    }
  }

  useEffect(() => {
    if (ticketId) {
      fetchTicketDetails(ticketId);
    }
  }, [ticketId]);

  return (
    <div className='flex flex-col gap-10'>
    <div className="p-5 justify-center mt-10 lg:mt-0">
          <div className='pb-10'>
            <div className='z-50 fixed w-[90.5%] border p-5 flex gap-2 -mt-6 -ml-2 justify-center rounded' style={{ backgroundImage: "url('/code.jpg')", backgroundSize: "cover" }}>
              <div className='flex'>
                <Image
                  src="/nu.png"
                  alt="Nucleus Logo"
                  className="relative lg:dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  width={30}
                  height={14}
                  priority
                /> 
                <Image
                    src="/one.png"
                    width={120}
                    height={40}
                    alt="Float UI logo"
                />
              </div>
                  <b>devs</b>
              </div>
            </div>
        </div>
        <div className='p-10'>
            <div className='w-full flex justify-center'>
                {loading && <Loader2 className='animate-spin'/>}
            </div>
            {ticketDetails && <Command className="rounded-lg border shadow-md">
                <div className='flex gap-2 justify-center items-center p-3'>
                   <RiOrganizationChart className='text-sm' />
                   <p>Youth Connekt Lesotho</p>
                </div>
                <CommandSeparator />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Details">
                    <CommandItem>
                        <User2 className="mr-2 h-4 w-4" />
                        <span>{ticketDetails.issued_to}</span>
                    </CommandItem>
                    <CommandItem>
                        <ListOrderedIcon className="mr-2 h-4 w-4" />
                        <span>{ticketDetails.order_number}</span>
                    </CommandItem>
                    <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{ticketDetails.date}</span>
                    </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Ticket Type">
                    <CommandItem>
                        <Trophy className="mr-2 h-4 w-4" />
                        <span>{ticketDetails.ticket_type}</span>
                    </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>}
        </div>
        <WebinarFooter />
    </div>
  );
};

export default TicketDetails;
