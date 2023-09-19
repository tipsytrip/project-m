import Image from "next/image";
import React from "react";

function TourEventCard({ image }) {
  return (
    <button className="block rounded-sm shadow-md shadow-gray-300 hover:scale-105 transition-transform">
      <Image
        src={image}
        alt="some place"
        className="h-56 object-cover group-hover:scale-105 transition-transform mb-3"
      />

      <div className="mt-2 m-4">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">$240,000</dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs justify-between">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Parking</p>

              <p className="font-medium">2 spaces</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bathroom</p>

              <p className="font-medium">2 rooms</p>
            </div>
          </div>
        </div>
      </div>
    </button>
    // <button
    //   href="#"
    //   className="group rounded-lg border-transparent w-fit h-fit px-3 py-3 transition-colors flex flex-col"
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   <Image
    //     src={image}
    //     alt="some place"
    //     className="w-[288px] h-[170px] object-cover rounded-md group-hover:scale-105 transition-transform mb-3"
    //   />
    //   <h2 className={`mb-3 text-2xl font-semibold`}>
    //     {`Tempat Wisata `}
    //     <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //       -&gt;
    //     </span>
    //   </h2>
    //   <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
    //     Find in-depth information about Next.js features and API.
    //   </p>
    // </button>
  );
}

export default TourEventCard;
