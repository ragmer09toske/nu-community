"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { LoginDialog } from './login';
import { cn } from '@/lib/utils';
import { HoveredLink, Menu, MenuItem, ProductItem } from './navbar-menu';

interface User {
    _id: string;
    name: string;
    number: number;
    email: string;
    password: string;
    __v: number;
  }
export default function Navbar() {
    const [state, setState] = useState(false)
    const [isOpen, setIsOpen] = React.useState(false);
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


    let className:any;
    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target as HTMLElement | null;
            if (target && !target.closest(".menu-btn")) setState(false);
        };
    }, [])

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="/">
                <Image
                    src="/nu.png"
                    width={40}
                    height={10}
                    alt="Float UI logo"
                />
            </a>
        </div>
    )

  return (
    <nav className={`pb-5 z-[9999] pt-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <Brand />
        <div className={`flex-1 items-center text-gray-500 mt-16 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
            <div
                className={cn(" top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
            >
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Nudevs Academy">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Codiac">
                        <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Pricing"
                            href="/pricing"
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
                    <MenuItem setActive={setActive} active={active} item="Creative Cloud">
                        <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">{user?.name}</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </div>
        </div>
        <div className="z-50 items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
            <div className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex' onClick={() => setIsOpen(false)}>
                <LoginDialog />
            </div>
        </div>
    </div>
</nav>
  )
}
