import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";

// import bills from "../data/Bill";
// import Billscard from "../components/Elements/Const/Billscard";
// import ExpensesBreakdowns from "../data/Expenses";
// import { Icon } from "../components/Elements/Icon";

// import {ReactComponents as Housing } from '.expenses'
// import Transactions from "../data/Transaction";

const Dashboard = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" className="col-span-1" />
        <Card title="Goals" className="col-span-1" />
        {/* upcoming bill🔽🔽 */}
        <CardBill />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        {/* recent transactions🔽🔽 */}
        <CardTransaction />

        <Card variant="md:col-span-2" title="Statistics"></Card>

        {/* expenses break down🔽🔽 */}
        <CardExpenseBreakdown />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Dashboard;
