import React from 'react'

function Contact() {
  return (
    <div className='bg-[#0a7cff] py-1 flex items-center justify-center mt-16 flex-grow-1 flex-shrink-0 flex-wrap'>
        <div className='md:ps-32 md:pt-0 pt-20 w-[50%] md:text-left text-center' >
            <h1 className='text-[2.3rem]  font-bold text-white'>
                <span className='text-[#84beff]'> Contact Us and</span> Let's Discuss Your Project
            </h1>
            <button className='text-[#0a7cff] bg-white py-3 px-8 mt-3 font-medium rounded-xl'>Contact Us</button>
        </div>
        <img  className='w-[100%] h-[100%] md:w-[50%] md:mt-0 mt-20 ' src="/img/contact.png" alt="" />
    </div>
  )
}

export default Contact