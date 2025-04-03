import TextGenerateEffect from "@/components/text-animation/text-generate-effect";
import React from "react";

const TextAnimatedPage = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="italic text-3xl ">Text generated</div>
      <div className="flex flex-col w-full">
        <TextGenerateEffect
          words=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ratione atque, eius, ipsa ad culpa quaerat porro corrupti dolore magni
        architecto amet similique tempore facere ullam officia quasi perspiciatis blanditiis?"
        />
      </div>
    </div>
  );
};

export default TextAnimatedPage;
