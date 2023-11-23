import React from "react";
import TestmonialCard from "./cards/testmonialCard";
import { testmonialcardData, cardLength } from "@/lib/DataFile";
import PrimaryButton from "./PrimaryButton";


function Testmonials() {
  return (
    <div className="mt-24">
      <h1 className="text-center text-[3rem] sm:mx-[4rem] md:mx-[8rem] lg:mx-[12rem] xl:mx-[18rem] font-bold">
        Client Testimonials, Raving About Our{" "}
        <span className="text-[#6758e3]">Excellence</span>
      </h1>
      <p className="text-center sm:mx-[4rem] md:mx-[8rem] lg:mx-[12rem] xl:mx-[18rem]">
        Discover what our valued clients have to say about their experiences
        with <span className="text-[#0a7cff]">Nitro SaaS</span>. We take pride in delivering top-notch services, and
        their feedback speaks volumes about our commitment to excellence.
      </p>
      <TestmonialCard/>
      <div className="flex justify-center my-10" >
    <PrimaryButton title={"Read More Reviews"} padding={"5"} />
    </div>
    </div>
  );
}

export default Testmonials;
