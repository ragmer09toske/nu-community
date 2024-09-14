"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from "@/app/Store";
import { AlignVerticalDistributeStart, AudioWaveform, Dessert, Fingerprint, ListOrderedIcon, Loader2, MoreHorizontal, Trophy, User2 } from 'lucide-react';
import { WebinarFooter } from '@/app/academy/Footer';
import Image from 'next/image';
import {
    Calendar,
  } from "lucide-react"
   
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
import { RiOrganizationChart } from '@remixicon/react';
import { nu_api_base_url } from '@/app/Contants';
import NuLoad from '../NuLoad';
import { IconDetails } from '@tabler/icons-react';

// Define the TypeScript interfaces for the ticket and response
interface Ticket {
  issued_to: string;
  order_number: number;
  date1: string;
  ticket_type: string;
  email: string;
  organization: string;
  designition: string;
  phone: string;
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
      const response = await axios.get(`${nu_api_base_url}/ticketing/${id}`, {
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
            <div className='z-50 fixed w-[90.5%] border p-20 flex gap-2 -mt-6 -ml-2 justify-center rounded' style={{ backgroundImage: "url('/sebabatso/YOUTH CONNEKT LESOTHO LOGO.jpg')", backgroundSize: "cover" }}>
            </div>
          </div>
        </div>
        <div className='p-10'>
            <div className='w-full flex justify-center'>
                {loading && <NuLoad />}
            </div>
            {ticketDetails && <Command className="rounded-lg border shadow-md mt-5">
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
                        <AudioWaveform className="mr-2 h-4 w-4" />
                        <span>{ticketDetails.organization}</span>
                    </CommandItem>
                    <CommandItem>
                        <AlignVerticalDistributeStart className="mr-2 h-4 w-4" />
                        <span>{ticketDetails.designition}</span>
                    </CommandItem>
                    <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{ticketDetails.date1}</span>
                    </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Ticket Type">
                    <CommandItem>
                        <Fingerprint className="mr-2 h-4 w-4" />
                        <span>{ticketDetails.ticket_type}</span>
                    </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>}
        </div>
    </div>
  );
};

export default TicketDetails;
