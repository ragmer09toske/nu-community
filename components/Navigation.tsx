"use client"

import * as React from "react"
import { Check, ChevronsUpDown, GripHorizontal, Loader2, Moon, Sun } from "lucide-react"
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
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command";
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
        <Image
          src="/nu.png"
          alt="Nucleus Logo"
          width={30}
          height={24}
          priority
          onClick={()=>setContent("Landing")}
        />
      </div>}

    {isDesktop ? <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent  font-medium" style={{color: "gray"}}><b>Service</b></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div onClick={()=>setContent("Qoatation")}
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none "
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Get A Quotation
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Personalize your UI, receive tailored quotes for your specific needs, and consult with our AI expert for expert opinions.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit" style={{color: "gray"}}><b>About</b></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {about.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-inherit" style={{color: "gray"}}><b>Site Preference</b></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div className="bg-inherit">
                  <div className="flex h-full w-full select-none flex-col justify-end  p-6 no-underline outline-none focus:shadow-md">
                    <div className= "mb-2 flex gap-3 mt-4 text-lg font-medium">
                        <p>Music</p>
                        <Switch />
                    </div>
                    <div  className="mb-2 mt-4 text-lg font-medium">
                      Site Mode
                    </div>
                    <div className="flex gap-5 focus:shadow-md">
                        <Moon onClick={() => setTheme("dark")} />
                        <Sun onClick={() => setTheme("light")} />
                    </div>
                  </div>
                </div>
              </li>
              <div className="flex ">
              <Image
                src="/lu.jpg"
                alt="Nucleus Logo"
                width={70}
                height={24}
                priority
              />
              <ListItem 
                onClick={() => {
                    toast({
                    title: "Currently Listening to: Lu-Srenk",
                    })
                }} 
                title="Lu-srenk"
              >
                Hip-Hop
              </ListItem>
              </div>
              <div className="flex">   
                <Image
                    src="/ric.jpeg"
                    alt="Nucleus Logo"
                    width={70}
                    height={24}
                    priority
                />
                <ListItem 
                  onClick={() => {
                      toast({
                      title: "Currently Listening to: Kozen",
                      })
                  }} 
                  title="Kozen"
                >
                  Hip-Hop
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
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
        <SheetFooter>
          <SheetClose asChild>
          <Drawer>
            <DrawerTrigger asChild>
                <GripHorizontal />
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
          </SheetClose>
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
              // defaultValue="Pedro Duarte"
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
              // defaultValue="@peduarte"
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
        {/* <DialogTitle>Login</DialogTitle> */}
        <DialogDescription>
        </DialogDescription>
      </DialogHeader>
      {/* LOGGED IN USER OPTIONS */}
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
