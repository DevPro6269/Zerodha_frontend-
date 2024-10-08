import React from 'react';


const Home = () => {
  return (
    <div>
        <br /> <br /> <br /> <br />
      {/* Hero section */}
      <section className="text-center flex justify-center w-screen">
        <div className="container  flex-col gap-16 flex justify-center items-center">
          <div>
            <img src="/images/homeHero.png" className="mx-auto max-w-[60%]" alt="Hero" />
          </div>
          <div className="flex flex-col gap-5 min-w-[100%]">
            <h1 className="text-[44px] font-medium text-slate-800">Invest in everything</h1>
            <p className='font-normal text-xl'>
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <button className="p-2 self-center bg-blue-700 rounded-sm text-white w-fit text-xl px-7">Sign Up for free</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
