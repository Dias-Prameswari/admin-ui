import { useState } from "react";
import Transactions from "../../../data/transaction";
import Card from "../../Elements/Card";

const CardTransaction = () => {
  const [trxs, setTrx] = useState(Transactions);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Revenue", "Expense"];

  function handleClick(e) {
    const transactionsFiltered =
      e.target.value != "All"
        ? Transactions.filter(({ type }) => type == e.target.value)
        : Transactions;

    setActiveTab(e.target.value);
    setTrx(transactionsFiltered);
  }

  const transactionCard = trxs.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-7">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));

  return (
    <Card variant="md:col-span-1 md:row-span-2" title="Recent Transaction">
      <div className="h-full flex flex-col ">
        <div className="mb-4 flex flex-col sm:flex-row">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={
                activeTab == tab
                  ? "px-4 font-bold border-b-4 border-primary text-primary"
                  : "px-4 font-bold text-gray-01"
              }
              value={tab}
              onClick={handleClick}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="h-full overflow-y-auto">
        {transactionCard}
        </div>
      </div>
    </Card>
    // desc={
    //     <div>
    //         <div className="mb-4 flex flex-col sm:flex-row">
    //             {tabs.map((tab) => (
    //                 <button
    //                     key={tab}
    //                     className={
    //                         activeTab == tab
    //                             ? "px-4 font-bold border-b-4 border-primary text-primary"
    //                             : "px-4 font-bold text-gray-01"
    //                     }
    //                     value={tab}
    //                     onClick={handleClick}
    //                 >
    //                     {tab}
    //                 </button>
    //             ))}
    //         </div>
    //         {transactionCard}
    //     </div>
    // }
  );
};

export default CardTransaction;
