import React, { useState } from "react";
import ChatIcon from "../icons/chats.svg";
import HomeIcon from "../icons/home.svg";
import RocketIcon from "../icons/rocket.svg";
import DocumentIcon from "../icons/document.svg";
import ProfileIcon from "../icons/profile.svg";
import RetryIcon from "../icons/retry.svg";
import MessageIcon from "../icons/message.svg";
import PieIcon from "../icons/pie.svg";
import SettingIcon from "../icons/setting.svg";
import LogoutIcon from "../icons/logout.svg";
import LogoIcon from "../icons/logo.svg";

const navIcons = [
  { name: "Home", icon: HomeIcon },
  { name: "Rocket", icon: RocketIcon },
  { name: "Documents", icon: DocumentIcon },
  { name: "Chats", icon: ChatIcon },
  { name: "Analytics", icon: PieIcon },
  { name: "Messages", icon: MessageIcon },
];

const bottomIcons = [
  { name: "Settings", icon: SettingIcon },
  { name: "Logout", icon: LogoutIcon },
];

const SideNav = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const NavItem = ({ name, icon: Icon }) => {
    const isActive = activeItem === name;
    return (
      <button
        onClick={() => setActiveItem(name)}
        className={` cursor-pointer w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
          isActive ? "bg-amber-100" : "hover:bg-gray-100"
        }`}
      >
        <img src={Icon} alt={name} className="w-5 h-5" />
      </button>
    );
  };

  return (
    <aside className="w-20 h-screen flex flex-col items-center py-5 px-2 bg-white border-r border-gray-200">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center justify-center mt-5">
          <img src={LogoIcon} alt="Logo" className="w-full h-full object-cover cursor-pointer" />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={ProfileIcon} alt="Profile" className="w-full h-full object-cover cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 mt-10 ">
        {navIcons.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </div>
      <div className="mt-auto flex flex-col items-center gap-3">
        {bottomIcons.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
