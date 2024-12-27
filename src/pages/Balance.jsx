import React from "react";
// import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardCredit from "../components/Fragments/Balance/CardCredit";
import CardChecking from "../components/Fragments/Balance/CardChecking";
import CardSavings from "../components/Fragments/Balance/CardSavings";
import CardInvesment from "../components/Fragments/Balance/CardInvestment";
import CardLoan from "../components/Fragments/Balance/CardLoan";
import CardAdd from "../components/Fragments/Balance/CardAdd";


const Balance = () => {
  return (
    <MainLayout type="balance">
       <h2 className="text-xl  text-gray-400 mb-6">Balances</h2>

      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        {/* credit card */}
        <div className="sm:w-1/3">
          <CardCredit />
        </div>
        <div className="sm:w-1/3">
          <CardChecking />
        </div>
        <div className="sm:w-1/3">
          <CardSavings />
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <CardInvesment />
        </div>
        <div className="sm:w-1/3">
          <CardLoan />
        </div>
        <div className="sm:w-1/3">
         <CardAdd />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Balance;
