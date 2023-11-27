"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      id="about"
      initial="hidden"
      animate="visible"
      className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center px-20 mt-30 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromLeft(1.0)}
        className="w-full h-full flex justify-center items-center "
      >
        <Image
          src="/NavBar.png"
          alt="profile pic"
          // layout="responsive"
          height={300}
          width={300}
        />
      </motion.div>
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Something about me</h1>
        </motion.div>
        <motion.div
          variants={slideInFromRight(1.2)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <h1>Alex Cusenza</h1>
        </motion.div>
        <motion.p
          variants={slideInFromRight(1.4)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Full stack developer with a predilection towards front-end web
          development, especially in the JavaScript environment. React js and
          Next js enthusiast with deep understanding of SEO strategies and an
          eye for the detail.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
