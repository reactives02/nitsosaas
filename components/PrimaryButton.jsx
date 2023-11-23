import Image from 'next/image'
import React from 'react'

function PrimaryButton({title,iconPath,padding,imgWidth,imgHeight}) {
  return (
    <div className={`btn flex gap-2 cursor-pointer bg-[#0a7cff] text-white font-medium py-2 px-${padding} rounded-full shadow-2xl shadow-[#0a7cff]`} >
           {
            iconPath ? 

           <Image src={iconPath} alt='icon' width={imgWidth} height={imgHeight} />
           : ""
           }
          <button>{title}</button>
        </div>
  )
}

export default PrimaryButton