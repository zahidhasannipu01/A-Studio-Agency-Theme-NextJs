import Container from "@/app/utils/Container";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/logo/logo.svg";
import Image from "next/image";
import Facebook from "../../../public/assets/icon/facebook.svg";
import Twitter from "../../../public/assets/icon/twitter.svg";
import LinkedIn from "../../../public/assets/icon/linkedin.svg";
const Footer = () => {
  return (
    <Container>
      <div className="flex md:flex-row flex-col justify-between py-5 w-full h-auto">
        <div className="flex flex-col gap-y-5">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div className="text-[#6B7280] text-sm text-wrap w-full md:w-[400px] leading-5">
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
          <div className="flex gap-x-5">
            <Image src={Facebook} className="cursor-pointer" alt="facebook" />
            <Image src={Twitter} className="cursor-pointer" alt="twitter" />
            <Image src={LinkedIn} className="cursor-pointer" alt="linkedin" />
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-5 md:grid-y-0 md:gap-x-32 mt-6 md:mt-0">
            <div>
              <p className="text-xl font-bold">What We Do</p>
              <div className="gap-y-2 flex flex-col pt-4 text-sm">
                <Link href="#">
                  <p className="">Web Design</p>
                </Link>
                <Link href="#">
                  <p className="">App Design</p>
                </Link>
                <Link href="#">
                  <p className="">Social Media Manage</p>
                </Link>
                <Link href="#">
                  <p className="">Market Analysis Project</p>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Company</p>
              <div className="gap-y-2 flex flex-col pt-4 text-sm">
                <Link href="#">
                  <p className="">About Us</p>
                </Link>
                <Link href="#">
                  <p className="">Career</p>
                </Link>
                <Link href="#">
                  <p className="">Become Investor</p>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Support</p>
              <div className="gap-y-2 flex flex-col pt-4 text-sm">
                <Link href="#">
                  <p className="">FAQ</p>
                </Link>
                <Link href="#">
                  <p className="">Policy</p>
                </Link>
                <Link href="#">
                  <p className="">Business</p>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">Contact</p>
              <div className="gap-y-2 flex flex-col pt-4 text-sm">
                <Link href="#">
                  <p className="">WhatsApp</p>
                </Link>
                <Link href="#">
                  <p className="">Support 24</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-gray-300 text-[#6B7280] mt-10">
        <p className="text-center text-xs">
          Copyright © 2023. All rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
