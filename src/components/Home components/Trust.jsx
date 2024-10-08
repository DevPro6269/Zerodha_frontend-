import React from 'react'


const Trust = () => {
  return (
    <div>
      <br /> <br /> <br />
        <section className=' lg:container flex p-4 md:flex-row flex-col mx-auto'>
            <div className=' md:w-[35%] w-full flex flex-col  lg:ml-12 p-2 gap-8'> 
           <h1 className='text-3xl font-medium'>Trust with confidence </h1>           
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl '>Customer-first always</h1>
              <p className='text-[#666]'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl'>No spam or gimmicks</h1>
              <p className='text-[#666]'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl'>The Zerodha universe</h1>
              <p className='text-[#666]'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl'>Do better with money</h1>
              <p className='text-[#666]'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            
            </div>
            <div className='md:w-[65%] w-full p-2 flex flex-col md:justify-center items-center'>
            <img src="/images/ecosystem.png" className='max-w-[90%] lg:max-w-[70%]' alt="" />
            <div className='flex justify-around w-3/4 '>
              <a href="" className='hover:text-blue-600'>Explore our products &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
              <a href="" className='hover:text-blue-600'>Try Kite demo &nbsp; <i class="fa-solid fa-arrow-right"></i> </a>
            </div>
            </div>
            
        </section>
        <br /> <br /> <br /> <br />
          <div className='container '>
          <img src="/images/pressLogos.png" className='mx-auto' alt="" />
          </div>
       
    </div>
  )
}

export default Trust