import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

const Dashboard = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="mb-8 sm:flex sm:gap-6">
        <div className="sm:w-1/3">
          <Card
            title="Overview"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="sm:w-1/3">
          <Card
            title="Overview"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="sm:w-1/3">
          <Card
            title="Overview"
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
            title="Overview"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="sm:w-1/3">
          <Card
            title="Overview"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe 
        culpa provident id esse fuga sit."
          />
        </div>
        <div className="sm:w-1/3">
          <Card
            title="Overview"
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

export default Dashboard;
