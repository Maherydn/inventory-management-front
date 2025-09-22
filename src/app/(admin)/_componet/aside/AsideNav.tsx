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

const AsideNav = () => {
  const router = useRouter();
  const pathNameCurrent = usePathname();
  

  const navItems = [
    { label: "dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { label: "inventory", icon: <InvetoryIcon />, path: "/inventory" },
    { label: "reports", icon: <ReportsIcon />, path: "/reports" },
    { label: "suppliers", icon: <SuppliersIcon />, path: "/suppliers" },
    { label: "orders", icon: <OrdersIcon />, path: "/orders" },
    { label: "manage store", icon: <ManageStoreIcon />, path: "/manage-store" },
  ];

  return (
    <ul className="space-y-4 text-nowrap">
      {navItems.map((item) => (
        <AsideNavItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          isActive={pathNameCurrent === item.path}
          onClick={() => {
            // setActiveItem(item.label); 
            router.push(item.path); 
          }}
        />
      ))}
    </ul>
  );
};

export default AsideNav;
