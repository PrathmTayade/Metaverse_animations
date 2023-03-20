"use client";

import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText, TypingText } from "..";
import map from "../../public/map.png";

const World = () => (
  <section className=" xs:p-8   relative z-10 px-6 py-12 sm:p-16">
    <motion.div
      variants={staggerContainer}
      whileInView={"show"}
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex w-full flex-col gap-8 2xl:max-w-[1280px]"
    >
      <TypingText title={"| People on the world "} className="text-center " />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        className="text-center"
      />
    </motion.div>
    <motion.dv
      variants={fadeIn("up", "tween", 0.3, 1)}
      className="relative mt-[68px] flex h-[550px] w-full"
    >
      <Image src={map} alt="map" className="object-cover" />

      <div className="absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
        <Image
          src="/people-01.png"
          height={500}
          width={500}
          alt="people"
          className="h-full w-full"
        />
      </div>

      <div className="absolute top-10 left-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
        <Image
          src="/people-02.png"
          height={500}
          width={500}
          alt="people"
          className="h-full w-full"
        />
      </div>

      <div className="absolute top-1/2 left-[45%] h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]">
        <Image
          src="/people-03.png"
          height={500}
          width={500}
          alt="people"
          className="h-full w-full"
        />
      </div>
    </motion.dv>
  </section>
);

export default World;
