"use client"
import React, { useEffect, useState } from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    Cloud,
    CreditCard,
    LifeBuoy,
    Loader2,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
   
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import useStore from "@/app/Store"
import { IconBooks } from '@tabler/icons-react'
import Link from 'next/link'
import { SebebatsoApplicant } from '@/app/Types'
import axios from 'axios'
import { nu_api_base_url } from '@/app/Contants'

const DefaultUserAvater = () => {
  const UserDetails = useStore((state) => state.user);
  const [ticketData, setTicketData] = useState<SebebatsoApplicant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the data from the API when the component mounts or id changes
    const fetchTicketData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<SebebatsoApplicant>(`${nu_api_base_url}/ticketing/66e5712f4742d400cc910448`);
        setTicketData(response.data);
        console.log("Ticket Details:",response.data)
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch ticket data');
        setLoading(false);
      }
    };

    if (UserDetails) {
      fetchTicketData();
    }
  }, [UserDetails]); 

  const logout =()=>{
    localStorage.removeItem("user")
    window.location.reload();
  }
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={ticketData?.avatar} alt="@shadcn" />
                    <AvatarFallback>
                        <Loader2 className='animate-spin'></Loader2>
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    {UserDetails?.name}
                    <p className='text-gray-400' style={{fontSize: 10}}>{UserDetails?.acount}</p>
                </DropdownMenuLabel>
            
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                {
                UserDetails?.acount ==="nu-devs" && 
                <DropdownMenuItem onClick={()=>{window.location.href="/util"}}>
                    <IconBooks className="mr-2 h-4 w-4" />
                    <span>Learn Dash</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                }
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        <span>More...</span>
                        </DropdownMenuItem> 
                    </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <Link href="/util">
                {UserDetails?.acount ==="sebabatso" && 
                <DropdownMenuItem>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                </DropdownMenuItem>}
                </Link>
                <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default DefaultUserAvater;