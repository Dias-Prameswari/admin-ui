
import React from "react";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const Expenses = () => {
  return (
    <MainLayout type="expenses">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card
          title="Expenses Comparison"
        //   className="min-h-[210px]"
        variant="md:col-span-3 text-primary"
        >
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
    culpa provident id esse fuga sit.
            
        </Card>
      </div>
      {/* top content end*/}

      {/* bottom content start*/}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Card
            title="Expenses Breakdown"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
      culpa provident id esse fuga sit."
          />
        </div>
        <div className="py-11">
          <Card
            title=""//1
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
      culpa provident id esse fuga sit."
          />
        </div>
        <div className="py-11">
          <Card
            title=""//2
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
      culpa provident id esse fuga sit."
          />
        </div>
        <div className="py-7">
          <Card
            title=""//3
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
      culpa provident id esse fuga sit."
          />
        </div>
        <div className="py-7">
          <Card
            title=""//4
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
      culpa provident id esse fuga sit."
          />
        </div>
        <div className="py-7">
          <Card
            title=""//5
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
      culpa provident id esse fuga sit."
          />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Expenses;