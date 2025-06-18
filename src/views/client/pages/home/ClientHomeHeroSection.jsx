import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import SecondSlide from "../../../../assets/images/Madagascar.webp";

export default function ClientHomeHeroSection() {
  return (
    <div className="relative w-full py-16 lg:py-28 h-[70vh] lg:h-screen overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-10">
        <img src={SecondSlide} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-start px-4">
          <div className="px-4 lg:px-12 mt-12 lg:mt-7 space-y-4">
            <h1 className="text-3xl lg:text-7xl font-bold text-slate-100 leading-tight">
              Welcome to &nbsp;
              <span className="text-rose-600">Mada Nomads</span>
            </h1>
            <h2 className="text-2xl lg:text-4xl lg:w-1/2 font-semibold text-slate-300 leading-tight">
              Votre porte d’entrée vers le Sud et l’Ouest sauvage de Madagascar
            </h2>
            <p className="text-gray-300 hidden lg:block font-semibold w-full lg:w-1/2">
              Chez Mada Nomads, nous créons des voyages inoubliables au cœur
              d’une nature préservée — des baobabs majestueux de Morondava aux
              canyons rouges d’Isalo, jusqu’aux lagons turquoise de la côte
              Vezo.
            </p>
            <Link
              to={"/about"}
              className="flex items-end font-semibold text-rose-600"
            >
              <span>À propos de nous</span> &nbsp;
              <HiOutlineArrowNarrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
