import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import ErrorRouter from "./pages/errorRouter";
import { useState, useEffect } from 'react';

// Komponen ProtectedRoute
const ProtectedRoute = ({ element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulasi pengecekan login, bisa diganti dengan pengecekan sesungguhnya dari localStorage atau cookie
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn);
  }, []);

  // Jika belum login, arahkan ke halaman login
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Jika sudah login, tampilkan elemen yang dilindungi
  return element;
};

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute element={<div>Halaman Utama</div>} />,
      errorElement: <ErrorRouter />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;