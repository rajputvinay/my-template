"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Gift } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Your AI Prompt",
    subtitle: "Prompts templates",
    description: "Use pre-made templates to jumpstart creativity.",
  },
  {
    title: "Your AI Prompt",
    subtitle: "Prompts templates",
    description: "Use pre-made templates to jumpstart creativity.",
  },
  {
    title: "Your AI Prompt",
    subtitle: "Prompts templates",
    description: "Use pre-made templates to jumpstart creativity.",
  },
  {
    title: "Your AI Prompt",
    subtitle: "Prompts templates",
    description: "Use pre-made templates to jumpstart creativity.",
  },
];

const customCarousel2 = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));
  const nextSlide = () =>
    setIndex((prev) => Math.min(prev + 1, cards.length - 1));

  return (
    <div className="relative w-full overflow-hidden py-12 flex items-center justify-center min-h-screen">
      <motion.button
        onClick={prevSlide}
        initial={{ opacity: 0, y: 50, scale: 0.85 }}
        animate={{ opacity: index == 0 ? 0.3 : 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-4 md:left-[10%] text-secondary-foreground  z-999 disabled:opacity-30"
        disabled={index === 0}
      >
        <ChevronLeft size={48} />
      </motion.button>

      <motion.div
        className="relative flex items-center justify-center w-full max-w-6xl"
        animate={{ opacity: 1, y: 0, scale: 1 }}
        initial={{ opacity: 0, y: 50, scale: 0.85 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {cards.map((card, i) => {
          const isActive = i === index;
          const isLeft = i < index;
          const isRight = i > index;

          return (
            <motion.div
              key={i}
              className={`absolute transition-all duration-500 ease-in-out 
                ${
                  isActive
                    ? "z-20 scale-100 blur-0"
                    : "z-10 scale-90 blur-sm opacity-50"
                }
                ${isLeft ? "-translate-x-full -rotate-y-6" : ""}
                ${isRight ? "translate-x-full rotate-y-6" : ""}
              `}
              style={{
                transformOrigin: "center",
              }}
            >
              <div
                className="relative w-[300px] h-[400px] bg-gradient-to-br from-purple-500 via-purple-600
               to-indigo-700 rounded-3xl p-6 shadow-xl backdrop-blur-md text-white flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                    <Gift size={20} />
                  </div>
                </div>

                <div className="text-2xl font-bold leading-tight">
                  {card.title}
                  <br />
                  {card.subtitle}
                </div>

                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.button
        onClick={nextSlide}
        initial={{ opacity: 0, y: 50, scale: 0.85 }}
        animate={{
          opacity: index === cards.length - 1 ? 0.3 : 1,
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-4 md:right-[10%] text-secondary-foreground z-999 disabled:opacity-30"
        disabled={index === cards.length - 1}
      >
        <ChevronRight size={48} />
      </motion.button>
    </div>
  );
};

export default customCarousel2;
