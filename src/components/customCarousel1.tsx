"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import React, { useState } from "react";

const data = [
  { usage: "20k", model: "Alia" },
  { usage: "25k", model: "Soniya" },
  { usage: "23k", model: "Alisha" },
  { usage: "18k", model: "Shakina" },
  { usage: "30k", model: "Anjali" },
  { usage: "15k", model: "Kajol" },
  { usage: "24.5k", model: "Taniya" },
  { usage: "17k", model: "Kaira" },
  { usage: "13k", model: "Sunena" },
  { usage: "16k", model: "Amaira" },
];

const CustomCarousel = () => {
  const [cards, setCards] = useState(data);
  const [swipe, setSwipe] = useState<null | "left" | "right">(null);

  const handleNext = () => {
    setSwipe("right");
    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        newCards.push(newCards.shift()!);
        return newCards;
      });
      setSwipe(null);
    }, 400);
  };

  const handlePrev = () => {
    setSwipe("left");
    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        newCards.unshift(newCards.pop()!);
        return newCards;
      });
      setSwipe(null);
    }, 400);
  };

  return (
    <div className="relative w-full flex items-center justify-center py-10 min-h-screen">
      <motion.button
        initial={{ opacity: 0, y: 50, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onClick={handlePrev}
        className="absolute left-2 sm:left-[10%] z-20 text-secondary-foreground"
      >
        <ChevronLeft size={48} />
      </motion.button>

      <motion.div
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        initial={{ opacity: 0, y: 50, scale: 0.85 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl h-[80vh] flex 
      items-center justify-center"
      >
        <AnimatePresence>
          {cards
            .slice(0, 5)
            .reverse()
            .map((item, idx) => {
              const rotations = [0, -8, 12, -16];
              const isTop = idx === 0;

              return (
                <motion.div
                  key={item.model}
                  initial={{
                    x:
                      isTop && swipe === "left"
                        ? -500
                        : isTop && swipe === "right"
                        ? 500
                        : 0,
                    rotate:
                      isTop && swipe === "left"
                        ? -16
                        : isTop && swipe === "right"
                        ? 16
                        : rotations[idx],
                    opacity: 0,
                    scale: 0.95 + (isTop ? 0.05 : 0),
                  }}
                  animate={{
                    x: 0,
                    rotate: rotations[idx],
                    opacity: 1,
                    scale: 1 - idx * 0.05,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  exit={{
                    x:
                      isTop && swipe === "left"
                        ? -500
                        : isTop && swipe === "right"
                        ? 500
                        : 0,
                    rotate:
                      isTop && swipe === "left"
                        ? -24
                        : isTop && swipe === "right"
                        ? 24
                        : rotations[idx],
                    opacity: 0,
                    scale: 0.9,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  style={{
                    zIndex: 10 - idx,
                  }}
                  className={`absolute inset-0 flex items-center justify-center`}
                >
                  <div
                    className={`w-[80vw] sm:w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] p-6 rounded-3xl border shadow-xl bg-purple-400/30 backdrop-blur-xl 
                text-center flex flex-col justify-between transition-transform duration-700 ease-in-out
                ${
                  isTop && swipe === "right"
                    ? "translate-x-[400px] rotate-12"
                    : ""
                }
                ${
                  isTop && swipe === "left"
                    ? "-translate-x-[400px] -rotate-12"
                    : ""
                }`}
                  >
                    <div
                      className="text-4xl sm:text-4xl font-semibold text-accent dark:bg-gradient-to-br dark:from-[#FFB266] via=[#FFB266] dark:to-[#C04350] 
                    dark:bg-clip-text dark:text-transparent"
                    >
                      {item.usage} Use
                    </div>

                    <img
                      src="/images/girl.png"
                      alt="Avatar"
                      className="w-[50%] mx-auto rounded-full drop-shadow-[0_32px_32px_rgba(168,85,247,0.8)]"
                    />

                    <div className="text-3xl sm:text-3xl font-bold text-white">
                      {item.model}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 50, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onClick={handleNext}
        className="absolute right-2 sm:right-[10%] z-20 text-secondary-foreground"
      >
        <ChevronRight size={48} />
      </motion.button>
    </div>
  );
};

export default CustomCarousel;
