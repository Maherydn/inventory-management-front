import React from "react";
import SearchBar from "./SearchBar";
import UserInfoBar from "./UserInfoBar";

const Header = () => {
  return (
    <header className="h-14 bg-white px-10 flex justify-between items-center shadow-sm">
      <SearchBar/>
      <UserInfoBar/>
    </header>
  );
};

export default Header;
