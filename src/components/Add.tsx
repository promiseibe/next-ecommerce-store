"use client";
import React, { useState } from "react";
import { useWixClient } from "./hooks/useWixClient";
import { useCartStore } from "./hooks/useCartStore";

function Add(
  { productId, variantId, stockNumber }: {
    productId: any;
    variantId: string;
    stockNumber: number;
  },
) {
  const [quantity, setQuantity] = useState(1);

  // const stock = 4
  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();
  const {addItem, isLoading } = useCartStore();


  
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className=" flex justify-between">
        <div className=" flex items-center gap-4">
          <div className=" bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              onClick={() => handleQuantity("d")}
              className=" cursor-pointer text-xl"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => handleQuantity("i")}
              className=" cursor-pointer text-xl"
            >
              +
            </button>
          </div>
          {stockNumber < 1
            ? <div className="text-xs">Product is out of stock</div>
            : (
              <div className=" text-xs">
                Only{" "}
                <span className=" text-orange-500">{stockNumber} items</span>
                {" "}
                left!<br />
                {"Don't"} miss it
              </div>
            )}
        </div>
        <button
        disabled={isLoading}
          onClick={()=>addItem(wixClient,productId,variantId, quantity)}
          className="w-36 text-sm rounded-3xl ring-1 ring-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:ring-0 disabled:bg-pink-200 disabled:ring-none disabled:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
