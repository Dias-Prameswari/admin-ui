import React from "react";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const Goals = () => {
  return (
    <MainLayout type="goals">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        {/* Card pertama */}
        <div className="md:col-span-1">
          <Card title="Goals" variant="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            molestias, quae incidunt est corrupti soluta amet quaerat explicabo
            dignissimos et ea animi rerum saepe culpa provident id esse fuga
            sit.
          </Card>
        </div>

        {/* Card kedua */}
        <div className="md:col-span-2 py-11">
          <Card
            title=""
            variant="text-primary"
            // className="min-h-[210px]"
            // description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            // Sed molestias, quae incidunt est corrupti soluta amet quaerat explicabo dignissimos et ea animi rerum saepe
            // culpa provident id esse fuga sit."
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            molestias, quae incidunt est corrupti soluta amet quaerat explicabo
            dignissimos et ea animi rerum saepe culpa provident id esse fuga
            sit.
          </Card>
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
