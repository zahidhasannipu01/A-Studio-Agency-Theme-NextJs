import Container from "@/app/utils/Container";
import React from "react";
import Image from "next/image";
import rectablebox from "../../../../public/assets/bubbles/rectangle1.svg";
import circle from "../../../../public/assets/bubbles/circle1.svg";
import searchbox from "../../../../public/assets/icon/searchbox.svg";
import wallet from "../../../../public/assets/icon/wallet.svg";
import code from "../../../../public/assets/icon/code.svg";
import chart from "../../../../public/assets/icon/chart.svg";
import dotts from "../../../../public/assets/bubbles/dot1.svg";
import box from "../../../../public/assets/bubbles/bubble2.svg";
const Services = () => {
  return (
    <Container>
      <div className="mt-32 w-full h-[788px]  flex justify-between items-center relative mb-30">
        <div className="">
          <div>
            <Image
              src={box}
              alt="box"
              className="absolute -left-10 top-[32%] -z-10"
            />
          </div>
          <div>
            <p className="text-[40px] font-bold ">
              How can we help <br /> your Business ?
            </p>
            <p className="text-[#6B7280] text-base mt-4">
              We build readymade websites, mobile applications, <br /> and
              elaborate online business services.
            </p>
          </div>
          <div>
            <Image
              src={dotts}
              alt="dotts"
              className="absolute left-0 bottom-16 -z-10"
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-x-5 pb-5 ">
              <div className="w-[308px] h-[379px] bg-white shadow-md rounded-2xl flex flex-col p-4  items-center space-y-10 justify-center scale-100 hover:scale-105 duration-300 cursor-pointer">
                <div className="px-4 py-3 bg-[#F1F7FF] rounded-xl">
                  <Image src={searchbox} alt="searchbox" />
                </div>
                <div className="">
                  <p className="text-2xl text-center font-bold">
                    Business Idea <br /> Planning
                  </p>
                </div>
                <div>
                  <p className="text-center text-[#6B7280] text-base">
                    We present you a proposal and <br /> discuss niffty-gritty
                    like
                  </p>
                </div>
              </div>
              <div className="w-[308px] h-[379px] bg-white shadow-md rounded-2xl flex flex-col absolute right-0 -top-10 z-10  p-4  items-center space-y-10 justify-center scale-100 hover:scale-105 duration-300 cursor-pointer">
                {" "}
                <div className="px-4 py-3 bg-[#FFF7E3] rounded-xl">
                  <Image src={wallet} alt="searchbox" />
                </div>
                <div className="">
                  <p className="text-2xl text-center font-bold">
                    Financial <br /> Planning System
                  </p>
                </div>
                <div>
                  <p className="text-center text-[#6B7280] text-base">
                    Protocols apart from aengage <br /> models, pricing billing
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5 ">
              <div className="w-[308px] h-[379px] bg-white shadow-md rounded-2xl flex flex-col p-4  items-center space-y-10 justify-center scale-100 hover:scale-105 duration-300 cursor-pointer">
                {" "}
                <div className="px-4 py-3 bg-[#FFF2F8] rounded-xl">
                  <Image src={code} alt="searchbox" />
                </div>
                <div className="">
                  <p className="text-2xl text-center font-bold">
                    Development <br /> Website and App
                  </p>
                </div>
                <div>
                  <p className="text-center text-[#6B7280] text-base">
                    Communication protocols apart <br /> from engagement models
                  </p>
                </div>
              </div>
              <div className="w-[308px] h-[379px] bg-white shadow-md rounded-2xl flex flex-col absolute bottom-10 right-0 p-4  items-center space-y-10 justify-center scale-100 hover:scale-105 duration-300 cursor-pointer">
                {" "}
                <div className="px-4 py-3 bg-[#DEFFEE] rounded-xl">
                  <Image src={chart} alt="searchbox" />
                </div>
                <div className="">
                  <p className="text-2xl text-center font-bold">
                    Market Analysis <br /> Project{" "}
                  </p>
                </div>
                <div>
                  <p className="text-center text-[#6B7280] text-base">
                    Protocols apart from aengage <br /> models, pricing billing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-[15%] top-26 -z-5">
            <Image src={rectablebox} alt="rectablebox" />
          </div>
          <div>
            <Image
              src={circle}
              alt="circle"
              className="absolute -right-[0%] bottom-[0%] -z-10"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
