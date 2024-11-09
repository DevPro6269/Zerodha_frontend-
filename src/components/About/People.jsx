import React from "react";

const People = () => {
  return (
    <>
      <br /> <br /> <br />
      <section className="container">
        <h1 className="text-center text-4xl">People</h1>
        <br /> <br /> <br /> <br />
        <div className="flex justify-center ">
          <div className="w-1/3 flex justify-center gap-4 flex-col items-center">
            <div className="h-64 w-64 bg-white rounded-full">
              <img
                src="/images/nithinKamath.jpg"
                alt=""
                className="h-full w-full rounded-full"
              />
            </div>
            <h1 className=" text-xl">Nithin Kamath</h1>
            <p className="text-gray-500 text-sm">Founder, CEO</p>
          </div>
          <div className="w-2/5 text-[17px] text-slate-700 gap-6 flex flex-col">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="" className="text-blue-600">
                Homepage
              </a>{" "}
              /{" "}
              <a href="" className="text-blue-600">
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="" className="text-blue-600">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
    </>
  );
};

export default People;
