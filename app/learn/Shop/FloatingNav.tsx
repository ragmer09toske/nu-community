import React from "react";
import { IconHome } from "@tabler/icons-react";
import { FloatingDock } from "@/components/floating-dock";
import { LogIn } from "lucide-react";

export function FloatingDockMobile() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
