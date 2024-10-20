import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import ErrorRouter from "./pages/errorRouter";

const App = () => {
  const myRouter= createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
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
      path: "/forgot-password", // Tambahkan route untuk forgot password
      element: <ForgotPassword />,
    },
  ]);
  
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
    
);//tutup return
};//tutup const

export default App;