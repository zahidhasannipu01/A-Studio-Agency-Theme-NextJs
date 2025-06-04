import Container from "@/app/utils/Container";
import React from "react";
import HeroImage from "../../../../public/assets/images/image8.png";
import Image from "next/image";
import bubbleOne from "../../../../public/assets/bubbles/bubble1.svg";
import bubbleTwo from "../../../../public/assets/bubbles/bubble2.svg";
import dottOne from "../../../../public/assets/bubbles/dot1.svg";
const Hero = () => {
  return (
    <Container>
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 relative">
        <div className="w-screen md:w-[850px] h-auto md:h-[580px] pt-[100px] md:pt-[200px]">
          <div className=" flex flex-col gap-y-4 md:gap-y-10">
            <div>
              <p className="text-3xl md:text-[50px] font-extrabold ">
                A Digital Product Agency
              </p>
            </div>
            <div className="pr-4 md:pr-[250px] text-[#565656]">
              <p>
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </p>
            </div>
            <div>
              <button className="bg-[#2639ED] hover:bg-blue-600 duration-300 scale-100 hover:scale-105 text-white py-3 px-6 text-sm md:text-xl rounded-full cursor-pointer">
                Contact Now
              </button>
            </div>
          </div>
          <div className="absolute left-[0%] bottom-22 md:bottom-0 -z-10 hidden md:block">
            <Image
              className="w-full h-full object-contain"
              src={dottOne}
              alt="dott"
            />
          </div>
        </div>
        <div className="w-[850px] h-[580px] hidden md:block">
          <div className="absolute  left-[54%] top-0 -z-10">
            <Image src={bubbleOne} alt="bubble" />
          </div>
          <div className="w-[850px] h-[580px] object-contain  absolute left-[58%]">
            <Image
              src={HeroImage}
              className="w-full h-full object-cover"
              alt="hero"
            />
          </div>
          <div className="absolute left-[89%] -bottom-[17%] -z-10">
            <Image src={bubbleTwo} alt="bubble" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
