import React from 'react'

const UniverseDiv = ({
    link
}) => {
  return (

    <> 
     <div className='flex flex-col gap-2 p-2 items-center justify-center'>
    <img src={link} className='w-48' alt="" />
    <span className ="text-sm text-gray-400 text-center">Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</span>
</div>    
 </>
    
  )
}

export default UniverseDiv