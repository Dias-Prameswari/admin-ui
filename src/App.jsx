// import React, { Children } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import ErrorRouter from "./pages/errorRouter";
import Dashboard from "./pages/Dashboard";
import Balance from "./pages/Balance";
import Expenses from "./pages/Expenses";
import Goals from "./pages/Goals";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

// import { useState, useEffect } from 'react';
import Bill from "./pages/Bill";
import Transaction from "./pages/Transaction";
import Settings from "./pages/Settings";

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
  const { isLoggedIn } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      // element: <ProtectedRoute element={<Dashboard />} />,
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
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
      element: (
        <RequireAuth>
          <Balance />
        </RequireAuth>
      ),
    },
    {
      path: "/expenses",
      element: (
        <RequireAuth>
          <Expenses />
        </RequireAuth>
      ),
    },
    {
      path: "/goals",
      element: (
        <RequireAuth>
          <Goals />
        </RequireAuth>
      ),
    },
    {
      path: "/bills",
      element: (
        <RequireAuth>
          <Bill />
        </RequireAuth>
      ),
    },
    {
      path: "/transaction",
      element: (
        <RequireAuth>
          <Transaction />
        </RequireAuth>
      ),
    },
    {
      path: "/settings",
      element: (
        <RequireAuth>
          <Settings />
        </RequireAuth>
      ),
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;
