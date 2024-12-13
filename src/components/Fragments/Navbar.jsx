// import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const { setTheme} = useContext(ThemeContext);

  const menus = [
    { id: "overview", link: "/", icon: <Icon.Overview />, label: "Overview" },
    { id: "balance", link: "/balance", icon: <Icon.Balance />, label: "Balance" },
    { id: "transaction", link: "/transaction", icon: <Icon.Transaction />, label: "Transaction" },
    { id: "bill", link: "/bill", icon: <Icon.Bill />, label: "Bill" },
    { id: "expenses", link: "/expenses", icon: <Icon.Expencces />, label: "Expenses" },
    { id: "goals", link: "/goals", icon: <Icon.Goals />, label: "Goals" },
    { id: "settings", link: "/settings", icon: <Icon.Settings />, label: "Settings" },
  ];

  const log = [
    { id: "logout", link: "/logout", icon: <Icon.Logout />, label: "Logout" },
  ];

  return (
    <div className="bg-defaultBlack">
      <nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Logo variant="text-primary text-sm sm:text-2xl" />
        </div>

        {/* Navigation Menus */}
        <div>
          {menus.map((menu) => (
            <NavLink
              to={menu.link}
              key={menu.id}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white px-4 py-3 rounded-md"
                  : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
              }
            >
              <div className="mx-auto sm:mx-0">{menu.icon}</div>
              <div className="ms-3 hidden sm:block">{menu.label}</div>
            </NavLink>
          ))}
        </div>

          
        {/* Theme Selector */}
        <div className="mb-8">
          <div className="text-white mb-2">Themes</div>
          <div className="md:flex md:gap-2">
            {themes.map((t) => (
              <div
                key={t.name}
                className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2`}
                onClick={() => setTheme(t)}
              ></div>
            ))}
          </div>
        </div>


        {/* Footer Section */}
        <div className="sticky bottom-12">
          {log.map((item) => (
            <NavLink
              to={item.link}
              key={item.id}
              className={({ isActive }) =>
                isActive
                  ? "flex bg-primary text-white px-4 py-3 rounded-md"
                  : "flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white"
              }
            >
              <div className="mx-auto sm:mx-0 text-primary">{item.icon}</div>
              <div className="ms-3 hidden sm:block">{item.label}</div>
            </NavLink>
          ))}

          <div className="border-b my-10 border-b-special-bg"></div>
          <div className="flex justify-between">
            <div className="mx-auto sm:mx-0">
              <img src="/images/profile-1.png" alt="Profile" />
            </div>

            <div className="hidden sm:block">
              <div className="text-white font-bold">Username</div>
              <div className="text-sx">View Profile</div>
            </div>
            <div className="hidden sm:block self-center justify-self-end">
              <Icon.ThreeMenu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
