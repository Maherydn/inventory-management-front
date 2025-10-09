import { NotificationIcon } from "@/app/_assets/icon";
import { User } from "lucide-react";
import React from "react";

const UserInfoBar = () => {
  return (
    <div className="w-24 h-8 flex justify-around items-center">
      <div className="size-4 text-gray-500">
        <NotificationIcon />
      </div>
      <div className="size-7 rounded-full ">
        {/* <img src="" alt="" /> */}
        <User className="size-full text-black/70"/>
      </div>
    </div>
  );
};

export default UserInfoBar;
