import React from "react";
import { BsTwitter,BsLinkedin, BsHeart } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#1C1D1F] px-10 py-8 mt-16">
      <img src="/img/Logo.png" alt="" />
      <div className="flex justify-evenly mt-3 sm:flex-row flex-col gap-6">
        <div className="text-white">
          <h2 className="font-medium">Services</h2>
          <ul className="flex flex-col gap-3 text-[0.6rem] font-extralight mt-3">
            <li>Web App Development</li>
            <li>Mob App Development</li>
            <li>Product/UIUX Design</li>
            <li>ML/AI</li>
            <li>Dev Oops Eng</li>
          </ul>
        </div>
        <div className="text-white">
          {" "}
          <h2 className="font-medium">Company</h2>
          <ul className="flex flex-col gap-3 text-[0.6rem] font-extralight mt-3">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Career</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="text-white">
          {" "}
          <h2 className="font-medium">About </h2>
          <ul className="flex flex-col gap-3 text-[0.6rem] font-extralight mt-3">
            <li>000 0000 0000</li>
            <li>nitrosaas@mail.com</li>
            <li>nitro saas address street, city, XYZ</li>
          </ul>
        </div>
        <div className="text-white">
          <h2 className="font-medium">Let’s Discuss Your Project</h2>
          <button className="text-[#0a7cff] bg-white py-3 px-8 mt-3 font-medium rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
      <hr className="mt-8 h-[0.01rem] border-0  bg-[#3F3F3F]" />
      <div className="flex items-center justify-between md:flex-row flex-col">
        <div className="flex items-center gap-0 xs:gap-2 mt-4 text-white font-extralight text-[0.5rem] sm:text-[0.8rem]">
          <p>Copyright 2023 © Nitro SaaS • Made with </p>
          <img
            className="h-[10px] w-[10px] xs:h-[20px] xs:w-[20px]  sm:h-[32px] sm:w-[32px]"
            src="/img/heart.png"
            alt=""
          />
         
          <p>By <span className="text-[#6758e3] underline">Abdul'sDesk</span></p>
        </div>
       <div className="flex gap-8 mt-5">
       <div className="flex items-center gap-1 text-white text-[0.5rem] sm:text-[0.8rem] font-extralight">
            <p>Terms & Conditions</p>
            <p>.</p>
            <p>Privacy Policy</p>
        </div>
        <div className="flex items-center gap-2 text-white "> 
            <BsTwitter/>
            <img src="/img/globe.png" alt="" />
            <BsLinkedin/>
        </div>
       </div>
      </div>
    </footer>
  );
}

export default Footer;
