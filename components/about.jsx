import React from "react";
import { PiGraphBold, PiGitBranch, PiInfinity, PiCpu } from "react-icons/pi";
import InlineIconText from "./inlineIconText";
function About() {
  return (
    <div className="bg-[#282B30] md:mx-14 sm:rounded-xl py-10 px-[3rem] mb-4 flex flex-col justify-center md:flex-row ">
      <div className="w-[100%] md:w-[60%] text-white">
        <h1 className="text-[2.3rem] font-bold">Why Choose Nitro SaaS?</h1>
        <p className="text-[0.7rem] leading-loose tracking-wide w-[100%] mt-2">
          At Nitro SaaS, we understand that choosing the right Software as a
          Service (SaaS) provider is a crucial decision for your business.
          Here's why we stand out
        </p>
        <div className=" bg-white w-[80%] md:w-[100%] sm:w-[60%] rounded-xl p-4 my-6 shadow-2xl">
          <InlineIconText
          classes={
            "flex items-center text-[1.3rem] font-semibold gap-1 mb-1 text-[#0a7cff]"
          }
          title={"Tailored SaaS Solutions"}
          icon={<PiGraphBold />}
        />
          <p className="text-[#969696] text-[0.8rem]">
            Nitro SaaS specializes in crafting customized SaaS solutions
            perfectly aligned with your unique business goals, not offering
            one-size-fits-all options.
          </p>
        </div>
        <InlineIconText
          classes={
            "flex items-center text-[1.2rem] font-medium gap-1 text-white my-3"
          }
          title={"Cutting-Edge Technology"}
          icon={<PiGitBranch />}
        />
        <InlineIconText
          classes={
            "flex items-center text-[1.2rem] font-medium gap-1 text-white my-3"
          }
          title={"User-Centric Design"}
          icon={<PiInfinity />}
        />
        <InlineIconText
          classes={
            "flex items-center text-[1.2rem] font-medium gap-1 text-white"
          }
          title={"Data-Driven Insights"}
          icon={<PiCpu />}
        />
        
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <img className="w-[100%] h-[100%] sm:h-[10%] md:h-[60%]" src="/img/about.png" alt="" />
      </div>
    </div>
  );
}

export default About;
