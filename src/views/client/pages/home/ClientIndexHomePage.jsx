import React from "react";

import Isalo from "../../../../assets/images/Isalo.jpg";
import NosyIranja from "../../../../assets/images/Madagascar.jpg";
import Maki from "../../../../assets/images/maki.jpg";

import CircuitCard from "../../../../components/card/CircuitCard";
import ClientHomeCircuitSection from "./ClientHomeCircuitSection";
import ClientHomePresentationSection from "./ClientHomePresentationSection";
import ClientHomeSearchSection from "./search/ClientHomeSearchSection";
import HomeHeroSection from "./section/HomeHeroSection";
import ParallaxSection from "./section/ParallaxSection";

const circuits = [
  {
    id: 1,
    slug: "au-fond-de-la-mer",
    price: 1080,
    image: NosyIranja,
    name: "Au fond de la mer de Salary Tuléar",
    theme: "Découverte - Tour Bleu",
    difficult: "Moyenne",
    days: 12,
    night: 11,
  },
  {
    id: 2,
    slug: "la-rn7-au-sud",
    price: 990,
    image: Isalo,
    name: "La RN7 et Isalo Madagascar",
    theme: "Aventure - Trekking",
    difficult: "Difficle",
    days: 8,
    night: 7,
  },
  {
    id: 3,
    slug: "rencontrer-la-foret-tropicale",
    price: 840,
    image: Maki,
    name: "Rencontrer la forêt tropicale de Ranomafana et ses faunes",
    theme: "Découverte - Nature",
    difficult: "Facile",
    days: 6,
    night: 5,
  },
];

export default function ClientIndexHomePage() {
  return (
    <React.Fragment>
      {/* Home HERO SECTION */}
      <HomeHeroSection />
      {/* END Home HERO SECTION */}

      {/* SEARCH SECTION */}
      <ClientHomeSearchSection />
      {/* END SEARCH SECTION */}

      {/* CIRCUIT SECTION */}
      <ClientHomeCircuitSection />
      {/* END CIRCUIT SECTION */}

      {/* BRIEVE PRESENTATION SECTION */}
      <ClientHomePresentationSection />
      {/* END BRIEVE PRESENTATION SECTION */}

      {/* HERO SECTION */}
      <ParallaxSection />
      {/* END HERO SECTION */}

      <div className="mx-auto max-w-screen-2xl mt-7 px-4 lg:px-7">
        <div className="mx-auto md:w-2/4 text-center w-full mt-12 mb-4">
          <h2 className="text-slate-700 font-semibold mb-3">
            Nos circuits <span className="text-rose-600">complets</span>
          </h2>
          <p className="text-lg text-gray-700/90">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            harum iure assumenda debitis labore iusto autem, fuga minima unde
            eius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-x-10 lg:gap-y-12 lg:grid-cols-3">
          {circuits.map((circuit, index) => (
            <CircuitCard circuit={circuit} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
