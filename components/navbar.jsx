// "use client"
// import { LINKS, YOUR_MAIL, YOUR_NAME } from '@/lib/DataFile'
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Navbar = () => {
//   const [active,setactive] = useState("Home")
//   return (
//     <navbar className=' flex flex-col justify-center sm:flex-row items-center sm:justify-around sm:py-4'>
      
//       <h2 className='font-semibold'>{YOUR_NAME}</h2>
//       <ul className='flex flex-wrap justify-center sm:gap-2 items-center'>
//           { 
//             LINKS.map((link,idx)=> (
//               <li className='mx-2 justify-center' >
//                 <Link className= {`text-gray-400 text-sm ${active===link.name? "text-gray-950 font-medium ":""}`} href={link.hash}>{ link.name }</Link>
//               </li>
//             ))
//           }
//         <div className='hidden sm:block bg-gradient-to-r from-[#9249F2] to-[#FF5F49] p-[0.05rem] rounded-sm'>
//         <div className='bg-white p-[0.01rem] '>
//         <div className='font-medium text-base  px-3 py-1 z-10 !bg-gradient-to-r !from-[#9249f21f] !to-[#ff5f491f] '>{YOUR_MAIL}</div>
//         </div>
//         </div>
//       </ul>
    
//     </navbar>
//   )
// }

// export default Navbar


import React from 'react'
import { LINKS } from '@/lib/DataFile'
import BtnIcon from '@/public/img/btn.png'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <navbar className="flex justify-between items-center px-10 bg-[#0e051c] text-white py-3">
      <div className="brand uppercase font-semibold text-xl">
        <img src="/img/Logo.png" alt="" />
      </div>
      <div className="links flex items-center gap-14">
        <ul className='hidden sm:flex sm:gap-6'>
         {
          LINKS.map((link,idx)=>(
            <li key={idx} className='text-[0.82rem]'>
              {link.name}
            </li>
          ))
         }
        </ul>
        <div className="hidden sm:block">
        <PrimaryButton title={"Contact Us"} iconPath={'/img/btn.png'} imgWidth={16.5} imgHeight={14} padding='3'/>
        </div>
        <div className="block sm:hidden bg-[#0a7cff] p-4 rounded-full">
         <HiMenuAlt3/>
        </div>
      </div>
    </navbar>
  )
}
