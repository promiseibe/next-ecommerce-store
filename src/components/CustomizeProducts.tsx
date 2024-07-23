"use client";
import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import Add from "./Add";

function CustomizeProducts({
  productId,
  variants,
  productOptions,
}: {
  productId: any;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelected = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVarientInstock = (choices: { [key: string]: string }) => {
    return variants.some((varient) => {
      const variantChoices = varient.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        varient.stock?.inStock &&
        varient.stock?.inStock &&
        varient.stock?.quantity &&
        varient.stock?.quantity > 0
      );
    });
  };

  console.log(variants);
  return (
    <div className=" flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className=" flex flex-col gap-4" key={option.name}>
          <h4 className=" font-medium">Choose a {option.name}</h4>
          <ul className=" flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disable = !isVarientInstock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;
              const clickHandler = disable
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  key={option.name}
                  className=" w-8 h-8 rounded-full ring-1 ring-gray-300  relative bg-red-500"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disable ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className=" absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
                  )}
                  {disable && (
                    <div className=" absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-y-1/2 transform -translate-x-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className=" ring-1 ring-lama rounded-md py-1 px-4 text-sm cursor-pointer"
                  style={{
                    cursor: disable ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disable
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disable ? "white" : "#f35c7a",
                    boxShadow: disable ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
              // (
              //   <div
              //     className=""
              //     key={choice.value}
              //     onClick={() =>
              //       handleOptionSelect(option.name!, choice.description!)
              //     }
              //   >
              //     {choice.description}
              //      {disable && "disabled"}
              //     {selected && "selected"}
              //   </div>
              // );
            })}
          </ul>
        </div>
      ))}
      <Add productId={productId} variantId={selectedVariant?._id || "00000000-000000-000000-000000000001"} stockNumber={selectedVariant?.stock?.quantity || 0}/>
      {/* COLORS */}
      {/*
    <ul className=' flex items-center gap-3'>
       
        <li className=' w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500'></li>
        <li className=' w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500'>
        <div className=' absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-y-1/2 transform -translate-x-1/2'/>
        </li>
    </ul> */}

      {/* OTHERS */}
      {/* <h4 className=' font-medium'>Choose a size</h4>
        <ul className=' flex items-center gap-3'>
            <li className=' ring-1 ring-lama rounded-md py-1 px-4 text-sm cursor-pointer'>
                Small
            </li>
            <li className=' ring-1 ring-lama bg-lama rounded-md py-1 px-4 text-sm cursor-pointer'>
            Medium
            </li>
            <li className=' ring-1 ring-pink-300 rounded-md py-1 px-4 text-sm bg-pink-200 cursor-not-allowed'>
                Large
            </li>
        </ul> */}
    </div>
  );
}

export default CustomizeProducts;
