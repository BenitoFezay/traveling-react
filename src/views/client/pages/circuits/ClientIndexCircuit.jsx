import React from "react";
import { BsSlashLg } from "react-icons/bs";

import Baobab from "../../../../assets/images/04.jpg";
import Botry from "../../../../assets/images/beach.jpg";
import Isalo from "../../../../assets/images/Isalo.jpg";
import HeroImage from "../../../../assets/images/landscape.jpg";
import NosyIranja from "../../../../assets/images/Madagascar.jpg";
import Maki from "../../../../assets/images/maki.jpg";
import Tsingy from "../../../../assets/images/tsingy.jpg";

import { Link } from "react-router-dom";
import CircuitCard from "../../../../components/card/CircuitCard";
import ClientHomeSearchSection from "../home/search/ClientHomeSearchSection";

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
  {
    id: 4,
    slug: "naviguer-sur-la-mer-de-belo",
    price: 1550,
    image: Botry,
    name: "Naviguer sur la mer de belo et les plages de Mangily",
    theme: "Tour Bleu",
    difficult: "Moyenne",
    days: 12,
    night: 11,
  },
  {
    id: 5,
    slug: "traverser-le-makay-tsingy",
    price: 1400,
    image: Tsingy,
    name: "Traverser le Makay jusqu'aux Tsingy gris",
    theme: "Aventure - Découverte",
    difficult: "Difficile",
    days: 7,
    night: 6,
  },
  {
    id: 6,
    slug: "les-alles-de-baobab",
    price: 750,
    image: Baobab,
    name: "Les allés de baobab",
    theme: "Découverte - Nature",
    difficult: "Moyenne",
    days: 7,
    night: 6,
  },
];

export default function ClientIndexCircuit() {
  return (
    <React.Fragment>
      <div className="relative w-full py-16 lg:py-28 h-[70vh] overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-10">
          <img src={HeroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-start px-4">
            <h3 className="text-4xl font-semibold">Tour Packages</h3>
            <div className="px-3 py-1 flex items-center gap-1 justify-center bg-slate-500/65 rounded-3xl">
              <Link to={"/"} className="text-white">
                Accueil
              </Link>{" "}
              <BsSlashLg />
              <span className="text-rose-600">Tour Packages</span>
            </div>
          </div>
        </div>
      </div>
      <ClientHomeSearchSection />
      <div className="mx-auto max-w-screen-2xl mt-7 px-4 lg:px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-x-10 lg:gap-y-12 lg:grid-cols-3">
          {circuits.map((circuit, index) => (
            <CircuitCard circuit={circuit} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
