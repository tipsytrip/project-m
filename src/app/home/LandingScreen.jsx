import React from "react";
import Image from "next/image";
import background from "@/img/jpg/airport.jpg";

function LandingScreen() {
  return (
    <section className="relative">
      <Image
        className="brightness-75 h-screen object-cover"
        src={background}
        alt="Background"
        priority
      />
      <section className="absolute top-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center">
        <div>
          <h1 className="text-white mx-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Travel around the world
          </h1>
          <div className="flex justify-center">
            <div className="rounded-full flex gap-2">
              <input
                type="text"
                className="h-10 text-md text-black px-4 w-full lg:w-96 xl:w-[500px] rounded-full focus:border-none"
              />
              <button className="bg-dark-mode-dark px-2 rounded-full w-20 border-white text-white border-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default LandingScreen;
