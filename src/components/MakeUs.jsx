import React from "react";
import Flag from "../image/flag.png";

const MakeUs = () => {
  return (
    <div className="">
      <div className="flex justify-end items-center gap-7">
        <div className="flex flex-col max-w-xs">
          <h1 className="text-[40px] leading-none font-bold">
            WHAT <br /> MAKE US <br /> AWESOME
          </h1>
          <button className="bg-black p-2 text-white max-w-[160px] mt-6">
            CLICK HERE
          </button>
        </div>

        <div className="bg-[#ee5d30] h-[200px] w-[800px] relative">
          <div className="flex gap-20 items-center justify-between absolute top-[10%]">

            <div className="flex flex-col gap-10 max-w-[200px] text-center items-center justify-center">
              <img className="bg-white rounded-full p-4" src={Flag} alt="" srcset="" />
              <h2 className="text-[17px] font-semibold text-white">We Are Creative</h2>
              <p className="mt-[25px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eius reprehenderit magnam, cupiditate nam sed adipisci quae molestias laborum voluptates </p>
            </div>

            <div className="flex flex-col gap-10 max-w-[200px] text-center items-center justify-center">
              <img className="bg-white rounded-full p-4" src={Flag} alt="" srcset="" />
              <h2 className="text-[17px] font-semibold text-white">We Are Creative</h2>
              <p className="mt-[25px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eius reprehenderit magnam, cupiditate nam sed adipisci quae molestias laborum voluptates </p>
            </div>

            <div className="flex flex-col gap-10 max-w-[200px] text-center items-center justify-center">
              <img className="bg-white rounded-full p-4" src={Flag} alt="" srcset="" />
              <h2 className="text-[17px] font-semibold text-white">We Are Creative</h2>
              <p className="mt-[25px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eius reprehenderit magnam, cupiditate nam sed adipisci quae molestias laborum voluptates </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUs;
