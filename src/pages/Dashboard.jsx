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
  // const expenseCard = ExpensesBreakdowns.map((expensesBreakdown) => (
  //   <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
  //     <div className="flex">
  //       <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
  //         {expensesBreakdown.icon}
  //       </div>
  //       <div className="ms-4">
  //         <span className="text-gray-02">{expensesBreakdown.category}</span>
  //         <br />
  //         <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
  //         <div className="flex">
  //           <span className="text-gray-02">
  //             {expensesBreakdown.percentage}%*
  //           </span>{" "}
  //           {expensesBreakdown.arrow}
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex place-content-center flex-col me-8">
  //       <Icon.ArrowRight />
  //     </div>
  //   </div>
  // ));

  // const tabs = ["All", "Revenue", "Expense"]

  // const [trxs, setTrx] = useState(Transactions);
  // const [activeTabs, setActiveTabs] = useState("All");

  // function handleClick(e){
  //   const transactionsFiltered = 
  //     e.target.value != "All"
  //       ? Transactions.filter(({type}) => type == e.target.value)
  //       : Transactions;

  //   setTrx(transactionsFiltered);  
  //   setActiveTabs(e.target.value);
  // }
  // const transactionCard = trxs.map((transaction) => (
  //   <div key={transaction.id} className="flex justify-between my-6">
  //     <div className="flex">
  //       <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
  //         {transaction.icon}
  //       </div>
  //       <div className="ms-4">
  //         <span className="text-xl font-bold">
  //           {transaction.transactionName}
  //         </span>
  //         <br />
  //         <span className="text-gray-02">{transaction.shopName}</span>
  //       </div>
  //     </div>
  //     <div className="text-right">
  //       <span className="text-xl font-bold text-gray-02">
  //         ${transaction.amount}
  //       </span>
  //       <br />
  //       <span className="text-gray-02">{transaction.date}</span>
  //     </div>
  //   </div>
  // ));

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" className="col-span-1" />

        <Card title="Goals" className="col-span-1" />

        
          <CardBill /> {/* Pastikan BillCards menerima props */}
        
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
      
      <CardTransaction/>
      


      <Card variant="md:col-span-2" title="Statistics" >
      
      </Card>

      
        <CardExpenseBreakdown/>
      
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Dashboard;
