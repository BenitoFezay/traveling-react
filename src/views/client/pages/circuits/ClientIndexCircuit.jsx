import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { TbWalk } from "react-icons/tb";

import Lezard from "../../../../assets/images/05.jpg";
import Botry from "../../../../assets/images/10.jpg";
import NosyIranja from "../../../../assets/images/Nosy_Iranja.jpg";
import BaobabSunSet from "../../../../assets/images/baobab5.jpg";
import HeroImage from "../../../../assets/images/landscape2.webp";
import Maki from "../../../../assets/images/maki.jpg";
import Tsingy from "../../../../assets/images/tsingy.jpg";

import { Link } from "react-router-dom";
import ClientHomeSearchSection from "../home/search/ClientHomeSearchSection";

export default function ClientIndexCircuit() {
  return (
    <React.Fragment>
      <div className="relative w-full py-16 lg:py-28 h-[70vh] overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-10">
          <img src={HeroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white text-start px-4"></div>
        </div>
      </div>
      <ClientHomeSearchSection />
      <div className="mx-auto max-w-screen-2xl mt-7 px-4 lg:px-7">
        <div className="grid grid-cols-1 gap-x-4 lg:gap-x-7 lg:gap-y-12 lg:grid-cols-3">
          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg shadow-xs shadow-indigo-100"
            >
              <img
                alt=""
                src={BaobabSunSet}
                className="h-56 w-full rounded-xl object-cover shadow-xl"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-slate-700">À partir de $440</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="text-slate-800 font-semibold">
                      123 Wallaby Avenue, Park Road
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <TbWalk className="size-4 text-rose-600" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Difficulté</p>

                      <p className="font-semibold text-slate-800">moyenne</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BsFillSunFill className="size-4 text-yellow-400" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Séjours</p>

                      <p className="font-semibold text-slate-800">5 jours</p>
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

                      <p className="font-semibold text-slate-800">4 nuits</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg shadow-xs shadow-indigo-100"
            >
              <img
                alt=""
                src={Botry}
                className="h-56 w-full rounded-xl object-cover shadow-xl"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-slate-700">À partir de $440</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="text-slate-800 font-semibold">
                      123 Wallaby Avenue, Park Road
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <TbWalk className="size-4 text-rose-600" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Difficulté</p>

                      <p className="font-semibold text-slate-800">moyenne</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BsFillSunFill className="size-4 text-yellow-400" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Séjours</p>

                      <p className="font-semibold text-slate-800">5 jours</p>
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

                      <p className="font-semibold text-slate-800">4 nuits</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg shadow-xs shadow-indigo-100"
            >
              <img
                alt=""
                src={NosyIranja}
                className="h-56 w-full rounded-xl object-cover shadow-xl"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-slate-700">À partir de $440</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="text-slate-800 font-semibold">
                      123 Wallaby Avenue, Park Road
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <TbWalk className="size-4 text-rose-600" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Difficulté</p>

                      <p className="font-semibold text-slate-800">moyenne</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BsFillSunFill className="size-4 text-yellow-400" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Séjours</p>

                      <p className="font-semibold text-slate-800">5 jours</p>
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

                      <p className="font-semibold text-slate-800">4 nuits</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg shadow-xs shadow-indigo-100"
            >
              <img
                alt=""
                src={Maki}
                className="h-56 w-full rounded-xl object-cover shadow-xl"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-slate-700">À partir de $440</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="text-slate-800 font-semibold">
                      123 Wallaby Avenue, Park Road
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <TbWalk className="size-4 text-rose-600" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Difficulté</p>

                      <p className="font-semibold text-slate-800">moyenne</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BsFillSunFill className="size-4 text-yellow-400" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Séjours</p>

                      <p className="font-semibold text-slate-800">5 jours</p>
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

                      <p className="font-semibold text-slate-800">4 nuits</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg shadow-xs shadow-indigo-100"
            >
              <img
                alt=""
                src={Lezard}
                className="h-56 w-full rounded-xl object-cover shadow-xl"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-slate-700">À partir de $440</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="text-slate-800 font-semibold">
                      123 Wallaby Avenue, Park Road
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <TbWalk className="size-4 text-rose-600" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Difficulté</p>

                      <p className="font-semibold text-slate-800">moyenne</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BsFillSunFill className="size-4 text-yellow-400" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Séjours</p>

                      <p className="font-semibold text-slate-800">5 jours</p>
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

                      <p className="font-semibold text-slate-800">4 nuits</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg shadow-xs shadow-indigo-100"
            >
              <img
                alt=""
                src={Tsingy}
                className="h-56 w-full rounded-xl object-cover shadow-xl"
              />

              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd className="text-sm text-slate-700">À partir de $440</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="text-slate-800 font-semibold">
                      123 Wallaby Avenue, Park Road
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <TbWalk className="size-4 text-rose-600" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Difficulté</p>

                      <p className="font-semibold text-slate-800">moyenne</p>
                    </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BsFillSunFill className="size-4 text-yellow-400" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Séjours</p>

                      <p className="font-semibold text-slate-800">5 jours</p>
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

                      <p className="font-semibold text-slate-800">4 nuits</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
