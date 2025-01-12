// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeContextProvider = ({ children }) => {
//   // Daftar tema yang tersedia
//   const themes = [
//     { name: "theme-green", color: "#299D91" },
//     { name: "theme-blue", color: "#1E90FF" },
//     { name: "theme-purple", color: "#6A5ACD" },
//     { name: "theme-pink", color: "#DB7093" },
//     { name: "theme-brown", color: "#8B4513" },
//     { name: "theme-dark", color: "#0C0A14" }, // Tema gelap
//   ];

//   const [theme, setTheme] = useState(themes[0]); // Default ke tema green

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, themes }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeContextProvider = ({ children }) => {
//   const themes = {
//     light: { name: "theme-green", color: "#299D91" },
//     dark: { name: "theme-dark", color: "#0C0A14" },
//   };

//   const [theme, setTheme] = useState(themes.light); // Default ke tema hijau

//   const toggleTheme = () => {
//     setTheme(theme.name === "theme-green" ? themes.dark : themes.light);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const themes = {
    green: {
      name: "theme-green",
      color: "#299D91", // Warna utama
      backgroundColor: "#ffffff", // Tetapkan putih untuk latar belakang
    },
    dark: {
      name: "theme-dark",
      color: "#191919", // Warna utama gelap
      backgroundColor: "#191919", // Hitam untuk latar belakang
    },
  };

  const [theme, setTheme] = useState(themes.green); // Default ke tema hijau

  const toggleTheme = () => {
    setTheme(theme.name === "theme-green" ? themes.dark : themes.green);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
