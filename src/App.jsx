import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import ErrorRouter from "./pages/errorRouter";
import { useState, useEffect } from 'react';
import Dashboard from "./pages/Dashboard";
import Balance from './pages/Balance';
// import Expenses from './pages/Expenses';
import Goals from './pages/Goals';
// import Bill from './pages/Bill';
// import Transaction from './pages/Transaction';
// import Settings from './pages/Settings';

  // Komponen ProtectedRoute
  // const ProtectedRoute = ({ element }) => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   // Simulasi pengecekan login, bisa diganti dengan pengecekan sesungguhnya dari localStorage atau cookie
  //   useEffect(() => {
  //     const loggedIn = localStorage.getItem("isLoggedIn");
  //     setIsLoggedIn(loggedIn);
  //   }, []);

  //   // Jika belum login, arahkan ke halaman login
  //   if (!isLoggedIn) {
  //     return <Navigate to="/login" />;
  //   }

  //   // Jika sudah login, tampilkan elemen yang dilindungi
  //   return element;
  // };

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      // element: <ProtectedRoute element={<Dashboard />} />,
      element: <Dashboard />,
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
    {
      path: "/balance",
      element: <Balance />,
    },
    // {
    //   path: "/expenses",
    //   element: <Expenses />,
    // },
    {
      path: "/goals",
      element: <Goals />,
    },
    // {
    //   path: "/bill",
    //   element: <Bill />,
    // },
    // {
    //   path: "/transaction",
    //   element: <Transaction />,
    // },
    // {
    //   path: "/settings",
    //   element: <Settings />,
    // },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;