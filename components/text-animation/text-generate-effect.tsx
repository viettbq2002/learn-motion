"use client";
import { useAnimate, motion, stagger } from "motion/react";
import React, { useEffect } from "react";
interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
}
const TextGenerateEffect = ({ words, className, duration }: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, index) => {
          return (
            <motion.span key={word + index} className="text-black opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div className="font-bold">
      <div className="mt-4">
        <div className="text-black text-2xl leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
