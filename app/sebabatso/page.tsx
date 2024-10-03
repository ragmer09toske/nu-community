"use client"
import DashboardSAttendees from "../util/hr/Attendees";
import HrViews from "../util/hr/Views";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 
const DashboardSbabi = () => {
  return (
    <div className="p-5">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Event Attendees</TabsTrigger>
          <TabsTrigger value="password">Vonlunteers</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <DashboardSAttendees />
        </TabsContent>
        <TabsContent value="password">
          <HrViews />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardSbabi;


{/* <DashboardSAttendees /> */}
{/*  */}