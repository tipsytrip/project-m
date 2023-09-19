import React from "react";
import Image from "next/image";
import Logo from "@/img/svg/vercel.svg";
import {
  BsPeopleFill,
  BsFillCalendar2EventFill,
  BsFillAirplaneFill,
  BsFillStarFill,
} from "react-icons/bs";

function HelpToFindCommunity() {
  return (
    <main className="bg-light-mode-blue-4 flex justify-center items-center invisible h-0 lg:visible lg:h-[300px]">
      <div className="grid grid-cols-2 container h-2/3">
        <section className="flex justify-center items-center">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="grid grid-cols-2 w-full h-full">
            <section>
              <div className="h-[50%] flex justify-start items-center">
                <div className="flex gap-3">
                  <div className="flex justify-center items-center">
                    <BsPeopleFill size={55} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">5.324.234</h2>
                    <h4 className="text-md">Members</h4>
                  </div>
                </div>
              </div>
              <div className="h-[50%] flex justify-start items-center">
                <div className="flex gap-3">
                  <div className="flex justify-center items-center">
                    <BsFillCalendar2EventFill size={55} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">9.324.234</h2>
                    <h4 className="text-md">Tour Events</h4>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="h-[50%] flex justify-start items-center">
                <div className="flex gap-3">
                  <div className="flex justify-center items-center">
                    <BsFillAirplaneFill size={55} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">1.389.489</h2>
                    <h4 className="text-md">Tour Destinations</h4>
                  </div>
                </div>
              </div>
              <div className="h-[50%] flex justify-start items-center">
                <div className="flex gap-3">
                  <div className="flex justify-center items-center">
                    <BsFillStarFill size={55} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">7.324.384</h2>
                    <h4 className="text-md">Positive Reviews</h4>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HelpToFindCommunity;
