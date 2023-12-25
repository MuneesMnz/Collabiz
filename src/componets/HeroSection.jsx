import React from "react";
import HeroImage from "../assets/images/heroImg.jpg";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div
      className="w-full h-screen text-white flex justify-center items-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[600px] max-md:w-full text-center">
        <motion.div
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            initial: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl mb-8"
        >
          INSPIRING GREATNESS
        </motion.div>
        <motion.div
          className="text-white/80"
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3 }}
          variants={{
            initial: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum illo
          aliquam ex placeat incidunt saepe vel nihil, ipsum soluta quos, ipsa
          dicta, odit quae perferendis dolor quidem dolore laboriosam! Hic.
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
