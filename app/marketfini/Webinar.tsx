import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TabsContent } from '@/components/ui/tabs';
import { Badge } from '@tremor/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


interface Webinarpeople {
    _id: string; // Represents the unique identifier of the object
    firstname: string;
    lastname: string;
    number: number;
    email: string;
    about: string;
    jobStatus: string;
    githubValue:  number;
    reactValue:  number;
    htmlValue:  number;
    FacebookProfile:  number;
    LinkInProfile:  number;
    __v: number; // Represents the version key in MongoDB
}
  
const WebinarData = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [webinarpeople, setWebinarpeople] = useState<Webinarpeople[]>([]);

    useEffect(() => { 
        const getAllCodiacsUsers = async () => {
          setLoading(true);   
          try {
            const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/webinar/registerers`);
            setWebinarpeople(response.data);
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        };
        getAllCodiacsUsers();
    }, []);

  return (
    <TabsContent value="Webinar">
        <Card x-chunk="dashboard-05-chunk-3">
            <CardHeader className="px-7">
            <CardTitle>Webinar people</CardTitle>
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
                    JobStatus
                    </TableHead>
                    <TableHead className="hidden sm:table-cell">
                    github Rate
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                    React Hub
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                        HTML + CSS Rate
                    </TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                    {webinarpeople.map((codiacs, index) => (
                    <TableRow className="bg-accent" key={index}>
                        <TableCell>
                            <div className="font-medium">{codiacs.firstname}</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                            {codiacs.email}
                            </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            {codiacs.jobStatus}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                            <Badge className="text-sm">
                                {codiacs.githubValue}%
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                            <Badge className="text-sm">
                                {codiacs.reactValue}%
                            </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                            <Badge className="text-sm">
                                {codiacs.htmlValue}%
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
  )
}

export default WebinarData;