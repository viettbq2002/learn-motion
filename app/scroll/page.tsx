import Reveal from "@/components/reveal/reveal";
import { motion } from "motion/react";
import React from "react";

const ScrollPage = () => {
  return (
    <div className="container mx-auto space-y-10">
      <div className="h-[2000px] w-full bg-red-200"></div>
      <Reveal>
        <div className="h-[200px] w-full bg-green-200"></div>
      </Reveal>
      <Reveal direction="left">
        <p className="text-2xl py-4 text-left"> This text will From left to right</p>
      </Reveal>
      <Reveal direction="right">
        <p className="text-2xl py-4 text-right"> This text will From right to left</p>
      </Reveal>
    </div>
  );
};
export default ScrollPage;
