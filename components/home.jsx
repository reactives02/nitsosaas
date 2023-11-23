import React from "react";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
import { WiStars } from "react-icons/wi";
export default function Hero() {
  return (
    <div className="bg-[#100326] text-white h-[48rem] sm:h-[70rem]">
      <div className="flex flex-col justify-center items-center pt-10 ">
        <span
          className={`flex items-center border border-white px-3 rounded-full `}
        >
          <WiStars className="text-[1.82rem]" />
          <p className={`text-[0.7rem]`}>
            Crafting Innovative Solutions for a Digital World
          </p>
        </span>
        <h1 className="mt-10 text-[2.5rem] sm:text-[4rem] text-center font-bold sm:mx-20">
          Elevate Your Digital Presence with Nitro SaaS
        </h1>
        <p className="mx-4 sm:mx-48 text-center text-[0.8rem] mb-10 leading-5">
          Welcome to Nitro SaaS, where technology meets imagination, and
          innovation knows no bounds. We are your trusted partner in creating
          cutting-edge software solutions, designing captivating user
          experiences, and harnessing the power of artificial intelligence.
          Together, let's redefine the future of your business.
        </p>
        <PrimaryButton
          title={"Lets Explore"}
          iconPath={"/img/wistars.png"}
          imgWidth={16}
          imgHeight={10}
          padding={"10"}
        />
        
        <Image
          className=" hidden sm:block mt-10 "
          src="/img/hero-img.png"
          alt="sample"
          width={1200}
          height={200}
        />
      
      </div>
    </div>
  );
}
