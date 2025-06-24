import React from "react";
import { Link } from "react-router-dom";

import Baobab from "../../../../assets/images/04.jpg";
import Mangily from "../../../../assets/images/07.jpg";
import Tsingy from "../../../../assets/images/tsingy.jpg";
import Ranomafana from "../../../../assets/images/comete.jpg";

const circuitPackages = [
  {
    name: "Découverte & Nature",
    title: "Ranomafana",
    description: "",
    slug: "decouverte-nature",
    image: Ranomafana,
  },
  {
    name: "Tour Bleu",
    title: "Mangily & Salary",
    description: "",
    slug: "tour-bleu",
    image: Mangily,
  },
  {
    name: "Circuit Trekking",
    title: "Best of Makay",
    description: "",
    slug: "circuit-trekking",
    image: Baobab,
  },
  {
    name: "Circuit Aventure",
    title: "Gray Tsingy",
    description: "",
    slug: "circuit-aventure",
    image: Tsingy,
  },
];

export default function ClientHomeCircuitSection(args) {
  return (
    <React.Fragment>
      <section className="mx-auto mt-7 py-7 max-w-screen-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {circuitPackages.map((circuitPackage, index) => (
            <Link
              key={index}
              to={`/circuits/${circuitPackage.slug}`}
              className={`group circuit-group relative circuit-group shadow-xl block bg-black rounded-3xl overflow-hidden ${
                index % 2 === 0 ? "lg:rotate-2" : "lg:-rotate-2"
              }`}
            >
              <img
                alt={circuitPackage.name}
                src={circuitPackage.image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-bold tracking-widest text-rose-600 uppercase">
                  {circuitPackage.name}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {circuitPackage.title}
                </p>

                <div className="mt-32 sm:mt-52">
                  <div className="circuit-content">
                    <p className="text-sm font-semibold text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae?
                    </p>
                    <Link
                      to={`/circuits/${circuitPackage.slug}`}
                      className="text-slate-50 px-3 rounded-xl py-2 bg-rose-600"
                    >
                      Explorer
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* <div>
            <Link
              to="#"
              className="group relative circuit-group shadow-xl block bg-black rounded-3xl overflow-hidden lg:-rotate-2"
            >
              <img
                alt=""
                src={Tsingy}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-bold tracking-widest text-rose-600 uppercase">
                  Circuit Aventure
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  Gray Tsingy
                </p>

                <div className="mt-32 sm:mt-48">
                  <div className="circuit-content">
                    <p className="text-sm font-semibold text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae?
                    </p>
                    <button className="text-slate-50 px-3 rounded-xl py-2 bg-rose-600">
                      Explorer
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link
              to="#"
              className="group relative circuit-group shadow-xl block bg-black rounded-3xl overflow-hidden lg:rotate-2"
            >
              <img
                alt=""
                src={Mangily}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-bold tracking-widest text-rose-600 uppercase">
                  Tour bleu
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  Mangily
                </p>
                <div className="mt-32 sm:mt-48">
                  <div className="circuit-content">
                    <p className="text-sm font-semibold text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae?
                    </p>
                    <button className="text-slate-50 px-3 rounded-xl py-2 bg-rose-600">
                      Explorer
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link
              to="#"
              className="group relative circuit-group shadow-xl block bg-black rounded-3xl overflow-hidden lg:-rotate-2"
            >
              <img
                alt=""
                src={Ranomafana}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-bold tracking-widest text-rose-600 uppercase">
                  Nature & Découverte
                </p>
                <p className="text-xl font-bold text-white sm:text-2xl">
                  Ranomafana
                </p>
                <div className="mt-32 sm:mt-48">
                  <div className="circuit-content">
                    <p className="text-sm font-semibold text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae?
                    </p>
                    <button className="text-slate-50 px-3 rounded-xl py-2 bg-rose-600">
                      Explorer
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </section>
    </React.Fragment>
  );
}
