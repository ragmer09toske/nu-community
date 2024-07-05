"use client"

import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Dialog, DialogPanel } from '@tremor/react';

export default function Navbar_Data_Repo() {
    const [state, setState] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isOpen, setIsOpen] = React.useState(false);
  
    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Codiac", path: "/codiac" },
        { title: "Market-Fini", path: "javascript:void(0)" },
        { title: "Algo-Finance", path: "javascript:void(0)" },
        // { title: "Pricing", path: "javascript:void(0)" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target as HTMLElement | null;
            if (target && !target.closest(".menu-btn")) setState(false);
        };
    }, [])

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            
            <a href="javascript:void(0)">
                <img
                    src="/nu.png"
                    width={40}
                    height={10}
                    alt="Float UI logo"
                />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )

  return (
    <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
<div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
    <Brand />
    <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
        <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {
                navigation.map((item, idx) => {
                    return (
                        <li key={idx} className="text-gray-700 hover:text-gray-900">
                            <Link href={item.path} className="block">
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
        <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
            <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
                    <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Your account has been created successfully. You can now login to your
                    account. For more information, please contact us.
                    </p>
                    <Button className="mt-8 w-full flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex" onClick={() => setIsOpen(false)}>
                        Sign in
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </Button>
                </DialogPanel>
            </Dialog>
        </div>
    </div>
</div>
</nav>
  )
}
