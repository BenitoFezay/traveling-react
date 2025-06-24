import { BsSlashLg } from "react-icons/bs";
import { BsCurrencyEuro } from "react-icons/bs";
import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { TbWalk } from "react-icons/tb";

import Isalo from "../../../../assets/images/Isalo.jpg";
import Botry from "../../../../assets/images/beach.jpg";
import NosyIranja from "../../../../assets/images/Madagascar.jpg";
import Baobab from "../../../../assets/images/04.jpg";
import HeroImage from "../../../../assets/images/landscape.jpg";
import Maki from "../../../../assets/images/maki.jpg";
import Tsingy from "../../../../assets/images/tsingy.jpg";

import { Link } from "react-router-dom";
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
        <div className="grid grid-cols-1 gap-x-4 lg:gap-x-10 lg:gap-y-12 lg:grid-cols-3">
          {circuits.map((circuit, index) => (
            <div key={index} className="rounded">
              <Link
                to={`/circuits/${circuit?.slug}/${circuit?.id}`}
                className="block rounded-lg shadow-xs shadow-indigo-100 group"
              >
                <img
                  alt=""
                  src={circuit?.image}
                  className="h-56 w-full rounded-xl object-cover shadow-xl"
                />

                <div className="relative -mt-11 text-center w-2/5">
                  <p className="text-sm font-bold tracking-widest rounded-r-xl bg-slate-950/65 py-2 text-slate-50 flex items-center justify-center">
                    À partir de &nbsp;
                    <BsCurrencyEuro />
                    {circuit?.price}
                  </p>
                </div>
                <div className="mt-2 px-1">
                  <dl>
                    <div>
                      <dt className="sr-only">theme</dt>

                      <dd className="text-xs font-medium text-slate-700">
                        {circuit?.theme}
                      </dd>
                    </div>

                    <div>
                      <dt className="sr-only">Name</dt>

                      <dd className="text-slate-800 group-hover:underline text-sm line-clamp-1 font-semibold">
                        {circuit?.name}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex items-center gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <TbWalk className="size-4 text-rose-600" />

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-slate-700">Difficulté</p>

                        <p className="font-semibold text-slate-800 lowercase">
                          {circuit?.difficult}
                        </p>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <BsFillSunFill className="size-4 text-yellow-400" />

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-slate-700">Séjours</p>

                        <p className="font-semibold text-slate-800">
                          {circuit?.days} jours
                        </p>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                      <svg
                        className="size-4 text-rose-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>

                      <div className="mt-1.5 sm:mt-0">
                        <p className="text-slate-700">Nuités</p>

                        <p className="font-semibold text-slate-800">
                          {circuit?.night} nuits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
