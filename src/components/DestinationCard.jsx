import Image from "next/image";
import React from "react";

function DestinationCard({ image }) {
  return (
    <button
      href="#"
      className="group rounded-lg border-transparent w-fit h-fit px-3 py-3 transition-colors flex flex-col"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={image}
        alt="some place"
        className="w-[288px] h-[170px] object-cover rounded-md group-hover:scale-105 transition-transform mb-3"
      />
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {`Tempat Wisata `}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
        Find in-depth information about Next.js features and API.
      </p>
    </button>
  );
}

export default DestinationCard;
