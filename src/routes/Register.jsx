import React from "react";

import { motion } from "framer-motion";

export default function Register() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      Register
    </motion.div>
  );
}
