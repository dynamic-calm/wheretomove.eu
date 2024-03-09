"use client";
import { motion } from "framer-motion";

export default function IndecisionAnimation() {
  return (
    <motion.div
      className="flex h-96 w-96 items-center justify-center md:h-60 md:w-60 lg:h-96 lg:w-96"
      animate={{
        backgroundColor: [
          "#E2E8F0", // slate-200
          "#CBD5E1", // slate-300
          "#94A3B8", // slate-400
          "#64748B", // slate-500
          "#475569", // slate-600
          "#64748B", // slate-500
          "#94A3B8", // slate-400
          "#CBD5E1", // slate-300
          "#E2E8F0", // slate-200
        ],
        color: [
          "#475569", // slate-600
          "#64748B", // slate-500
          "#94A3B8", // slate-400
          "#CBD5E1", // slate-300
          "#E2E8F0", // slate-200
          "#CBD5E1", // slate-300
          "#94A3B8", // slate-400
          "#64748B", // slate-500
          "#475569", // slate-600
        ],
        scale: [0.5, 1, 1, 1, 0.5],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 1,
        type: "tween",
      }}
    >
      <p className="text-7xl">?</p>
    </motion.div>
  );
}
