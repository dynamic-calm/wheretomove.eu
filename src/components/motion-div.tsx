"use client";

import { motion } from "framer-motion";

export default function Mdiv({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 0 }}
      whileInView={{ opacity: 1, translateY: -10 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
