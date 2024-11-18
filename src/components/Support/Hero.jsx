import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" w-full bg-blue-600">
        <section className="container mx-auto flex gap-12 p-6 text-white">
          <div className="flex flex-col gap-12 p-6 text-white w-3/5">
            <h1 className="text-2xl font-medium">Support Portal</h1>
            <p className="text-2xl font-medium">Search for an answer or browse help topics to create a ticket</p>
            <div className="flex">
              <input type="text" name="" placeholder="eg-" className="w-2/3 h-14 outline-none p-2 text-black" id="" />
              <div className="bg-white flex justify-center items-center p-2 text-black"><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>
            <div className="flex gap-8 flex-wrap underline ">
              <p >Track account opening</p>
              <p>Track segment activation</p>
              <p> Intraday margins</p>
              <p>Kite user manual</p>
            </div>
            </div>
          <div className="w-2/5 h-full"></div>
        </section>
      </div>
    </>
  );
};

export default Hero;
