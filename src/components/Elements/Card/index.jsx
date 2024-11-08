import React from "react";

const Card = ({ title, description }) => {
  return (
    <>
      <div className=" text-lg text-gray-02 mb-2">{title}</div>

      {/* <div className="mb-8"> */}
      <div className="bg-white rounded-lg p-8 shadow-xl">{description}</div>
      {/* </div> */}
    </>
  );
};

export default Card;
