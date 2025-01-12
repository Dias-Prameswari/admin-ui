// import React, { useContext } from "react";
// import { ThemeContext } from "../../../context/ThemeContext";
// import { FaMoon, FaSun } from "react-icons/fa";

// const ThemeToggle = () => {
//   const { theme, setTheme } = useContext(ThemeContext);

//   const toggleTheme = () => {
//     const newTheme =
//       theme.name === "theme-green"
//         ? { name: "theme-dark", color: "#1b1b1b" }
//         : { name: "theme-green", color: "#299D91" };
//     setTheme(newTheme);
//   };

//   return (
//     <div className="flex place-items-end">
//       <div
//         className={`flex place-items-end bg-gray-300 p-2 rounded-full cursor-pointer`}
//         onClick={toggleTheme}
//       >
//         {theme.name === "theme-green" ? (
//           <FaMoon className="text-gray-600" />
//         ) : (
//           <FaSun className="text-yellow-500" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ThemeToggle;

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={toggleTheme}
      title="Toggle Theme"
    >
      {theme.name === "theme-green" ? (
        <FaMoon className="text-gray-600" />
      ) : (
        <FaSun className="text-yellow-500" />
      )}
    </div>
  );
};

export default ThemeToggle;
