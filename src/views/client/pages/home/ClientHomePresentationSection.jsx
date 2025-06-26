import React, { useState } from "react";
import LeftImage from "../../../../assets/images/lemur2.png";

export default function ClientHomePresentationSection() {
  const [ishovered, setIshovered] = useState(false);

  return (
    <React.Fragment>
      <section
        className="w-full py-7 bg-slate-100"
        onMouseOver={() => setIshovered(true)}
        onMouseOut={() => setIshovered(false)}
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-3 overflow-hidden">
          <div className="hidden lg:block py-7 w-full">
            <img
              src={LeftImage}
              alt=""
              className={`rotate-45 transition z-10 duration-300
                ${ishovered ? "-translate-x-12" : "translate-x-3"}`}
            />
          </div>

          <div className="lg:col-span-3 text-center mx-auto px-2 w-full lg:px-7 space-y-7">
            <h2 className="text-2xl lg:text-4xl text-gray-900/90">
              Mada Nomads
            </h2>
            <p className="text-lg text-rose-600 font-semibold uppercase">
              Explorateur du Sud et de l’Ouest sauvage de Madagascar
            </p>
            <p className="text-lg text-gray-700/90">
              Votre porte d’entrée vers le Sud et l’Ouest sauvage de Madagascar.
              Chez Mada Nomads, nous créons des voyages inoubliables au cœur
              d’une nature préservée — des baobabs majestueux de Morondava aux
              canyons rouges d’Isalo, jusqu’aux lagons turquoise de la côte
              Vezo.
            </p>
            <button className="p-3 font-medium rounded-xl text-slate-50 bg-rose-600">
              À propos de Mada Nomads
            </button>
          </div>

          <div className="invisible"></div>
        </div>
      </section>
    </React.Fragment>
  );
}
