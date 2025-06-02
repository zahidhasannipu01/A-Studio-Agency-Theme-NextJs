import Container from "@/app/utils/Container";
import React from "react";
import logo from "../../../public/assets/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <Container>
      <div className="flex justify-between py-10">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <nav>
            <ul className="flex gap-x-[60px]">
              <li>
                <a href="#" className="font-bold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="font-bold">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#" className="font-bold">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="font-bold">
                  Project
                </a>
              </li>
              <li>
                <a href="#" className="font-bold">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Header;
