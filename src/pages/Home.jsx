import React from "react";
import HeroImage from "../assets/images/heroImg.jpg";

const Home = () => {
  return (
    <div
      className="w-full h-screen text-white flex justify-center items-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[600px] text-center">
        <div className="text-5xl mb-8">INSPIRING GREATNESS</div>
        <div className="text-white/80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum illo
          aliquam ex placeat incidunt saepe vel nihil, ipsum soluta quos, ipsa
          dicta, odit quae perferendis dolor quidem dolore laboriosam! Hic.
        </div>
      </div>
    </div>
  );
};

export default Home;
