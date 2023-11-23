import { showCaseHeading, showCaseSubHeading } from "@/lib/DataFile";
import React from "react";
import RoundedSlog from "../roundedSlog";
import CommonSlog from "./commonslog";

function ShowCaseOne() {
  return (
    <div className="flex pt-20">
      <img className="px-8 h-6" src={"/img/showcase/logo.png"} alt="" />
      <div>
        <h1 className="text-[2rem] sm:text-[3rem] text-left lg:w-[50%] tracking-tighter leading-tight font-bold">
          {showCaseHeading}
        </h1>
        <RoundedSlog />
        <div className="">
          <CommonSlog
            pathImg="/img/showcase/laptop.png"
            direction="md:flex hidden flex-row h-[80vh]"
            dimensions="sm:w-[45%] w-[100%]"
            imgClasses="flex h-[100%] justify-end items-end w-[50%]"
          />
        </div>
        <div className="flex mb-[2rem]">
          <div className="md:w-[49%] w-[100%]">
            <CommonSlog
              pathImg="/img/showcase/web.png"
              direction="inline-block"
              dimensions="w-[100%]"
              imgClasses="h-[100%] w-[100%] pt-16"
            />
          </div>
          <div className="md:w-[49%] w-[100%] md:flex hidden">
            <CommonSlog
              pathImg="/img/showcase/mob.png"
              direction="md:flex hidden"
              dimensions="w-[100%]"
              imgClasses="w-[100%] flex justify-center items-end"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex items-center">
            <img src="/img/showcase/king.png" className="h-6" alt="" />
            <h2 className="font-bold text-[1.2rem] mt-1">CTR Boss</h2>
          </div>

          <p className="lg:w-1/2 lg:ml-[18rem] font-semibold">
            "CTR Boss has transformed my digital marketing game. Its precise
            analytics and AI-powered suggestions have boosted my click-through
            rates and campaign performance significantly."
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mt-10 ">
         <div>
         <h2 className="font-bold text-[0.7rem] ml-6">Read full stroy</h2>
         </div>

          <div className=" flex md:w-[50%] gap-4 items-center font-medium">
            <img src="/img/showcase/josph.png" className="h-10" alt="" />
            <div>
              <h2>Josh</h2>
              <p>Founder & CEO, CTR Boss</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCaseOne;
