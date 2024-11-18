import React from 'react'

export const LeftToRight = ({
    title,content,link
}) => {
  return (
    <>
    <section className='flex mx-auto gap-44 justify-center container'>
      <div className=''>
        <img src={link} alt="" />
      </div>


      <div className='w-1/4 flex flex-col gap-8 justify-center'>
        <h1 className='text-4xl'>{title}</h1>
        <p className='text-lg'>{content}</p>
        <div className='flex gap-16'>
            <p className='text-lg text-blue-600'>Try demo →</p>
            <p className='text-lg text-blue-600'>Learn more →</p>
        </div>
        <div className='flex gap-4'>
            <img src="images/googlePlayBadge.svg" alt="" />
            <img src="images\appstoreBadge.svg" alt="" />
        </div>
      </div>
    </section>
    <br /> <br /> <br />  <br /> <br /> <br />

    </>
  )
}
