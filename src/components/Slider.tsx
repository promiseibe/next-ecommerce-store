"use client";

import { Preahvihear } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

//Banner slider
const slides = [
  {
    id: 1,
    title: "Fresh Deals for Spring",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=800 ",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    text: "Premium Hotel Supplies Sale"

  },
  {
    id: 2,
    title: "Spring Savings Spectacular",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    text: "Top Hotel Essentials"

  },
  {
    id: 3,
    title: "Springtime Elegance",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    text: " Unbeatable Hotel Deals"
  },
];
function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1? 0 : prev + 1))
    }, 3000 );

    return () => clearInterval(interval)
  
  }  , [])
    
    return (
    <div className=" h-[calc(100vh-80px)] overflow-hidden">
      <div className=" w-max h-full flex transition-all ease-in-out duration-1000" style={{transform: `translate(-${current * 100}vw)`}}>
        {slides.map((slides) => (
          <div
            className={`${slides.bg} w-screen h-full flex flex-col gap-16 xl:flex-row `}
            key={slides.id}
          >
            {/* TEXT CONTAINER */}

            <div className=" h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className=" text-xl text-white rounded-full lg:text-2xl 2xl:text-3xl bg-red-300 px-7  py-2">{slides.description}</h2>
              <h1 className="text-2xl lg:text-6xl 2xl:text-5xl font-semibold">{slides.title}</h1>
              <p className=" text-md lg:text-xl 2xl:text-2xl text-gray-400">{slides.text}</p>
              <Link href={slides.url}>
                <button className=" rounded-md bg-black text-white py-3 px-4">SHOP NOW</button>
              </Link>
            </div>
            {/* Image Container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
              
                src={slides.img}
                alt=""
                fill
                sizes="%100"
                className=" object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className=" absolute m-auto left-1/2 bottom-8 flex gap-4">
         {
        slides.map((slide, index)=>(
          <div className={` w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}` } onClick={() => setCurrent(index)} key={slide.id}>
            {current === index && (<div className=" w-[6px] h-[6px] bg-gray-600 rounded-full "></div>)}
          </div>
        ))
      }
      </div>
     
    </div>
  );
}

export default Slider;
