import React from "react";
import Email from "../image/email.png";

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-around mt-[60px]">
        <div>
          <h1 className="font-bold">Lorem ipsum dolor sit amet</h1>
          <div className="mt-5">
            <div className="flex flex-col gap-7">
              <div className="flex gap-10 items-center max-w-xs">
                <div className="bg-orange-500 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                  <img className="w-5 h-5" src={Email} alt="Email" />
                </div>
                <div className="flex flex-col">
                  <h6 className="font-bold">EMAIL</h6>
                  <h6>email@email.com</h6>
                </div>
              </div>

              <div className="flex gap-10 items-center max-w-xs">
                <div className="bg-orange-500 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                  <img className="w-5 h-5" src={Email} alt="Email" />
                </div>
                <div className="flex flex-col">
                  <h6 className="font-bold">Call Us</h6>
                  <h6>12345678</h6>
                </div>
              </div>

              <div className="flex gap-10 items-center max-w-xs">
                <div className="bg-orange-500 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                  <img className="w-5 h-5" src={Email} alt="Email" />
                </div>
                <div className="flex flex-col justify-start">
                  <h6 className="font-bold">Address</h6>
                  <h6>Dhaka</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold">Say Hello!</h1>
          <div className="mt-5 space-y-5">
            <div className="flex gap-3">
              <span>Name</span>
              <input className="border-b-2 w-[350px]" type="text" />
            </div>
            <div className="flex gap-3">
              <span>Email</span>
              <input className="border-b-2 w-[350px]" type="email" />
            </div>
            <div className="flex gap-3">
              <span>Phone</span>
              <input className="border-b-2 w-[350px]" type="text" />
            </div>

            <div className="flex gap-3">
              <span>Message</span>
              <input className="border-b-2 w-[350px] mt-10" type="text" />
            </div>
          </div>

          <button className="bg-orange-500 p-2 text-white mt-5">SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
