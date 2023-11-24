import { testmonialcardData } from "@/lib/DataFile";
import React from "react";

function TestmonialCard() {
  return (
     <>
     <div className="flex flex-wrap justify-evenly mt-10">
     {
        testmonialcardData.map((item,idx)=>(
            <div key={idx} className=" w-[250px] shadow-custom rounded-lg pt-3 px-6 pb-3 m-4">
      <div className="header relative flex gap-4 mb-4">
        <div className="flex">
          <img
            className=" rounded-full h-[42px] w-[42px]"
            src="/img/testmonial/dp.png"
            alt=""
          />
          <div className=" absolute left-8  mt-8">
            <img
              className=" h-3  w-3 z-10"
              src="/img/testmonial/dp-icon.png"
              alt=""
            />
          </div>
        </div>
        <div className="font-medium">
          <h1>{item.name}</h1>
          <h1>{item.company}</h1>
        </div>
      </div>
      <div className="body flex flex-col gap-4">
        <h1 className="title text-[0.8rem] font-medium">
           {item.title}
        </h1>
        <p className="text-[0.7rem] font-medium">
          {item.description}
        </p>
        <p className="text-[#171945] text-xs">Feb 16, 2022</p>
      </div>
    </div>
        ))
     }
     </div>
     </>
  );
}

export default TestmonialCard;
