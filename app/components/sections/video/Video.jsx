import Container from "@/app/utils/Container";
import React from "react";
import Image from "next/image";
import VideoImage from "../../../../public/assets/images/video.png";
import playbutton from "../../../../public/assets/icon/playbutton.svg";
import circle from "../../../../public/assets/bubbles/circle2.svg";
import bubble from "../../../../public/assets/bubbles/bubble3.svg";
const Video = () => {
  return (
    <Container>
      <div className="mb-10 md:mb-30 grid grid-flow-row md:grid-flow-col grid-rows-1 md:grid-cols-2 items-center relative">
        <div className="w-[360px] md:w-[550px] h-auto  md:h-[372px] rounded-3xl overflow-hidden object-cover relative">
          <div className="">
            <Image
              src={VideoImage}
              alt="video"
              className="w-full h-full object-cover "
            />
            <div>
              <Image
                src={playbutton}
                alt="play button"
                className="absolute top-2/4 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer scale-100 hover:scale-105 duration-300 animate-pulse"
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 left-[30%] -z-20">
          <Image src={circle} alt="circle" />
        </div>
        <div className="relative pt-16 md:pt-0">
          <div className="absolute left-0 md:-left-10 top-5 md:-top-[30%] -z-10">
            <Image src={bubble} alt="bubble" />
          </div>
          <div>
            <p className="text-[40px] font-bold leading-12">
              Great Digital Product <br /> Agency since 2016{" "}
            </p>
            <p className="text-[#565656] text-lg mt-4">
              Our Business Plan is a written document describing a company's
              core business activites, Objectives, and how it plans to achieve
              its goals. Our goal is to provide our client high quality Product
              with modern idea accordingly their budgets and according thir
              reuirements.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Video;
