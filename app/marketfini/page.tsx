"use client"
import Image from "next/image"
import Link from "next/link"
import axios, { CancelTokenSource } from 'axios'
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import useStore from "@/app/Store"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TopMenuBar } from "./TopMenuBar"
import Main from "./Main"
import Workspace from "../workspace/page"
import { MenuContext } from "../webinar/AppContex"
import { useEffect, useState } from "react"
import HumanResource from "./HumanResource"
import Programs from "./Programs"
import Analytics from "./Analytics"
import Org from "./Org"


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
const Dashboard = () => {
  const [view, setView] = useState<string>("dash")
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
  return (
    <MenuContext.Provider value={{
      view, setView,
      loading, setLoading,
      codiacs, setCodiacs,
      codiacsUsers, setCodiacsUsers
    }}>
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
                  <Home onClick={()=>{setView("dash")}} className="h-5 w-5" />
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
                  <Package onClick={()=>{setView("Programs")}} className="h-5 w-5" />
                  <span className="sr-only">Programs</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Programs</TooltipContent>
            </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 onClick={()=>{setView("HumanResource")}} className="h-5 w-5" />
                  <span className="sr-only">Human Resouce</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Human Resource</TooltipContent>
            </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    >
                        <LineChart onClick={()=>{setView("Analytics")}} className="h-5 w-5" />
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
            <Org />
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
          {view === "dash" && <Main />}
          {view == "Workspace" && <Workspace />}
          {view == "HumanResource" && <HumanResource />}
          {view == "Programs" && <Programs />}
          {view == "Analytics" && <Analytics />}
        </div>
      </div>
    </MenuContext.Provider>
  )
}
export default Dashboard