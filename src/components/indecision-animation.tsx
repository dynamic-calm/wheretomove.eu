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
        rotate: [0, 360, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 5
      }}
    >
      <p className="text-7xl">?</p>
    </motion.div>
  );
}
