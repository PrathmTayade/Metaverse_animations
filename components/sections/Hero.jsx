"use client";

import styles from "@/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import cover from "../../public/cover.png";
import stampImg from "../../public/stamp.png";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={textVariant(1.1)}
          className="text-[44px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[74.4px] md:text-[100px] md:leading-[114.4px] lg:text-[144px] lg:leading-[158.4px]"
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div
            className={
              "mx-[6px] h-[38px] w-[60px] rounded-r-[50px] border-[9px] border-white sm:mx-2 sm:h-[48px] sm:w-[80px] md:h-[108px] md:w-[212px] md:border-[18px]"
            }
          />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative -mt-[12px] w-full md:-mt-[20px]"
      >
        <div className="hero-gradient absolute -top-[30px] z-[0] h-[300px] w-full rounded-tl-[140px]" />

        <Image
          src={cover}
          alt="hero_cover"
          className="relative z-10 h-[350px] w-full rounded-tl-[140px] object-cover sm:h-[500px]"
        />

        <Link href="#explore">
          <div className="relative z-10 -mt-[50px] flex w-full justify-end pr-[40px] sm:-mt-[70px]">
            <Image
              src={stampImg}
              alt="stamp"
              className="h-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px]"
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
