import React, { useEffect, useState } from 'react'
import DataDisplay from "./strapi"
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    MoreVertical,
 
  } from "lucide-react"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
  } from "@/components/ui/pagination"
import axios, { CancelTokenSource } from 'axios'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { RiAddFill } from "@remixicon/react"
import CodiacData from "./codiacData"
import NewCodian from "./NewCodian"
import useStore from "@/app/Store"
import { BarListUsageExample } from "./Tech"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

interface Codiac {
  _id: string; // Represents the unique identifier of the object
  firstname: string; // Represents the first name of the person
  lastname: string; // Represents the last name of the person
  number: number; // Represents the phone number of the person
  email: string; // Represents the email address of the person
  reason: string; // Represents the reason or purpose related to the person
  __v: number; // Represents the version key in MongoDB
}

interface CodiacUsers {
  _id: string; // Represents the unique identifier of the object
  name: string; // Represents the first name of the person
  email: string; // Represents the email address of the person
  number: number; // Represents the phone number of the person
  acount:string;
  __v: number; // Represents the version key in MongoDB
}


const Main = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [codiacs, setCodiacs] = useState<Codiac[]>([]);
  const [codiacsUsers, setCodiacsUsers] = useState<CodiacUsers[]>([]);
  const loginToken = useStore((state) => state.loginToken)
  const date = new Date()

    useEffect(() => { 
        let source: CancelTokenSource;
        
      
        const getAllCodiacs = async () => {
          setLoading(true);   
          try {
            source = axios.CancelToken.source();
            const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/registerers`, {
              cancelToken: source.token,
            });
            setCodiacs(response.data);
            setLoading(false);
          } catch (error) {
            if (axios.isCancel(error)) {
              console.log('Request canceled', error.message);
            } else {
              console.log(error);
            }
            setLoading(false);
          }
        };
        getAllCodiacs();
    
        return () => {
          if (source) {
            source.cancel('Component unmounted');
          }
        };
      }, [``]);
    
      useEffect(() => { 
        const getAllCodiacsUsers = async () => {
          setLoading(true);   
          try {
            const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/users`, {
              headers: {
                Authorization: `Bearer ${loginToken}`,
              },
            });
            setCodiacsUsers(response.data);
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        };
        getAllCodiacsUsers();
      }, [loginToken]);
      const arrayLength = codiacsUsers.length;
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <NewCodian />
              {/* where to put the codiac data */}
              <CodiacData />
              <BarListUsageExample />
            </div>
            
          </div>
          <div>
            
          </div>
        </main>
  )
}

export default Main