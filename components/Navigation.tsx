"use client"

import * as React from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./Mode"
import Image from "next/image"
import { useToast } from "./ui/use-toast"
import { useTheme } from "next-themes"
import { VissionModel } from "./Mission"
import { Switch } from "./ui/switch"
import useStore from "@/app/Store"
import useDeviceType from "@/app/Device"

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

export function Navigation() {
  const { toast } = useToast()
  const { theme,setTheme } = useTheme()
  console.log("current theme is:",theme)
  const setContent = useStore((state) => state.setContent);
  const isDesktop: boolean = useDeviceType();

  return (
    <div className="flex p-2 pl-5 items-center lg:w-full  lg:gap-10" style={{
      backdropFilter: "blur(5px)",
      zIndex: 999,
  }}>
   {isDesktop && <div>
      <Image
          src="/one.png"
          alt="Nucleus Logo"
          className="relative lg:dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          width={120}
          height={24}
          priority
          onClick={()=>setContent("Landing")}
      />
    </div>}
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent  font-medium" style={{color: "gray"}}>Service</NavigationMenuTrigger>
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
          <NavigationMenuTrigger className="bg-inherit" style={{color: "gray"}}>About</NavigationMenuTrigger>
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
          <NavigationMenuTrigger className="bg-inherit" style={{color: "gray"}}>Site Preference</NavigationMenuTrigger>
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
