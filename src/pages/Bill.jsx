import React from "react";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const Bill = () => {
  return (
    <MainLayout type="bills">
      {/* top content start*/}
      <div className="py-7 w-full">
        <Card
          title="Upcoming Bills "
          className="min-h-[350px]"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
    culpa provident id esse fuga sit."
        />
      </div>
      {/* top content end*/}
    </MainLayout>
  );
};

export default Bill;