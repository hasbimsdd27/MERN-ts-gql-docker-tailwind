import React from "react";
import Logo from "../logo";
import NavItem from "./navItem";

const NavBar: React.FC = () => {
  return (
    <div className="w-full max-w-screen-2xl min-h-16 flex flex-row items-center lg:px-12 justify-between">
      <div>
        <Logo />
      </div>
      <NavItem />
    </div>
  );
};

export default NavBar;
