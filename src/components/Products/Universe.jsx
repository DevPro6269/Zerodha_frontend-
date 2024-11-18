import React from 'react'
import UniverseDiv from './UniverseDiv'

const Universe = () => {
  return (
    <section className='mx-auto flex flex-col gap-12 items-center container'>
        <h1 className='text-4xl'>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='grid grid-cols-3 grid-rows-2 gap-10 '>
           <UniverseDiv  link={"images/zerodhaFundhouse.png"} />
           <UniverseDiv link={"images/sensibullLogo.svg"}/>
           <UniverseDiv link={"images/tijori.svg"}/>
           <UniverseDiv link={"images/streakLogo.png"}/>
           <UniverseDiv link={"images/smallcaseLogo.png"}/>
           <UniverseDiv link={"images/dittoLogo.png"}/>
        </div>
       
        <button className="p-2 self-center bg-blue-700 rounded-sm text-white w-fit text-xl px-7">Sign Up for free</button>
    </section>
  )
}

export default Universe