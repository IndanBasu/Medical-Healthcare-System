import React from "react";
import { assets } from "../../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">

      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* --- Left Section ---- */}

        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6"> Our AI-powered healthcare platform connects patients with trusted doctors and provides intelligent health assistance using modern AI technologies. We aim to make healthcare more accessible, reliable, and personalized.</p>
        </div>

        {/* --- Center Section ---- */}

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* --- Right Section ---- */}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2">
            <li>+98-85-78-76-27</li>
            <li>rios.health.care@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* --- Copyright Text ---- */}

      <div className="border-t border-gray-200">
        <p className="py-5 text-sm text-center">Copyright 2026 @ RIOS Medical Healthcare System - All Rights Reserved.</p>
      </div>
      
    </div>
  );
};

export default Footer;
