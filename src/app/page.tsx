// "use client"
import CategoryList from "@/components/CategoryList";
import { useWixClient } from "@/components/hooks/useWixClient";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { wixClientContext } from "@/context/WixContext";
import { Suspense, useContext, useEffect } from "react";
import { wixClientServer } from "./lib/wixContex";

const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="bg-lama text-slate-300 w-max px-6 rounded-lg text-xl font-bold ">
          Featured Products
        </h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className=" mt-24 ">
        <div className=" p-5">
          <h1 className="bg-lama   mb-12  text-slate-300 w-max px-6 rounded-lg text-xl font-bold ">
            Categories Products
          </h1>
        </div>
        <Suspense fallback={"loading"}>
          <CategoryList />
        </Suspense>
      </div>
      <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="bg-lama text-slate-300 w-max px-6 rounded-lg text-xl font-bold ">
          New Products
        </h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
          limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
