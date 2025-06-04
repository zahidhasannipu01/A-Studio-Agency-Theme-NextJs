"use client";
import React, { useState } from "react";
import logo from "../../../public/assets/logo/logo.svg";
import Image from "next/image";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block md:hidden bg-white shadow-md p-4 fixed -top-1.5 z-50 w-full">
      <div className="flex justify-between items-center">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="ml-auto">
          <Box sx={{ display: "flex" }}>
            <Button
              variant="soft"
              color="neutral"
              onClick={() => setOpen(true)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              )}
            </Button>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <ModalClose />
              {/* <DialogTitle>Title</DialogTitle> */}
              <Box sx={{ p: 2 }}>
                <div>
                  <nav>
                    <ul className="flex flex-col gap-y-[20px]">
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
              </Box>
            </Drawer>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
