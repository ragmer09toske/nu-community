import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import WebinarData from "./Webinar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { File, ListFilter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@tremor/react'
import useStore from "@/app/Store"
import axios, { CancelTokenSource } from 'axios'
import NewCodian from './NewCodian'
import NewStore from './commerce/NewStore'
import { nu_api_base_url } from '../Contants'

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
  
const HumanResource = () => {
const [loading, setLoading] = useState<boolean>(false);
const [codiacs, setCodiacs] = useState<Codiac[]>([]);
const [codiacsUsers, setCodiacsUsers] = useState<CodiacUsers[]>([]);
const loginToken = useStore((state) => state.loginToken)

useEffect(() => { 
    let source: CancelTokenSource;
    const getAllCodiacs = async () => {
      setLoading(true);   
      try {
        source = axios.CancelToken.source();
        const response = await axios.get(`${nu_api_base_url}/registerers`, {
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
        const response = await axios.get(`${nu_api_base_url}/codiac/users`, {
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

  return (
    <div className='px-5 w-[50%]'>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 pb-10'>
        {/* <NewCodian /> */}
        {/* <NewStore /> */}
      </div>
        <Tabs defaultValue="week">
            <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="Codians">Codiac Users</TabsTrigger>
              <TabsTrigger value="Webinar">Webinar</TabsTrigger>
              <TabsTrigger value="teams">Codiac Participants</TabsTrigger>
              <TabsTrigger value="year">In-house-team</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                variant="outline"
                size="sm"
                className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Pay
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Declined
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Refunded
                  </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
              </DropdownMenu>
              <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1 text-sm"
              >
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
            </div>

            <TabsContent value="Codians">
            <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                <CardTitle>Codians</CardTitle>
                <CardDescription>
                    Insentivice for this people
                </CardDescription>
                </CardHeader>
                <div className="pr-5">
                <ScrollArea className="h-[620px]">
                <CardContent>
                    <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden sm:table-cell">
                            Type
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                            Status
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                            Numbers
                        </TableHead>
                        <TableHead className="text-right">For</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {codiacsUsers.map((codiacs, index) => (
                            <TableRow className="bg-accent" key={index}>
                                <TableCell>
                                <div className="font-medium">{codiacs.name}</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    {codiacs.email}
                                </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                Sale
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs">
                                    Fulfilled
                                </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                {codiacs.number}
                                </TableCell>
                                <TableCell className="text-right">{codiacs.acount}</TableCell>
                            </TableRow>
                        ))}
                        {/* Make this into a map => get the data from, our Codiac table */}
                    </TableBody>
                    </Table>
                </CardContent>
                </ScrollArea>
                </div>
            </Card>
            </TabsContent>

            <TabsContent value="teams">
            <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                <CardTitle>Teams</CardTitle>
                <CardDescription>
                    Insentivice for this people
                </CardDescription>
                </CardHeader>
                <div className="pr-5">
                <ScrollArea className="h-[420px]">
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden sm:table-cell">
                         Numbers
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                        Email
                        </TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {codiacs.map((codiacs, index) => (
                        <TableRow className="bg-accent" key={index}>
                            <TableCell>
                                <div className="font-medium">{codiacs.firstname + " " + codiacs.lastname}</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                {codiacs.email}
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                {codiacs.number}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs">
                                {codiacs.email}
                                </Badge>
                            </TableCell>
                        </TableRow>
                        ))}
                    {/* Make this into a map => get the data from, our Codiac table */}
                    </TableBody>
                </Table>
                </CardContent>
                </ScrollArea>
                </div>
            </Card>
            </TabsContent>
            {/* The webiner Data */}
            <WebinarData />
        </Tabs>
    </div>
  )
}

export default HumanResource