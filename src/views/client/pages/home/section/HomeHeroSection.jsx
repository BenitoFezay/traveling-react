import React from "react";

import Carousel from "react-bootstrap/Carousel";

import SecondSlide from "../../../../../assets/images/07.webp";
import ThirdSlide from "../../../../../assets/images/cameleon.jpg";
import FirstSlide from "../../../../../assets/images/Madagascar.webp";

const items = [
  {
    src: FirstSlide,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: SecondSlide,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: ThirdSlide,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

export default function HomeHeroSection() {
  return (
    <section className="mx-auto mt-7 lg:mt-14 lg:p-4 lg:px-4">
      <Carousel fade className="h-full w-full lg:rounded-3xl" interval={2400}>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="bg-slate-50 lg:rounded-3xl">
              <img
                src={item.src}
                alt={item.altText}
                className="w-full h-screen lg:rounded-3xl object-cover"
              />
              <div className="absolute lg:rounded-3xl inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
                <div className="px-3 lg:px-12 mt-12 lg:mt-7 space-y-4 text-center">
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 leading-tight">
                    Welcome to &nbsp;
                    <span className="text-rose-600">Mada Nomads</span>
                  </h1>
                  <p className="text-2xl lg:text-4xl mx-auto lg:w-1/2 font-semibold text-slate-300 leading-tight">
                    Votre porte d’entrée vers le Sud et l’Ouest sauvage de
                    Madagascar
                  </p>
                  <p className="invisible text-gray-300 hidden lg:block font-semibold w-full mx-auto lg:w-1/2">
                    Chez Mada Nomads, nous créons des voyages inoubliables au
                    cœur d’une nature préservée — des baobabs majestueux de
                    Morondava aux canyons rouges d’Isalo, jusqu’aux lagons
                    turquoise de la côte Vezo.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
