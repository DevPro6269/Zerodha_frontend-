import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="container mx-auto  ">
        <h1 className="text-4xl px-56 py-32    ">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
        <hr />
      </section>
      <br /> <br /> <br /> <br />
      <section className="container flex gap-10 text-lg  text-slate-700 mx-auto justify-center">
        <div className="flex flex-col gap-5 w-1/3  ">
          <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
          <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
          <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes</p>
        </div>
        <div className="flex flex-col gap-5 w-1/3  ">
         <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
         <p><Link to="/path">Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
         <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
