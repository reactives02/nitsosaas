import React from 'react'
import { CardData } from "@/lib/DataFile";

function Card() {
  return (
    <>
     {
        CardData.map((data,idx)=> (
            <div key={idx} className="cards w-[400px] rounded-[20px] flex flex-col py-10 px-20 gap-[1rem] items-center bg-[#272a2f]">
        <img className="w-[279px]" src={data.imgPath} alt="" />
        <div className="detail">
          <h2 className="text-[#EDEEF0] font-medium mb-1">{data.title}</h2>
          <p className="text-[0.9rem] text-[#9098A0]"> 
             {data.description}
          </p>
        </div>
      </div>
        ))
     }
    </>
  )
}

export default Card