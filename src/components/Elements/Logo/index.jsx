import React from 'react';

const Logo = (props) => {
  const { variant = "text-primary text-4xl" } = props;
  return (
    <div 
    className={`flex justify-center font-poppins tracking-wide animate-bounce ${variant}`}>
          <span className="font-bold">FINE</span>bank
          <span className="font-bold">.IO</span>
    </div>
  );
};

export default Logo;

// import React, { useContext } from "react";
// import { ThemeContext } from "../../../context/ThemeContext";

// const Logo = (props) => {
//   const { theme } = useContext(ThemeContext); // Ambil tema dari context
//   const { variant = `text-4xl font-bold ${
//     theme.name === "theme-green" ? "text-white" : "text-primary"
//   }` } = props;

//   return (
//     <div
//       className={`flex justify-center font-poppins tracking-wide animate-bounce ${variant}`}
//     >
//       <span
//         className={`font-bold ${
//           theme.name === "theme-green" ? "text-white" : "text-primary"
//         }`}
//       >
//         FINE
//       </span>
//       bank
//       <span
//         className={`font-bold ${
//           theme.name === "theme-green" ? "text-white" : "text-primary"
//         }`}
//       >
//         .IO
//       </span>
//     </div>
//   );
// };

// export default Logo;


