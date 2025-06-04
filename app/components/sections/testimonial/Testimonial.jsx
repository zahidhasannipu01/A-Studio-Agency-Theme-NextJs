"use client";

import Container from "@/app/utils/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonialData } from "./testimonials";
import Image from "next/image";
import circle from "../../../../public/assets/bubbles/circle1.svg";
import groupimage from "../../../../public/assets/images/group.png";
import circle2 from "../../../../public/assets/bubbles/circle2.svg";
import dott2 from "../../../../public/assets/bubbles/dot2.svg";
const Testimonial = () => {
  return (
    <Container>
      <div className="mb-10 md:mb-30">
        <div className="text-center py-20">
          <p className="text-4xl font-extrabold">What our happy client say</p>
          <p className="text-[#6B7280] text-base mt-4">
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className="flex justify-between items-center relative">
          <div className="absolute left-[13%] top-0 -z-10 hidden md:block">
            <Image src={dott2} alt="group" />
          </div>
          <div className="absolute left-[3%] top-[60%] -z-10 hidden md:block">
            <Image src={circle} alt="circle" />
          </div>
          <div className="w-full md:w-3/5">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="w-full h-[400px]"
            >
              {testimonialData.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="flex justify-center gap-6 items-center w-full h-full">
                    <div className="w-[250px] h-[250px] md:w-[389px] md:h-[389px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="max-w-md">
                      <p className="text-2xl font-bold">{item.name}</p>
                      <p className="text-[#6B7280] text-base mt-4">
                        {item.testimonial}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute left-10 top-20 -z-10 w-[184px] h-[184px]">
              <Image className="w-full h-full" src={circle2} alt="circle" />
            </div>
            <div>
              <Image src={groupimage} alt="group" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
