"use client";
import Image from "next/image";
import React, { useState } from "react";
// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/6690916/pexels-photo-6690916.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/973406/pexels-photo-973406.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/6690916/pexels-photo-6690916.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

function ProductImages({items}:{items: any}) {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className=" h-[500px] relative">
        <Image
          src={items[index].image?.url}
          fill
          sizes="50vw"
          className=" object-cover rounded-3xl shadow-lg border-black outline-offset-1"
          alt=""
        />
      </div>
      <div className=" flex justify-between gap-4 mt-8">
        {items.map((item:any, i:any) => (
          <div className=" cursor-pointer w-1/4 h-32 relative gap-4 mt-8" key={item._id} onClick={() =>setIndex(i)}>
            <Image
              src={item.image?.url}
              fill
              sizes="30vw"
              className=" object-cover rounded-md hover:opacity-40"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
