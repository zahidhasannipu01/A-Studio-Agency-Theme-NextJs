import Container from "@/app/utils/Container";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between py-5">
        <div>
          <p>Logo and Description</p>
        </div>
        <div className="">
          <div className="grid grid-cols-4 gap-x-32 ">
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
