"use client";
import { newFeatures } from "@/constants";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { NewFeatures, TitleText, TypingText } from "..";
import planet from "../../public/whats-new.png";

const WhatsNew = () => (
  <section className=" xs:p-8 relative z-10 px-6 py-12 sm:p-16">
    <motion.div
      variants={staggerContainer}
      whileInView={"show"}
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex w-full flex-col gap-8 lg:flex-row 2xl:max-w-[1280px]"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-[0.95] flex-col justify-center"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What is new about the Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap  justify-between  gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={"flex flex-1  items-center justify-center"}
      >
        <Image
          src={planet}
          alt="get started"
          className={" h-[90%] w-[90%]   object-contain"}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
