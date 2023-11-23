import { showCaseSubHeading } from "@/lib/DataFile";
import React from "react";
import RoundedSlog from "../roundedSlog";

function CommonSlog({ pathImg, direction, dimensions, imgClasses }) {
  return (
    <>
      <div
        className={`flex ${direction} justify-between  flex-wrap shadow-custom pt-[39px] pl-[40px] rounded-lg mr-20 mt-10`}
      >
        <div className={dimensions}>
          <h1 className="text-[1.5rem] text-[#31373d] tracking-tighter leading-tight font-semibold">
            {" "}
            {showCaseSubHeading}
          </h1>
          <div className="mt-6">
            <RoundedSlog />
          </div>
        </div>
        <div className={imgClasses}>
          <img className={`rounded-lg h-[80%] w-100%`} src={pathImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default CommonSlog;
