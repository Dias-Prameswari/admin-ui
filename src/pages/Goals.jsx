import React from "react";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const Goals = () => {
  return (
    <MainLayout type="goals">
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card
            title="Goals"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="py-7 w-2/3">
          <Card
            title=""
            className="min-h-[210px]"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
      </div>

      {/* top content end*/}

      {/* bottom content start*/}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Card
            title="Expenses Goals by Category"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="py-7">
          <Card
            title=""
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="py-7">
          <Card
            title=""
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div>
          <Card
            title=""
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div>
          <Card
            title=""
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div>
          <Card
            title=""
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

export default Goals;
