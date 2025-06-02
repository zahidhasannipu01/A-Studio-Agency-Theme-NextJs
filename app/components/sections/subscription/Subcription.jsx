import Container from "@/app/utils/Container";
import React from "react";
import bubble from "../../../../public/assets/bubbles/subs.svg";
const Subcription = () => {
  return (
    <Container>
      <div>
        <div className="p-10 bg-[#F4F9FF] rounded-2xl h-[290px] w-full flex items-center justify-between relative mb-30">
          <div>
            <p className="text-4xl font-bold">Subscribe Newsletter </p>
            <p className="text-[#6B7280] text-base mt-4">
              I will update good news and promotion service not spam{" "}
            </p>
          </div>
          <div className="flex items-center space-x-4 absolute left-2/4 top-1/2 z-10 bg-white p-2 rounded-full shadow-md transform -translate-y-1/2 ">
            <input
              type="email"
              placeholder="Enter your email address.."
              className="py-3 px-6 rounded-md  border-gray-300 focus:outline-none focus:border-blue-500 w-[281px]"
            />
            <button className="bg-[#2639ED] text-white px-6 py-4 rounded-full font-bold hover:bg-blue-600 cursor-pointer duration-300">
              Contact Now
            </button>
          </div>
          <div className="absolute right-0 top-0 z-2">
            <img src={bubble.src} alt="bubble" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subcription;
