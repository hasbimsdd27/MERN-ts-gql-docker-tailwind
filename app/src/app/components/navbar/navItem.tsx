import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

export default function NavItem() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${SCREENS.sm})`,
  });

  const NavItem = [
    { menu: "Home", link: "/#" },
    { menu: "Cars", link: "/#" },
    { menu: "Services", link: "/#" },
    { menu: "Contact Us", link: "/#" },
  ];

  if (isMobile) {
    return (
      <Menu styles={menuStyles} right>
        <ul className="flex list-none">
          {NavItem.map((item, index) => (
            <li
              className="text-xl md:text-base text-black font-medium mr-1 md:mr-5 cursor-pointer transition duration-300 ease-in-out hover:text-gray-700 mb-3 text-white focus:text-white"
              key={index}
            >
              <a href={item.link}>{item.menu}</a>
            </li>
          ))}
        </ul>
      </Menu>
    );
  }

  return (
    <ul className="flex list-none">
      {NavItem.map((item, index) => (
        <li
          className="text-xs md:text-base text-black font-medium mr-1 md:mr-5 cursor-pointer transition duration-300 ease-in-out hover:text-gray-700"
          key={index}
        >
          <a href={item.link}>{item.menu}</a>
        </li>
      ))}
    </ul>
  );
}
