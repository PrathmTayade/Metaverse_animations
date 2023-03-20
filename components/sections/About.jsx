"use client";

import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { TypingText } from "..";
const About = () => (
  <section>
    <div className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-[1280px]`}
      >
        <TypingText title="| About Metaversus" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]"
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it &apos;s really real, you can feel what you feel in this
          metaverse world, because this is really the{" "}
          <span className="font-extrabold text-white">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="font-extrabold text-white">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let &apos;s{" "}
          <span className="font-extrabold text-white">explore</span> the madness
          of the metaverse by scrolling down
        </motion.p>
        <motion.img
          src="/arrow-down.svg"
          alt="arrow down"
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="mt-[28px] h-[28px] w-[18px] object-contain"
        />
      </motion.div>
    </div>
  </section>
);

export default About;
