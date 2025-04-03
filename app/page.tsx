"use client";
import TextGenerateEffect from "@/components/text-animation/text-generate-effect";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    if (isInView) {
      console.log("Element is in view");
    } else {
      console.log("Element is not in view");
    }
  }, [isInView]);
  return (
    <div className="min-h-screen container mx-auto  flex justify-center items-center gap-[20px] flex-wrap">
      <motion.div
        animate={{
          rotate: 360,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        initial={{
          scale: 0,
        }}
        className="w-[150px] h-[150px] bg-amber-600 rounded-2xl"
      ></motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        className="w-[150px] h-[150px] bg-blue-950 rounded-2xl"
      />
      <div className="flex flex-col gap-3 ">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              ref={ref}
              className="w-[150px] h-[150px] bg-rose-800 rounded-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            />
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="w-[150px] h-[60px] bg-rose-800 rounded-2xl text-white cursor-pointer"
          whileTap={{
            scale: 0.8,
          }}
        >
          {isVisible ? "Hide" : "Show"}
        </motion.button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-[150px] h-[150px] bg-slate-700 rounded-2xl "></div>
        <motion.button whileTap={{ scale: 0.96 }} className="bg-slate-700 text-white rounded-2xl w-[150px] h-[60px] cursor-pointer ">
          Toggle position
        </motion.button>
      </div>
    </div>
  );
}
