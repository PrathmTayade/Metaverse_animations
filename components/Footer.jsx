"use client";

import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import headset from "../public/headset.svg";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={"xs:p-8 relative px-6 py-8 sm:p-16"}
  >
    <div className="footer-gradient" />
    <div className={"mx-auto flex w-full flex-col gap-8 2xl:max-w-[1280px]"}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] font-bold text-white md:text-[64px]">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex h-fit items-center gap-[12px] rounded-[32px] bg-[#25618B] py-4 px-6"
          onClick={() => {
            alert("You are now entering the world of metaverse");
          }}
        >
          <div className="relative h-[24px] w-[24px] ">
            <Image
              src={headset}
              alt="headset"
              fill
              className="object-contain"
            />
          </div>

          <span className="text-[16px] font-normal text-white">
            Enter Metaverse
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
