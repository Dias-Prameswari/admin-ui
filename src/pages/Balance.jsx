import React from "react";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const Balance = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card
            title="Balance"
        //     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        // Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        // culpa provident id esse fuga sit."
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
         culpa provident id esse fuga sit."
          </Card>
        </div>
        <div className="sm:w-1/3">
          <Card
            title="Balance"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="sm:w-1/3">
          <Card
            title="Balance"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card
            title="Balance"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="sm:w-1/3">
          <Card
            title="Balance"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="sm:w-1/3">
          <Card
            title="Balance"
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

export default Balance;
