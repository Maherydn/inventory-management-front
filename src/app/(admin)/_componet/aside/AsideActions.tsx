'use client';

import React from "react";
// import { useRouter } from "next/navigation";
import AsideNavItem from "./AsideNavItem";
import { LogoutIcon, SettingsIcon } from "@/app/_assets/icon";

const AsideActions = () => {
  // const router = useRouter();

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <ul className="space-y-4">
      <AsideNavItem
        label="settings"
        icon={<SettingsIcon />} 
        onClick={() => {
          console.log("settings");
        //   router.push("/settings");
        }}
      />
      <AsideNavItem
        label="logout"
        icon={<LogoutIcon />} 
        onClick={handleLogout}
      />
    </ul>
  );
};

export default AsideActions;
