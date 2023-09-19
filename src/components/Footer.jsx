import React from "react";
import Image from "next/image";
import Logo from "@/img/svg/vercel.svg";

function Footer() {
  return (
    <footer className="mt-32 grid text-center lg:mb-0 grid-cols-1 md:grid-cols-3 lg:grid-cols-10 lg:text-left bg-light-mode-blue-4 w-full lg:h-64">
      <div className="invisible lg:visible lg:col-span-1"></div>
      <div className="col-span-1 md:col-span-3 lg:col-span-4 flex justify-center items-center m-10">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="col-span-1 lg:col-span-1 mt-10 flex justify-center">
        <div className="text-left w-48">
          <h3 className="text-lg font-bold mb-5">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 mt-10 flex justify-center">
        <div className="text-left w-48">
          <h3 className="text-lg font-bold mb-5">Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="invisible md:visible md:col-span-1 lg:col-span-2 mt-10">
        <div>
          <h3 className="text-lg font-bold mb-5">Stay Up to date</h3>
          <input
            type="text"
            className="rounded-md px-3 h-8 w-44"
            placeholder="E-Mail"
          />
        </div>
      </div>
      <div className="invisible lg:visible lg:col-span-1"></div>
    </footer>
  );
}

export default Footer;
