import React from "react";

const BillCards = ({ bills }) => {
  return (
    <>
      {bills.map((bill) => (
        <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
          <div className="flex">
            <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
              <span className="text-xs">{bill.month}</span>
              <span className="text-2xl font-bold">{bill.date}</span>
            </div>
            <div className="">
              <img className="h-6" src={`/images/${bill.logo}`} alt={`${bill.name} logo`} />
              <span className="font-bold">{bill.name}</span>
              <br />
              <span className="text-xs">Last Charge - {bill.lastCharge}</span>
            </div>
          </div>
          <div className="flex place-content-center flex-col">
            <span className="p-2 border rounded-lg font-bold text-center">
              ${bill.amount}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};


export default BillCards;