

import { wixClientServer } from "@/app/lib/wixContex";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

async function ProductList({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) {
  const wixClient = await wixClientServer();
  const productQuery = wixClient?.products
  .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome("productType", [searchParams?.type || "physical", "digital"])
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE) : 0 )


    if(searchParams?.sort) {
      const [sortType, sortBy] = searchParams.sort.split(" ")

      if(sortType === "asc") {
        productQuery.ascending(sortBy)
      }
      if(sortType === "desc") {
        productQuery.descending(sortBy)
      }
    }

    const res = await productQuery.find();

   
  return (
    <div className=" mt-12 flex gap-y-16 gap-x-8 justify-center flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href={"/" + product.slug}
          className=" shadow-lg p-3 rounded-lg w-full flex flex-col  gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className=" relative w-full h-52">
            <Image
              fill
              sizes="25vw"
              className="hover:opacity-0 transition-opacity easy duration-500 absolute object-cover rounded-md z-10"
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
            />
            {product.media?.items && (
              <Image
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md "
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
              />
            )}
          </div>
          <div className=" flex justify-between ">
            <span className=" font-medium">{product.name}</span>
            <span className=" font-medium">₦{product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className=" text-sm text-gray-500 "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections?.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama w-max hover:text-white">
            {" "}
            Add to Cart
          </button>
        </Link>
      ))}
      <Pagination currentPage ={res.currentPage || 0} hasPrev={res.hasPrev()} hasNext={res.hasNext()}/>
    </div>
  );
}

export default ProductList;
