import { wixClientServer } from "@/app/lib/wixContex";
import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function CategoryList() {
  const wixClient =await wixClientServer();

  const cat = await wixClient.collections.queryCollections().find();
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className=" flex gap-4 md:gap-8">
        {cat.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className=" shadow-lg p-2 flex-shrink-0 w-9/12 sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className=" relative bg-slate-100 w-100 h-80 md:h-52">
              <Image
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt=""
                fill
                sizes="20vw"
                className=" object-cover rounded-3xl "

              />
            </div>
         
              <h1 className=" rounded-xl bg-red-300 text-white text-  shadow-lg p-2 mt-8 font-bold text-lg tracking-wide">
              {item.name}
            </h1>
           
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
