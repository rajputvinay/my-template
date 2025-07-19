"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { BrainCircuit, GitBranchPlus, ImagePlus } from "lucide-react";
import { motion, Easing } from "framer-motion";

export default function TemplateAI() {
  return (
    <div className="p-6 sm:p-10 grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 grid-rows-4 md:gap-6 gap-4 font-sans">
      {/* own template */}
      <motion.div
        initial={{ opacity: 0, x: -150, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className=" bg-card col-span-2 sm:col-span-1  row-span-2  p-7 shadow-xl rounded-2xl text-left flex 
      flex-col justify-between"
      >
        <h3
          className=" font-semibold mb-1 text-4xl bg-gradient-to-br from-foreground via-purple-800
         dark:via-purple-300 to-primary dark:to-purple-400 bg-clip-text text-transparent"
        >
          Create your own template
        </h3>
        <p className="text-sm text-accent-foreground">
          <span className="font-semibold">14 days trial</span>

          <br />
          <span className="text-xs">after - $5/month</span>
        </p>
      </motion.div>

      {/* tepmlate ai */}
      <motion.div
        initial={{ opacity: 0, y: -150, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className="col-span-2 row-span-2  shadow-xl rounded-3xl bg-gradient-to-br 
        from-[#6B3EFF] to-[#C48EFF] p-6 w-full h-full flex 
        items-center justify-center "
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white ">
          Template Ai
        </h1>
      </motion.div>

      {/* theme toggle */}
      <motion.div
        initial={{ opacity: 0, x: 150, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className="bg-card p-7 shadow-xl rounded-2xl  flex items-center justify-center"
      >
        <ThemeToggle />
      </motion.div>

      {/* 25 m propmts */}
      <motion.div
        initial={{ opacity: 0, x: 150, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className="row-span-1 bg-card p-5 shadow-xl rounded-2xl flex
       text-center items-center justify-center"
      >
        <div>
          <p
            className="text-4xl font-bold bg-gradient-to-br from-foreground via-purple-800
         dark:via-purple-300 to-primary dark:to-purple-400 bg-clip-text text-transparent"
          >
            25M
          </p>
          <p className="text-sm text-white/60">created prompts</p>
        </div>
      </motion.div>

      {/* Top usr */}
      <motion.div
        initial={{ opacity: 0, x: -150, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className="row-span-1 bg-card p-7 shadow-xl rounded-2xl flex items-center justify-center text-center"
      >
        <div>
          <p className="text-4xl text-orange-400 font-bold">20</p>
          <p className="text-md mb-2">Top Users</p>
          <div className="flex space-x-1">
            {[1, 2, 3].map((id, idx) => (
              <img
                key={idx}
                src={`/images/random.jpg`}
                alt={`user${id}`}
                className={`w-8 h-8 rounded-full border-2 border-white ${
                  idx !== 0 ? "-ml-2" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Branching pats */}
      <motion.div
        initial={{ opacity: 0, y: 150, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className="col-span-1 shadow-xl row-span-2 bg-card p-7 rounded-2xl flex items-end"
      >
        <div className="space-y-2">
          <div className="h-12 w-12 bg-orange-400 p-2 rounded-full flex items-center text-white justify-center">
            <GitBranchPlus />
          </div>
          <div>
            <h5 className="font-semibold  mb-1">Branching paths</h5>
            <p className="text-sm ">
              Explore multiple prompt directions with branching.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Ai jorney */}
      <motion.div
        initial={{ opacity: 0, y: 150, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className="row-span-2 shadow-xl bg-card p-7 rounded-2xl flex items-end "
      >
        <div className="space-y-2">
          <div className="w-12 h-12 p-2 bg-purple-600 rounded-full text-white flex items-center justify-center">
            <BrainCircuit />
          </div>
          <div>
            <h5 className="font-semibold  mb-1">AI journey</h5>
            <p className="text-sm ">
              Boost your prompt precision with keywords.
            </p>
          </div>
        </div>
      </motion.div>

      {/* pompt service */}
      <motion.div
        initial={{ opacity: 0, x: 150, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className="col-span-1 shadow-xl row-span-2 bg-card p-7 rounded-2xl"
      >
        <h4 className="font-semibold text-lg mb-2">Prompt Service</h4>
        <p className="text-sm  mb-4">
          Use pre-made templates to jumpstart creativity.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Rewrite", ".PNG", ".JPG", ".PDF"].map((label, idx) => (
            <span
              key={idx}
              className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full"
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* generate buton */}
      <motion.div
        initial={{ opacity: 0, x: -150, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.5, 1, 0.36, 1] as Easing }}
        className="row-span-1 bg-card p-7 shadow-xl rounded-2xl flex items-center justify-center"
      >
        <button
          className="w-full py-2 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full
         text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
        >
          <ImagePlus /> Generate
        </button>
      </motion.div>
    </div>
  );
}
