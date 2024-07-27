"use client";
import Navbar_Codiac from '@/components/CodiacNav'
import { MarketingCard } from '@/components/Marketing-Card'
import { Button } from '@/components/moving-border'
import { ArrowBigRight, Rocket } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useScroll, useTransform } from "framer-motion";
import { cn } from '../utils/cn';
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/navbar-menu';
import { Spotlight } from '@/components/Spotlight';
import { TextGenerateEffect } from '@/components/TextGenerateEffect';

interface User {
  _id: string;
  name: string;
  number: number;
  email: string;
  password: string;
  __v: number;
}

const Page = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const words = `We are not just in IT & Software Engineering; we are craftsmen. Our attention to aesthetics is simple yet stings like bee. Join the community.`;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/K_8AY2Anr-8?autoplay=1&mute=1&loop=1&playlist=K_8AY2Anr-8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/[0.6]">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="absolute top-0 w-full">
            <div>
              <Navbar_Codiac />
            </div>
            <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.6] antialiased bg-grid-white/[0.02] absolute top-0 overflow-hidden">
              <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
              <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-7xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Build<br /> your career with us
                </h1>
                <div className='flex justify-center pl-10 pr-10 items-center'>
                  <TextGenerateEffect words={words} />
                </div>
                <div className='flex justify-center p-5 gap-x-4 sm:text-sm'>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <Link href="/codiac">
                      Talent Cloud <Rocket className="inline" />
                    </Link>
                  </Button>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <Link href="#">
                      Mentorship <ArrowBigRight className="inline" />
                    </Link>
                  </Button>
                </div>
                <MarketingCard />
              </div>
            </div>
            <div className="relative w-full flex items-center justify-center">
              <Navbar className="top-2 z-50" />
            </div>
            <div className='flex justify-center flex-col items-center pt-36'>
              <div className='flex-none space-y-5 max-w-xl'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
export default Page