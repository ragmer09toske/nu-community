"use client";
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Volunteer } from "@/app/Types";

const HrViews = () => {
  const [volunteerData, setVolunteerData] = useState<Volunteer[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllVolunteerData = async () => {
      try {
        setLoading(true);
        // Fetch data from the API
        const response = await axios.get(
          "https://nu-serverless-api.netlify.app/.netlify/functions/api/sebabatso"
        );

        // Log the entire response to inspect structure if needed
        console.log("Full API Response:", response);

        // Set the volunteer data from the response (correcting the data structure)
        setVolunteerData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch volunteer data");
        setLoading(false);
      }
    };

    fetchAllVolunteerData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volunteer Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <span className="flex">
                  {volunteerData?.length}
                  <p className="text-xs text-muted-foreground mt-3">volunteers</p>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="grid gap-2">
                <CardTitle>Volunteer List</CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <ScrollArea className="h-[500px] w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Names</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Designation</TableHead>
                      <TableHead>Avatar</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {volunteerData && volunteerData.length > 0 ? (
                      volunteerData.map((volunteer) => (
                        <TableRow key={volunteer.email}>
                          <TableCell>{volunteer.names || "N/A"}</TableCell>
                          <TableCell>{volunteer.email || "N/A"}</TableCell>
                          <TableCell>{volunteer.department || "N/A"}</TableCell>
                          <TableCell>{volunteer.phone || "N/A"}</TableCell>
                          <TableCell>{volunteer.designition || "N/A"}</TableCell>
                          <TableCell>
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={volunteer.avatar} alt="User Avatar" />
                              <AvatarFallback>
                                {volunteer.names ? volunteer.names.charAt(0) : "U"}
                              </AvatarFallback>
                            </Avatar>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6}>No volunteer data available</TableCell>
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

export default HrViews;
