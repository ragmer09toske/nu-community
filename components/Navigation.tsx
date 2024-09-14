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
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { RiOrganizationChart } from "@remixicon/react";
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
  // const setUserDetails = useStore((state) => state.setUser)
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

  const placeholders = [
    "Jump to ...",
    ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

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

        // setUserDetails(response.data)

        setLoading(false)
      } catch (error) {
        console.log('Error:', error);
        setLoading(false)
      }
    };
    getUser()
  }, [loginToken, setLoginToken, userID])

  return (
    <div className="flex p-2 pr-5 items-center w-full pt-5 lg:gap-10" style={{
      backdropFilter: "blur(5px)",
      zIndex: 999,
    }}>
      <div className="flex  items-center w-full  lg:gap-10" >
        {isDesktop && 
        <div className="relative pl-5 flex flex-row justify-around w-full">
          <div className="absolute left-10">
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
          <div className="absolute right-0"> 
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
          </div>
        </div>
      }

        {isDesktop ? <NavigationMenu>

        </NavigationMenu>
          :
          (<div className="fixed mt-5">
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex gap-5 pl-5">
                {/* <GripHorizontal /> */}
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
            </SheetTrigger>
            <div className="p-3 absolute -top-3 left-12">
              <GripHorizontal /> 
            </div>
            <SheetContent className="" style={{ zIndex: 9999 }}>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
              <Command className="rounded-lg p-5  shadow-md">
                <CommandList>
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
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <Link href={'/codiac-test'}>
                        <span>Nu-Codiac</span>
                      </Link>
                    </CommandItem>
                    <CommandItem>
                      <RiOrganizationChart className="mr-2 h-4 w-4" />
                      <Link href={"/pricing"}>
                        <span>Nu-devs Academy</span>
                      </Link>
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
              <SheetFooter>
              </SheetFooter>
            </SheetContent>
          </Sheet></div>)
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
