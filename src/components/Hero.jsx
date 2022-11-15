import React from "react";

const Hero = () => {
  return (
    <div className="hero_bg">
      <div className="container mx-auto">
        <div className="text-white absolute max-w-sm right-[20%] top-[20%]">
          <h1 className="text-[60px] font-extrabold leading-none">
            WE ARE <br />
            CREATIVE <br />
            AGENCY <br />
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, eum, fugiat quaerat cumque assumenda id molestiae
            labore nam aliquid eveniet repudiandae? Doloribus possimus facilis
          </p>
          <button className="mt-6 bg-orange-500 p-3">Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
