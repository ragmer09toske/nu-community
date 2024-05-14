"use client"

import * as React from "react"
import { Book, Calculator, Calendar, CalendarDays, Check, ChevronsUpDown, CreditCard, GripHorizontal, Home, Loader2, LogOut, Moon, MoonIcon, Settings, Smile, Sun, SunIcon, User } from "lucide-react"
import { cn } from "@/lib/utils"
import axios from 'axios';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
 

import useStore from "@/app/Store"
import useDeviceType from "@/app/Device"
import { Button } from "./ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command";
import Link from "next/link";
import { useTheme } from "next-themes"
import { signOut, useSession } from 'next-auth/react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import MenuList from "./MenuQoute";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface ApiResponse {
  _id: string;
  name: string;
  number: number;
  email: string;
  password: string;
  role: string;
  organization: string;
  avatar: string;
  __v: number;
}
interface User {
  token: string;
  userID: string;
}

const workspaces = [
  {
    value: "V-mol",
    label: "V-mol",
  },
  {
    value: "Media-Lab",
    label: "Media-Lab",
  },
  {
    value: "Nala",
    label: "Nala",
  },
  {
    value: "Credit-Broker",
    label: "Credit-Broker",
  }
]

export function Navigation() {
  const session = useSession();
  const { theme, setTheme } = useTheme()
  console.log("current theme is:", theme)
  const setContent = useStore((state) => state.setContent);
  const isDesktop: boolean = useDeviceType();
  const [loginRegister, setLoginRegister] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(false)
  const [qoutaionON, setQoutaionON] = React.useState<boolean>(false)
  // Auth variables, From Zustand Store
  const setLoginToken = useStore((state) => state.setLoginToken)
  const loginToken = useStore((state) => state.loginToken)
  const setUserDetails = useStore((state) => state.setUser)
  const userDetails = useStore((state) => state.user)
  const userID = useStore((state) => state.userID)
  const setUserID = useStore((state) => state.setUserID)

  // Registration Variables
  const [Register_name, setRegister_name] = React.useState<string>('')
  const [Register_email, setRegister_email] = React.useState<string>('')
  const [Register_number, setRegister_number] = React.useState<string>('')
  const [Register_password, setRegister_password] = React.useState<string>('')

  // Create a workspaces
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  // Drawer bar
  const [goal, setGoal] = React.useState(350)
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }



  const login = async () => {
    try {
      setLoading(true)
      const response = await axios.post<User>(
        'https://nucleus-community-55ff7e3e4dd0.herokuapp.com/workspace/auth/login',
        {
          email: email,
          password: password,
        }
      );

      setLoginToken(response.data.token)
      setUserID(response.data.userID)

      setLoading(false)
    } catch (error) {
      console.log('Error:', error);
      setLoading(false)
    }
  };

  const register = async () => {
    try {
      setLoading(true)
      const response = await axios.post(
        'https://nucleus-community-55ff7e3e4dd0.herokuapp.com/workspace/auth/register',
        {
          name: Register_name,
          number: Register_number,
          email: Register_email,
          password: Register_password
        }
      );

      console.log(response.data)

      setLoading(false)
    } catch (error) {
      console.log('Error:', error);
      setLoading(false)
    }
  };

  React.useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true)
        const config = {
          headers: {
            Authorization: `Bearer ${loginToken}`
          }
        };
        const response = await axios.get<ApiResponse>(
          `https://nucleus-community-55ff7e3e4dd0.herokuapp.com/workspace/users/${userID}`, config
        );

        setUserDetails(response.data)

        setLoading(false)
      } catch (error) {
        console.log('Error:', error);
        setLoading(false)
      }
    };
    getUser()
  }, [loginToken, setLoginToken, setUserDetails, userID])

  return (
    <div className="flex p-2 pr-5 items-center w-full pt-5 lg:gap-10" style={{
      backdropFilter: "blur(5px)",
      zIndex: 999,
    }}>
      <div className="flex  items-center w-full  lg:gap-10" >
        {isDesktop && 
        <div className="pl-5 flex flex-row justify-between w-full">
          <div>
            <Link href={"/"}>
              <Image
                src="/nu.png"
                alt="Nucleus Logo"
                width={30}
                height={24}
                priority
                onClick={() => setContent("Landing")}
              />
            </Link>
          </div>
          { session.data &&
            <div>
            <div >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Avatar>
                    <AvatarImage 
                      src={session?.data?.user?.image || "/fallback-image.jpg"}
                      alt="@shadcn"
                    />
                    <AvatarFallback>
                      {session?.data?.user?.name ? session.data.user.name.substring(0, 2) : "nu"}
                    </AvatarFallback>
                  </Avatar>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src={session?.data?.user?.image || "/fallback-image.jpg"} />
                      <AvatarFallback>{session?.data?.user?.name ? session.data.user.name.substring(0, 2) : "ND"}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{session?.data?.user?.name}</h4>
                      <p className="text-sm">
                        Thank you for being part of the Nucleus community
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground flex gap-2 items-center">
                          <LogOut onClick={() => signOut()} />Logout
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>}
        </div>}

        {isDesktop ? <NavigationMenu>

        </NavigationMenu>
          :
          (<Sheet>
            <SheetTrigger asChild>
              <GripHorizontal />
            </SheetTrigger>
            <SheetContent className="" style={{ zIndex: 9999 }}>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
              <Command className="rounded-lg  shadow-md">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <Link href="/">
                      <CommandItem>
                        <Home className="mr-2 h-4 w-4" />
                        <span>Home</span>
                      </CommandItem>
                    </Link>
                    <Link href="/retsepile">
                      <CommandItem>
                        <Book className="mr-2 h-4 w-4" />
                        <span>Blog</span>
                      </CommandItem>
                    </Link>
                    <CommandItem>
                      <SheetClose asChild>
                        <Button
                          variant="outline"
                          size={"sm"}
                          className="w-[200px]"
                          onClick={() => setQoutaionON(!qoutaionON)}
                        >
                          <>+ Qoutation</>
                        </Button>
                      </SheetClose>
                    </CommandItem>

                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
                <div className="absolute bottom-10" >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2"> 
                    <Button variant="outline" size="icon">
                      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                    <p>{theme}</p>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent style={{zIndex:9999}} align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                </div>
              </Command>

              <Drawer>
                <DrawerTrigger asChild>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Get a qoute</DrawerTitle>
                    <DrawerDescription>Choose what features you want on your site</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">

                  </div>
                  <div className="w-full flex justify-center ">
                    <DrawerFooter className="w-full justify-center">
                      <div className="w-full flex justify-center ">
                        <Button
                          variant="outline"
                          size={"sm"}
                          className="w-[200px]"
                          onClick={() => setQoutaionON(!qoutaionON)}
                        >
                          <>+ Qoutation</>
                        </Button>
                      </div>
                      {qoutaionON && <div className="w-full">
                        <MenuList />
                      </div>}
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
              <SheetFooter>
              </SheetFooter>
            </SheetContent>
          </Sheet>)
        }
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
