import React from "react";
import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const MainLayout = (props) => {
    const { children } = props;
    const { theme } = useContext(ThemeContext);
  return (
    // div pembuka 1
    <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme.name}`}>
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}

      {/* div pembuka 2 */}
      <div className="w-screen">
        {/* header start */}
        <Header />
        {/* header end */}

        {/* content start */}
        <main className="px-6 py-4">
            {children}
        </main>
        {/* content end */}
      </div>
      {/* div penutup 2 */}
    </div>
    // div penutup 1
  );
};

export default MainLayout;
