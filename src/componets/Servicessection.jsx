import React from "react";

const Servicessection = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="h-auto w-full mx-auto py-[60px] bg-[#F0F6FF]">
      <div className="flex justify-center ">
        <h1 className="text-4xl font-semibold text-primary mb-14 ">
          Services <span className="text-secondary">We Offer</span>
        </h1>
      </div>
      <div className=" xl:w-[1200px] max-md:w-full px-10 max-md:px-5 max-sm:grid-cols-1 mx-auto grid grid-cols-4 max-lg:grid-cols-2 gap-10">
        {data.map((item, ind) => (
          <div key={ind} className="w-full h-[400px] bg-white p-5 rounded-md shadow-md
           hover:shadow-xl cursor-pointer duration-300">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Servicessection;
