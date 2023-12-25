import React from "react";
import AdveIcon from "../assets/icons/laptop1.webp";
import AppDevIcon from "../assets/icons/planning1.webp";
import { motion } from "framer-motion";

const AboutSection = () => {
  const data = [
    {
      icon: AdveIcon,
      heading: "ADVERSORY",
      subHeading: "Your Reliable Advertise Partner",
    },
    {
      icon: AppDevIcon,
      heading: "SOFTWARE SOLUTIONS",
      subHeading: "Your Technology Specialists",
    },
    {
      icon: AppDevIcon,
      heading: "APPLICATION MANAGEMENT",
      subHeading: "Your Global Delivery Workforce",
    },
  ];
  return (
    <div id="#About" className="w-[80%] max-lg:w-full mx-auto  py-[60px] ">
      <motion.h1
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          initial: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl max-md:text-3xl font-semibold text-primary mb-14 text-center "
      >
        What We Do For You? <span className="text-secondary">Every Day.</span>
      </motion.h1>
      <div className="flex justify-center items-center xl:w-[1100px] mx-auto sm:w-full max-md:flex-col gap-10 max-lg:gap-3">
        {data.map((item, ind) => (
          <motion.div
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 ,delay:ind*0.3 }}
          variants={{
            initial: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
            className=" about-box-container group w-[270px] max-md:w-[300px] h-[420px] shadow-xl text-primary p-8
             rounded-md duration-300 hover:bg-primary hover:text-white hover:font-[500]
              hover:scale-[1.02] cursor-pointer"
            key={ind}
          >
            <img src={item.icon} alt="" className="icon w-[60px] mb-7 " />
            <h4 className=" uppercase  font-[500] text-sm  mb-2">
              {item.heading}
            </h4>
            <h3 className="text-font-semibold text-secondary group-hover:text-white mb-5 ">
              {item.subHeading}
            </h3>
            <p className="text-textColor group-hover:text-white font-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              est assumenda suscipit vel. Dolor exercitationem inventore
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
