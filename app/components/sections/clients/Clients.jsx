import Container from "@/app/utils/Container";
import React from "react";
import { logoSlide } from "./clientslogo";
import Image from "next/image";

const Clients = () => {
  return (
    <Container>
      <div className="mt-22 md:mt-42 flex flex-col md:flex-row justify-between items-center ">
        <div>
          <div>
            <p className="text-2xl md:text-4xl font-extrabold text-center md:text-start">
              Our Clients
            </p>
          </div>
          <div className="text-center md:text-start">
            <p className="text-[#565656] text-sm md:text-lg mt-1 md:mt-4">
              Several selected clients, who already{" "}
              <span className="hidden md:block-inline">
                <br />
              </span>{" "}
              believe in our service.
            </p>
          </div>
        </div>
        <div className="flex gap-x-4 md:gap-x-20 mt-3 md:mt-0">
          {logoSlide.map((item, index) => {
            return (
              <div
                className="w-full h-10 scale-100 duration-300 hover:scale-105 cursor-pointer"
                key={index}
              >
                <Image
                  src={item.image}
                  className="w-full h-full object-contain"
                  alt={item.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Clients;
