import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
// import Card from "../components/Elements/Card";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";
// import bills from "../data/Bill";
// import Billscard from "../components/Elements/Const/Billscard";
// import ExpensesBreakdowns from "../data/Expenses";
// import { Icon } from "../components/Elements/Icon";

// import {ReactComponents as Housing } from '.expenses'
// import Transactions from "../data/Transaction";
import axios from "axios";
import { useContext } from "react";
import { NotifContext } from "../context/notifContext";
import { AuthContext } from "../context/authContext";


const Dashboard = () => {
  const [bills, setBills] = useState([]); // State untuk menyimpan data bills
  const [loading, setLoading] = useState(true); // State loading
  const [error, setError] = useState(null); // State untuk error handling

  const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        setLoading(true); // Set loading menjadi true
        const refreshToken = localStorage.getItem("refreshToken"); // Ambil token dari localStorage

        if (!refreshToken) {
          setError("No token found. Please log in again.");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "https://jwt-auth-eight-neon.vercel.app/bills",
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`, // Sertakan token di header
            },
          }
        );

        console.log("Current Token:", refreshToken); // Debug log untuk token
        console.log("Fetched bills:", response.data.data || []); // Debug log untuk bills
        setBills(response.data.data || []); // Simpan data bills ke state
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          if (error.response.status === 401) {
            setOpen(true);
            setMsg({
              severity: "error",
              desc: "Session has expired. Please log in again.",
            });
            setIsLoggedIn(false);
            setName("");
            localStorage.removeItem("refreshToken");
          } else {
            setError(error.response.data?.message || "Failed to fetch bills.");
          }
        } else {
          console.error("Network error:", error);
          setError("Network error or server is unreachable.");
        }
      }
    };

    fetchBills();
  }, []);

  

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* upcoming total balance 🔽🔽 */}
        <CardBalance />
        
        {/* upcoming goals 🔽🔽 */}
        <CardGoal/>

        {/* upcoming bill🔽🔽 */}
        <CardBill />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* recent transactions🔽🔽 */}
        <CardTransaction />

        {/* recent transactions🔽🔽 */}
        <CardStatistic />
        
        {/* expenses break down🔽🔽 */}
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Dashboard;
