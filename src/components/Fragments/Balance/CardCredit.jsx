import credits from "../../../data/credits";
import Card from "../../Elements/Card";

const CardCredit = () => {
  // Mapping data credits ke elemen JSX
  const creditCard = credits.map((credit) => (
    <div key={credit.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="me-3 px-4 rounded-lg flex place-content-center flex-col">
          <img className="h-6" src={`/images/${credit.logo}`} alt={credit.title} />
        </div>
        <div>
          <span className="font-bold">{credit.title}</span>
          <br />
          <span className="text-xs">Account - {credit.accountNumber}</span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${credit.balance}
        </span>
      </div>
    </div>
  ));

  return (
    <Card >
      <div className="h-full flex flex-col justify-between">{creditCard}</div>
    </Card>
  );
};

export default CardCredit;
