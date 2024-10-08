import React from 'react'

const Variety = () => {
  return (
    <div>
        <br /> <br /> 
        <section className=' lg:container flex flex-col md:flex-row lg:p-10 px-10 md:gap-10 gap-4  mx-auto'>
            <div className='md:w-1/2   flex md:items-center justify-center'>
                  <img src="/images/education.svg" alt="" className='md:max-w-[90%] lg:w-[72%]' />
            </div>

            <div className='md:w-1/2 lg:w-2/5 flex flex-col gap-6 mt-6'>
                  <h1 className='text-2xl font-medium '>Free and open market education</h1>
                  <p className='text-base text-[#666]'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                  <a href="" className='font-semibold text-blue-600 hover:scale-105'>Varsity &nbsp;  <i class="fa-solid fa-arrow-right"></i> </a>


                  <p className='text-base text-[#666] '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                  <a href="" className='font-semibold text-blue-600 hover:scale-105'>TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right"></i> </a>
            </div>

        </section>
    </div>
  )
}

export default Variety
