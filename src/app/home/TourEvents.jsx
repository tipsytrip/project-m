import React from "react";
import lake from "@/img/jpg/lake.jpg";
import mountain from "@/img/jpg/mountain.jpg";
import airport from "@/img/jpg/airport.jpg";
import TourEventCard from "@/components/TourEventCard";

const categories = ["Trending", "Popular", "Features", "Recommend", "Packages"];

const images = [lake, mountain, airport, mountain, airport, lake];
const cards = [1, 2, 3, 4, 5, 6];

function TourEvents() {
  return (
    <main className="flex justify-center items-center ">
      <div className="w-[60%] gap-5 flex flex-col">
        <section className="flex justify-center items-center">
          <div>
            <h1 className="text-5xl">Guides for your next vacation</h1>
            <p>
              Check out this week's selection of popular products that might
              catch you eye and don't
            </p>
          </div>
        </section>
        <sections className="flex justify-center items-center">
          <div className="flex gap-2 flex-wrap justify-center">
            <div className="button_border">All</div>
            {categories.map((category) => (
              <div className="button_border">{category}</div>
            ))}
          </div>
        </sections>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {cards.map((_, index) => (
            <TourEventCard image={images[index]} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default TourEvents;
