"use client";

import { useState } from "react";
import AnimatedTabs from "./animated-tabs";
import { MotionConfig } from "framer-motion";

export default function Demo() {
  let [speed, setSpeed] = useState(1);

  return (
    <div className="w-full h-full relative flex aspect-[5/4] min-w-0 flex-col items-center justify-center rounded-lg bg-gray-800 sm:aspect-[4/3] md:aspect-[2/1]">
      <div className="absolute right-0 top-0 inline-flex space-x-3 p-4">
        {[0.1, 1].map((factor) => (
          <button
            key={factor}
            onClick={() => setSpeed(factor)}
            className={`${
              factor === speed ? "text-white" : "text-white/50 hover:text-white"
            } inline-flex h-8 w-8 items-center justify-center rounded text-sm font-semibold transition`}
          >
            {factor}x
          </button>
        ))}
      </div>

      <MotionConfig
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6 / speed,
        }}
      >
        <AnimatedTabs />
      </MotionConfig>
    </div>
  );
}
