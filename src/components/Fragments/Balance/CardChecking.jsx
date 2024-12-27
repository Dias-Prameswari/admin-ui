import checking from "../../../data/checking";
import Card from "../../Elements/Card";
import { Icon } from "../../Elements/Icon";

const CardChecking = () => {
  const checkingCard = checking.map((checking) => (
    <div key={checking.id} className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <span className="text-gray-400 font-bold">{checking.title}</span>
          <span className="text-gray-400 text-sm ml-12">{checking.bankName}</span>
        </div>
        <img className="h-10" src={`/images/${checking.logo}`} alt={checking.title} />
      </div>

      {/* Account Information */}
      <div className="">
        <span className="text-xl font-bold">{checking.accountNumber}</span>
        <br />
        <span className="text-gray-500 text-sm">Account Number</span>
      </div>

      {/* Balance */}
      <div className="">
        <span className="text-xl font-bold">${checking.balance}</span>
        <br />
        <span className="text-gray-500 text-sm">Total amount</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-9">
        <button className="bg-white text-primary font-bold">Remove</button>
        <button className="flex items-center bg-primary text-white rounded-md px-4 py-2">
        <span className="mr-1">Details</span>
        <Icon.Arrowkanan />
        </button>
      </div>
    </div>
  ));

  return (
    <Card>
      <div className="flex flex-col gap-6">{checkingCard}</div>
    </Card>
  );
};

export default CardChecking;
