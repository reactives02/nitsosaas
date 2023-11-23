import { Teams } from "@/lib/DataFile";
import React from "react";
import { WiStars } from "react-icons/wi";
import PrimaryButton from "./PrimaryButton";
import Card from "./cards/card";
import RoundedSlog from "./roundedSlog";

function TrustedClients() {
  return (
    <div className="mt-10">
      <p className="text-center text-[1.5rem] font-bold">Trusted by Teams at</p>

      <ul className="flex flex-wrap md:justify-between justify-center px-10 gap-3 font-semibold my-6">
        {Teams.map((team, idx) => (
          <li key={idx}>{team.name}</li>
        ))}
      </ul>

      <div className="mx-10 mt-10 relative">
        <span
          className={`inline-block border border-[#0a7cff] sm:w-auto w-[100%] px-3 rounded-full absolute top-0 md:left-0 left-[50%] md:translate-x-0 -translate-x-[50%] `}
        >
          <p className="flex items-center w-[100%]">
            <WiStars className="text-[1.82rem] text-[#0a7cff]" />
            <p className={`text-[0.7rem] text-[#0a7cff]`}>
              Crafting Innovative Solutions for a Digital World
            </p>
          </p>
        </span>
        <div className="flex items-center pt-8 flex-shrink-0 gap-4 md:gap-0 md:justify-normal justify-center flex-wrap flex-grow-1">
          <div className="md:w-[55%] w-[100%]">
            <h1 className="text-[3rem] font-bold mt-2 md:text-left text-center">
              Propel your <span className="text-[#0a7cff]">Success</span>
            </h1>
            <RoundedSlog classes={"md:text-left text-center"} />
          </div>
          <div className="flex items-center md:justify-end justify-center md:w-[45%] w-[100%]">
            <PrimaryButton
              title={"Lets Explore"}
              iconPath={"/img/wistars.png"}
              imgWidth={16}
              imgHeight={19}
              padding={"10"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-wrap px-5 gap-6 my-10">
        <Card />
      </div>
    </div>
  );
}

export default TrustedClients;
