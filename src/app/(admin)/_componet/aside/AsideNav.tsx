'use client';

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import AsideNavItem from "./AsideNavItem";
import {
  DashboardIcon,
  InvetoryIcon,
  ManageStoreIcon,
  OrdersIcon,
  ReportsIcon,
  SuppliersIcon,
} from "@/app/_assets/icon";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const AsideNav: React.FC = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const navItems: NavItem[] = [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { label: "Inventory", icon: <InvetoryIcon />, path: "/inventory" },
    { label: "Reports", icon: <ReportsIcon />, path: "/reports" },
    { label: "Suppliers", icon: <SuppliersIcon />, path: "/suppliers" },
    { label: "Orders", icon: <OrdersIcon />, path: "/orders" },
    { label: "Manage Store", icon: <ManageStoreIcon />, path: "/manage-store" },
  ];

  return (
    <ul className="space-y-4 text-nowrap w-full">
      {navItems.map((item) => (
        <AsideNavItem
          key={item.path}
          label={item.label}
          icon={item.icon}
          isActive={currentPath.startsWith(item.path)}
          onClick={() => router.push(item.path)}
        />
      ))}
    </ul>
  );
};

export default AsideNav;
