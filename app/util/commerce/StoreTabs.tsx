'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Package2 } from "lucide-react";

const StoreTabs = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  useEffect(() => {
    const tab = searchParams.get('storetab') || "dashboard";
    setActiveTab(tab);
  }, [searchParams]);

  const getClassNames = (tab: string) =>
    tab === activeTab
      ? "text-foreground font-semibold transition-colors hover:text-foreground"
      : "text-muted-foreground transition-colors hover:text-foreground";

  return (
    <nav className="flex gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link href="?storetab=dashboard" className="flex items-center gap-2">
        <Package2 className="h-6 w-6" />
      </Link>
      <Link href="?storetab=dashboard" className={getClassNames("dashboard")}>
        Dashboard
      </Link>
      <Link href="?storetab=orders" className={getClassNames("orders")}>
        Orders
      </Link>
      <Link href="?storetab=products" className={getClassNames("products")}>
        Products
      </Link>
      <Link href="?storetab=customers" className={getClassNames("customers")}>
        Customers
      </Link>
      <Link href="?storetab=settings" className={getClassNames("settings")}>
        Settings
      </Link>
    </nav>
  );
};

export default StoreTabs;
