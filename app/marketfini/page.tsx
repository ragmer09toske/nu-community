"use client"
import Image from "next/image"
import Link from "next/link"
import {
    Badge,
  ChevronLeft,
  ChevronRight,
  Copy,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useEffect, useState } from "react"
import axios, { CancelTokenSource } from 'axios'
import { RiAddFill } from "@remixicon/react"
import CodiacData from "./codiacData"
import NewCodian from "./NewCodian"
import { ScrollArea } from "@/components/ui/scroll-area"
import useStore from "@/app/Store"
import WebinarData from "./Webinar"
import { BarListUsageExample } from "./Tech"
import { TopMenuBar } from "./TopMenuBar"
import HomePage  from "./strapi"
import DataDisplay from "./strapi"

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
  __v: number; // Represents the version key in MongoDB
}
const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [codiacs, setCodiacs] = useState<Codiac[]>([]);
  const [codiacsUsers, setCodiacsUsers] = useState<CodiacUsers[]>([]);
  const date = new Date()
  const loginToken = useStore((state) => state.loginToken)

  useEffect(() => { 
    let source: CancelTokenSource;

    const getAllCodiacs = async () => {
      setLoading(true);   
      try {
        source = axios.CancelToken.source();
        const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/registerers`, {
          cancelToken: source.token
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
        const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/users`, {
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
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Image 
              src="/nu.png"
              width={40}
              height={10}
              alt="Float UI logo"
            />
            <span className="sr-only">Nucleus Devs</span>
          </Link>
          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Orders</TooltipContent>
          </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                  <Link
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                      <LineChart className="h-5 w-5" />
                      <span className="sr-only">Analytics</span>
                  </Link>
                </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
        </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Nucleus Devs</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Users2 className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <TopMenuBar />
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image 
                  src="/me2.png"
                  width={40}
                  height={10}
                  alt="Float UI logo"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <NewCodian />
              {/* where to put the codiac data */}
              <CodiacData />
              <BarListUsageExample />
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
                  <ScrollArea className="h-[420px]">
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
                              Date
                            </TableHead>
                            <TableHead className="text-right">Amount</TableHead>
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
                                    2023-06-23
                                  </TableCell>
                                  <TableCell className="text-right">$250.00</TableCell>
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
                            Type
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Status
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Date
                          </TableHead>
                          <TableHead className="text-right">Amount</TableHead>
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
                                  Sale
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                  <Badge className="text-xs">
                                    Fulfilled
                                  </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  2023-06-23
                                </TableCell>
                                <TableCell className="text-right">$250.00</TableCell>
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
          <div>
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Programs
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Copy className="h-3 w-3" />
                      <span className="sr-only">Copy Order ID</span>
                    </Button>
                  </CardTitle>
                  <CardDescription>Date: {date.toDateString()}</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <RiAddFill className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Add Branch
                    </span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Trash</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="pt-5 flex flex-col gap-3">
                {/* The Company profile */}
                <Card className="grid gap-3 p-5">
                  <div className="">
                    <p className="font-semibold">Business Development</p>
                    <CardDescription>This is the Nucleus branch that works with Software-Engineering</CardDescription>
                  </div>
                </Card>
                <Card className="grid gap-3 p-5 ">
                  <p className="font-semibold">Codiac</p>
                  <CardDescription>People development program, we train people to find the best skills possible</CardDescription>
                </Card>
                <Card className="grid gap-3 p-5">
                  <p className="font-semibold">Sales</p>
                  <CardDescription>Take our products out to people</CardDescription>
                </Card>
                <Card className="grid gap-3 p-5">
                  <p className="font-semibold">Issues</p>
                  <CardDescription>Take our products out to people</CardDescription>
                </Card>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">{date.getFullYear()}</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
              <DataDisplay/>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
export default Dashboard