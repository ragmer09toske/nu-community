"use client"
import { Button, Dialog, DialogPanel } from '@tremor/react';

import React from 'react'
import { useEffect, useState } from 'react'
import { LoginDialog } from './login';

export default function Navbar_Codiac() {
    const [state, setState] = useState(false)
    const [isOpen, setIsOpen] = React.useState(false);
    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "", path: "/codiac" },
        { title: "", path: "javascript:void(0)" },
        { title: "", path: "javascript:void(0)" },
        // { title: "Pricing", path: "javascript:void(0)" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target as HTMLElement | null;
            if (target && !target.closest(".menu-btn")) setState(false);
        };
    }, [])

    const Brand = () => (
        <>
        
        <div className="flex items-center z-50 justify-between py-5 md:block " >
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
        </>
    )

  return (
    <nav className={`pb-5 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-11 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}   >
        <div className="gap-x-14 items-center z-50 max-w-screen-xl mx-auto px-4 md:flex md:px-8" style={{zIndex: 9999}}>
            <Brand />
            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                    {
                        navigation.map((item, idx) => {
                            return (
                                <li key={idx} className="text-gray-700 hover:text-gray-900">
                                    <a href={item.path} className="block text-lg text-white">
                                        {item.title}
                                    </a>
                                </li> 
                            )
                        })
                    }
                </ul>
                <div className="z-50 items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                   
                    <div className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex' onClick={() => setIsOpen(false)}>
                        <LoginDialog />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
