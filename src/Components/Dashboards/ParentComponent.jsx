import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../../Pages/LandingPage";

const ParentComponent = () => {

  

  return (
    <AnimatePresence mode="wait">
        <motion.div
          key="hero"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection/>
        </motion.div>
    </AnimatePresence>
  );
};

export default ParentComponent;
