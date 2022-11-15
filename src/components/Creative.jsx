import React from "react";
import Watch from "../image/watch.png";

const Creative = () => {
  return (
    <div className="bg-[#ee5d30] h-[220px] my-[140px] relative">
      <div className="flex justify-center items-center gap-[80px] absolute bottom-[-30px] left-0 right-[200px]">
        <h1 className="text-[40px] leading-none text-white font-medium">
          WE ARE <br />
          CREATIVE <br />
        </h1>
        <img className="h-[280px]" src={Watch} alt="watch" />
      </div>
    </div>
  );
};

export default Creative;
