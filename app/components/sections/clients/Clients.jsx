import Container from "@/app/utils/Container";
import React from "react";
import { logoSlide } from "./clientslogo";
import Image from "next/image";

const Clients = () => {
  return (
    <Container>
      <div className="mt-42 flex justify-between items-center">
        <div>
          <div>
            <p className="text-4xl font-extrabold ">Our Clients</p>
          </div>
          <div>
            <p className="text-[#565656] text-lg mt-4">
              Several selected clients, who already <br /> believe in our
              service.
            </p>
          </div>
        </div>
        <div className="flex gap-x-20">
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
