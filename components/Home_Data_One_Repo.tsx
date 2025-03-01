"use client"

import { Spotlight } from "./Spotlight"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu"
import Music from "./Music"
import { HomeText } from "./HomeText"
import { useTheme } from "next-themes"
import { Team } from "./Footer"
import { Resizable } from "./home/Grid"
import { HyperTextDemo } from "./home/HyperText"
import { NuBrainic } from "@/app/learn/Shop/block"
import { ResizableChat } from "./home/ResizeChat"
import { MarqueeDemo } from "./home/Marqueer"
import { AnimatedBeamDemo } from "./home/NuBrainic"
import { LinkPreviewDemo } from "./home/LinkPre"

interface User {
    _id: string;
    name: string;
    number: number;
    email: string;
    password: string;
    __v: number;
  }
export default function Home_Data_One_Repo() {
    const { theme, setTheme } = useTheme()
    useEffect(()=>{
      setTheme("dark")
    },[])
    return (
      <div className="relative isolate px-6 pt-14 lg:px-8 h-full">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-slate-500 to-slate-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="fixed bottom-32 z-[9999]">
            {/* <AnimatedGridPattern /> */}
          </div>
          <div className='relative'>
              <section>
                  <div className="flex justify-center p-5">
                    <HyperTextDemo />
                  </div>
                  <div className="max-w-screen-xl mx-auto px-4 gap-5 text-gray-600 overflow-hidden md:px-8 md:flex">
                      <div className='flex-none max-w-xl'>
                        <Resizable />
                      </div>
                  </div>
                  <div className="p-5 pl-52 flex gap-5">
                    {/* <MarqueeDemo /> */}
                    {/* <AnimatedBeamDemo /> */}
                  </div>
                  <LinkPreviewDemo />
                  <Team />
              </section>
          </div>
      </div>
    )
}
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
      // Use the useState hook with the User type
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Retrieve the JSON string from localStorage
    const userString = localStorage.getItem("user");
  
    if (userString) {
      // Parse the JSON string to get the original object and set it as the user
      const user: User = JSON.parse(userString);
      setUser(user);
    }
  }, []); 
  
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">{user?.name}</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    );
  }