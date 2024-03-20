"use client"

import * as React from "react"
import { Book, Calculator, Calendar, Check, ChevronsUpDown, CreditCard, GripHorizontal, Home, Loader2, Moon, Settings, Smile, Sun, User } from "lucide-react"
import { cn } from "@/lib/utils"
import axios from 'axios';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { useToast } from "./ui/use-toast"
import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"
import useStore from "@/app/Store"
import useDeviceType from "@/app/Device"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./ui/command";
import Link from "next/link";


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
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import MenuList from "./MenuQoute";


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const about: { title: string; href: string; description: string }[] = [
  {
    title: "Our Physical Address",
    href: "",
    description:
      "Constitution Road, Maseru West, Maseru Lesotho, Leap Office 1",
  },
  {
    title: "Mission",
    href: "/docs/primitives/hover-card",
    description:
      "Empower businesses with innovative tech solutions. Specializing in web & mobile app development, phone repair. We build lasting relationships through high-quality solutions & trusted partnerships.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
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

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function Navigation  (){
  const { toast } = useToast()
  const { theme,setTheme } = useTheme()
  console.log("current theme is:",theme)
  const setContent = useStore((state) => state.setContent);
  const isDesktop: boolean = useDeviceType();
  const [loginRegister, setLoginRegister] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [loading, setLoading] = React.useState<boolean>(false)
  const [qoutaionON,setQoutaionON] = React.useState<boolean>(false)

  // Auth variables, From Zustand Store
  const setLoginToken = useStore((state)=> state.setLoginToken )
  const loginToken = useStore((state)=> state.loginToken )
  const setUserDetails = useStore((state)=> state.setUser )
  const userDetails = useStore((state)=> state.user )
  const userID = useStore((state)=> state.userID )
  const setUserID = useStore((state)=> state.setUserID )

  // Registration Variables
  const [Register_name,setRegister_name]= React.useState<string>('')
  const [Register_email,setRegister_email] = React.useState<string>('')
  const [Register_number,setRegister_number]=React.useState<string>('')
  const [Register_password,setRegister_password] = React.useState<string>('')

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

  React.useEffect(()=>{
    const getUser = async () => {
      try {
        setLoading(true)
        const config = { 
          headers: {
            Authorization: `Bearer ${loginToken}`
          }
        };
        const response = await axios.get<ApiResponse>(
          `https://nucleus-community-55ff7e3e4dd0.herokuapp.com/workspace/users/${userID}`,config
        );
  
        setUserDetails(response.data)
  
        setLoading(false)
      } catch (error) {
        console.log('Error:', error);
        setLoading(false)
      }
    };
    getUser()
  },[loginToken, setLoginToken, setUserDetails, userID])

  return (
    <div  className="flex p-2 pr-5 items-center w-full  lg:gap-10" style={{
      backdropFilter: "blur(5px)",
      zIndex: 999,
    }}>
    <div className="flex  items-center w-full  lg:gap-10" >

    {isDesktop && <div className="pl-5">
      <Link href={"/"}>
        <Image
          src="/nu.png"
          alt="Nucleus Logo"
          width={30}
          height={24}
          priority
          onClick={()=>setContent("Landing")}
        />
      </Link>
    </div>}

    {isDesktop ? <NavigationMenu>
        
    </NavigationMenu> 
    :
 
    (<Sheet>
      <SheetTrigger asChild>
        <GripHorizontal />
      </SheetTrigger>
      <SheetContent className="" style={{zIndex:9999}}>
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
                          onClick={()=>setQoutaionON(!qoutaionON)}
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
                        onClick={()=>setQoutaionON(!qoutaionON)}
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
    {!loginRegister ? <Dialog>
      <DialogTrigger asChild>
        {!loginToken ? <Button variant="outline">Login</Button>
        :
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>}
      </DialogTrigger>
      {!loginToken ? (<DialogContent className="max-w-[325px] rounded-sm lg:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              onChange={(e)=>setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              onChange={(e)=>setPassword(e.target.value)}
              id="username"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant={"outline"} onClick={login}>{!loading ? "submit" : <Loader2 className="animate-spin"/>}</Button>
        </DialogFooter>
      </DialogContent>)
      :
      (<DialogContent className="max-w-[325px] rounded-sm lg:max-w-[425px]">
      <DialogHeader>
        <DialogDescription>
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            {userDetails && userDetails.name}
            <div>
              <p style={{color:"gray", fontSize: 14 }}>Nucleus</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  <Link href={"/workspace"}>
                    {value
                      ? workspaces.find((workspaces) => workspaces.value === value)?.label
                      : "Select workspaces..."}
                  </Link>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search workspace..." />
                <CommandEmpty>No workspaces found.</CommandEmpty>
                <CommandGroup>
                  {workspaces.map((workspaces) => (
                    <CommandItem
                      key={workspaces.value}
                      value={workspaces.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === workspaces.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {workspaces.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            size={"sm"}
            className="w-[200px]"
          >
              <>+ Workspace</>
          </Button>
          {userDetails && userDetails.name ==="Retsepile Shao" &&
          <Link href="/retsepile">
          <Button
            variant="outline"
            size={"sm"}
            className="w-[200px]"
          >
              <>Create A Blog</>
          </Button>
          </Link>
          } 
          
        </div>
      </div>
    </DialogContent>)
      }
    </Dialog>
    :
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[325px] rounded-sm lg:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
              onChange={(e)=>setRegister_name(e.target.value)}
              id="name"
                className="col-span-3"
              />
            </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Work Email
            </Label>
            <Input
              onChange={(e)=>setRegister_email(e.target.value)}
              id="name"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Phone
            </Label>
            <Input
            type="number"
              id="name"
              onChange={(e)=>setRegister_number(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              onChange={(e)=>setRegister_password(e.target.value)}
              id="username"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
        <Button type="submit" variant={"outline"} onClick={register}>{!loading ? "submit" : <Loader2 className="animate-spin"/>}</Button>
        </DialogFooter>
        <div className="w-full flex justify-center cursor-pointer" onClick={()=>setLoginRegister(!loginRegister)}>
         or login
        </div>
      </DialogContent>
    </Dialog>
  }
                  
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
