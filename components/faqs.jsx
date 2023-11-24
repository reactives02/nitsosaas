import React from "react";
import Question from "./question";
import { BsLightningChargeFill, BsLightningCharge } from "react-icons/bs";
import { QA } from "@/lib/DataFile";

function Faqs() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-[2rem] sm:text-[3rem] font-bold text-center sm:w-[95%] lg:w-[65%] xl:w-[55%] md:w-[95%] mt-10">
        Frequently Asked Questions{" "}
        <span className="text-[#6758e3]">(FAQs)</span>
      </h1>
      <p className="mt-6 mb-8">
        Discover quick answers to common queries. Can't find what you need?{" "}
        <span className="text-[#6758e3]">Reach out</span>, and we'll assist you
        promptly.
      </p>
       {
        QA.map((items,idx)=> (
            <Question
              key={idx}
        question={items.question}
        icon={items.icon}
        answer={items.answer}
      />
        ))
       }
    </div>
  );
}

export default Faqs;
