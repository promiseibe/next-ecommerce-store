import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

function SinglePage() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 ">
      {/* IMG */}
      <div className=" w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* TEXTS */}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6">
        <h1>Product Name</h1>
        <p className=" text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde
          odio dicta perferendis laboriosam perspiciatis excepturi minima. Ut,
          ipsum possimus quibusdam maiores voluptates esse animi vitae fugiat
          corrupti repellat ea?
        </p>
        <div className=" h-[2px] bg-gray-100"/>
        <div className=" flex items-center gap-4">
             <h3 className=" text-xl text-gray-500 line-through">₦500</h3>
        <h2 className=" font-medium text-xl">₦490</h2>
        </div>
        <div className=" h-[2px] bg-gray-100" />
        <CustomizeProducts/>
        <div className=" h-[2px] bg-gray-100" />
        <Add/>
        <div className=" text-sm">
          <h4 className=" font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque, quae, quasi vero libero id beatae quos eius in enim nisi magnam aliquid repudiandae officia quaerat distinctio, cumque maxime recusandae?</p>
          

        </div>
        <div className=" text-sm">
          <h4 className=" font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque, quae, quasi vero libero id beatae quos eius in enim nisi magnam aliquid repudiandae officia quaerat distinctio, cumque maxime recusandae?</p>
          

        </div>
        <div className=" text-sm">
          <h4 className=" font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque, quae, quasi vero libero id beatae quos eius in enim nisi magnam aliquid repudiandae officia quaerat distinctio, cumque maxime recusandae?</p>
          

        </div>
      
      </div>
    </div>
  );
}

export default SinglePage;
