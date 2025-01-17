import React, { useContext } from "react";
import Input from "../Elements/LabeledInput/Input";
import NotificationIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/authContext";
import ThemeToggle from "../Elements/Toggle/ThemeToggle";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useContext(AuthContext);

  const date = new Date().toDateString().slice(4);

  return (
    <header className={`border-b-2 py-4 p-6 flex items-center justify-between ${theme.name}`}>
      <div className="flex">
        <div className="font-bold text-lg">{name}</div>
        <div className="ms-6 text-gray-03">{date}</div>
        
      </div>

      <div className="flex">
        <div className="self-center">
          <NotificationIcon className="text-gray-01 scale-110" />
        </div>
        <div className="self-center ms-4">
          <ThemeToggle />
        </div>

        <div className="ms-10 hidden sm:block">
          <Input variant="bg-white w-80" placeholder="Search..."/>
        </div>
      </div>
    </header>
  );
};

export default Header;
