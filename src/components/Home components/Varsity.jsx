
import React from 'react'

const Varsity = () => {
  return (
    <div>
      <br /> <br /> <br /> <br />
        <section className='container mx-auto flex flex-col gap-7 p-6 '>
            <h1 className='text-3xl font-medium lg:ml-6 '>Unbeatable pricing</h1>
            <div className='flex md:ml-6 flex-wrap  md:gap-5 '>
                <p className='text-[#666] lg:w-[30%] text-justify w-full lg:self-end text-base '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <div className='md:w-1/5 w-1/2 flex relative'>
                <img src="images/pricingEquity.svg" className='max-w-32' alt="" />
                <p className='text-[10px] relative self-end -left-7 -top-6  '> Free acocunt <br /> Opening</p>
               </div>
               <div className='md:w-1/5 w-1/2 flex relative'>
                <img src="images/pricingEquity.svg" className='max-w-32' alt="" />
                <p className='text-[10px] relative self-end -left-7 -top-6  '>Free equity delivery <br />
                and direct mutual funds</p>
               </div>
               <div className='md:w-1/5 w-1/2 flex relative'>
                <img src="images/pricingEquity.svg" className='max-w-32' alt="" />
                <p className='text-[10px] relative self-end -left-7 -top-6  '> Intraday and <br />
                F&O</p>
               </div>
            </div>
            <a href="" className='lg:ml-6'>see pricing</a>
        </section>
    </div>
  )
}

export default Varsity