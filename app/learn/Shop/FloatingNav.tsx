"use client"
import React, { useContext } from "react";
import { IconHome } from "@tabler/icons-react";
import { FloatingDock } from "@/components/floating-dock";
import { LogIn, } from "lucide-react";
import { CartContext } from "../StoreContext";
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export function FloatingDockMobile() {
  const {cartOpen, setCartOpen} = useContext(CartContext)

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/learn",
    },
    {
      title: "Cart",
      icon: (
        <ShoppingBagIcon
          aria-hidden="true"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          onClick={()=>setCartOpen(true)}
        />
      ),
    },
    {
      title: "Cart",
      icon: (
        <MagnifyingGlassIcon aria-hidden="true" className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Components",
      icon: (
        <LogIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
