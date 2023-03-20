"use client";
import searchSvg from "../public/search.svg";
import menuSvg from "../public/menu.svg";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView={"show"}
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-1/2"></div>
    <div className={`${styles.innerWidth} mx-auto flex justify-around gap-8`}>
      <div className="h-[24px] w-[24px]">
        <Image src={searchSvg} alt={"search svg "} />
      </div>

      <h2 className="text-[24px] font-extrabold uppercase leading-[30px] text-white ">
        Metaverse
      </h2>
      <div className="h-[24px] w-[24px]">
        <Image src={menuSvg} alt={"menu svg"} />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
