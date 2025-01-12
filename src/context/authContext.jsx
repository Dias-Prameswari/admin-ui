import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState(() => localStorage.getItem("name") || "");

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      try {
        const decoded = jwtDecode(refreshToken);

        // Periksa apakah token sudah kadaluwarsa
        if (decoded.exp * 1000 < Date.now()) {
          throw new Error("Token expired");
        }

        // Token valid, tetap login
        setIsLoggedIn(true);
        setName(decoded.name);
      } catch (error) {
        // Token tidak valid atau kadaluwarsa
        setIsLoggedIn(false);
        setName("");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("name");
      }
    } else {
      // Jika tidak ada token, pastikan pengguna tidak login
      setIsLoggedIn(false);
      setName("");
    }
  }, []);

  // Simpan nama pengguna di localStorage saat diperbarui
  useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
    } else {
      localStorage.removeItem("name");
    }
  }, [name]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};
