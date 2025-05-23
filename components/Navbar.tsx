"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LoginDialog } from "./login";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import useStore from "@/app/Store";

interface User {
  _id: string;
  name: string;
  number: number;
  email: string;
  password: string;
  __v: number;
}
export default function Navbar() {
  const [state, setState] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = useState<string | null>(null);
  // Use the useState hook with the User type
  const [user, setUser] = useState<User | null>(null);
  const UserDetails = useStore((state) => state.user);

  useEffect(() => {
    // Retrieve the JSON string from localStorage
    const userString = localStorage.getItem("user");

    if (userString) {
      // Parse the JSON string to get the original object and set it as the user
      const user: User = JSON.parse(userString);
      setUser(user);
    }
  }, []);

  let className: any;
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block z-[9999]">
      <a href="/">
        <Image src="/nu.png" width={30} height={10} alt="Float UI logo" />
      </a>
    </div>
  );

  return (
    <nav
      className={`pb-5 z-[9999] md:text-sm ${
        state
          ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl  mx-auto px-4 md:flex md:px-8 overflow-hidden">
        <div
          className={`flex-1 items-center text-white md:flex md:items-center md:gap-6 ${
            state ? "block mt-4 md:mt-0" : "hidden md:flex"
          }`}
        >
          <Brand />
          <div className={cn("relative z-50", className)}>
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/ticket-hub">Ticket-hub</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Pricing"
                    href="/pricing"
                    src="/talent/Pricing.png"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Nucleus Talent Cloud"
                    href="/talent"
                    src="/talent/Cloud.png"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="For Developers"
                    href="#"
                    src="/talent/Rayishper.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Our DevOps"
                    href="https://userogue.com"
                    src="/talent/Workspace.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Creative Cloud"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/portfolio">
                    Nucleusdevs Portfolio
                  </HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="z-50 items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
          {!UserDetails ? (
            <div
              className="flex items-center justify-center gap-x-1 py-2 px-4 md:inline-flex"
              onClick={() => setIsOpen(false)}
            >
              <LoginDialog />
            </div>
          ) : (
            <LoginDialog />
          )}
        </div>
        <div className="absolute left-0  border-b border-dashed w-[100%] mt-16 "></div>
        <div className="absolute left-[15%] border-l border-dashed h-[210%] hidden xl:block [@media(max-width:1770px)]:hidden"></div>
        <div className="absolute right-[15%] border-l border-dashed h-[210%] hidden xl:block [@media(max-width:1770px)]:hidden"></div>
      </div>
    </nav>
  );
}
