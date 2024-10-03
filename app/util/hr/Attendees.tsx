"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FilterIcon } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SebebatsoApplicant } from "@/app/Types";
import { nu_api_base_url } from "@/app/Contants";

const DashboardSAttendees = () => {
  const [ticketData, setTicketData] = useState<SebebatsoApplicant[] | null>(null);
  const [filteredData, setFilteredData] = useState<SebebatsoApplicant[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllTicketData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ tickets: SebebatsoApplicant[] }>(`${nu_api_base_url}/ticketing`);
        setTicketData(response.data.tickets);
        setFilteredData(response.data.tickets); // Set initial filtered data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch ticket data");
        setLoading(false);
      }
    };
    fetchAllTicketData();
  }, []);

  // Filter handler
  const handleFilter = (filter: string) => {
    if (ticketData) {
      if (filter === "all") {
        setFilteredData(ticketData); // Show all data
      } else {
        setFilteredData(ticketData.filter(ticket => ticket.ticket_type === filter)); // Filter based on ticket_type
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex min-h-screen absolute flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sebabatso Conference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <span className="flex">
                  {ticketData?.length}
                  <p className="text-xs text-muted-foreground mt-3">applicants</p>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="grid gap-2">
                <CardTitle>Sebabatso Applicants</CardTitle>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <FilterIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem onClick={() => handleFilter("VIP")}>VIP</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleFilter("GENERAL")}>General</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleFilter("all")}>All</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Issued To</TableHead>
                      <TableHead>Order Number</TableHead>
                      <TableHead>Ticket Type</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Designation</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Avatar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData && filteredData.length > 0 ? (
                      filteredData.map(ticket => (
                        <TableRow key={ticket._id}>
                          <TableCell>{ticket.issued_to || "N/A"}</TableCell>
                          <TableCell>{ticket.order_number || "N/A"}</TableCell>
                          <TableCell>{ticket.ticket_type || "N/A"}</TableCell>
                          <TableCell>{ticket.email || "N/A"}</TableCell>
                          <TableCell>{ticket.organization || "N/A"}</TableCell>
                          <TableCell>{ticket.phone || "N/A"}</TableCell>
                          <TableCell>{ticket.designition || "N/A"}</TableCell>
                          <TableCell>{ticket.date1 || "N/A"}</TableCell>
                          <TableCell>
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={ticket.avatar} alt="User Avatar" />
                              <AvatarFallback>
                                {ticket.issued_to ? ticket.issued_to.charAt(0) : "U"}
                              </AvatarFallback>
                            </Avatar>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={9}>No ticket data available</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardSAttendees;
