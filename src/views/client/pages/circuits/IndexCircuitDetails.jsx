import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import { BiTrip } from "react-icons/bi";
import {
  BsCurrencyEuro,
  BsFillCloudSunFill,
  BsFillSunFill,
  BsSlashLg,
} from "react-icons/bs";
import { ImHappy2 } from "react-icons/im";
import { TbWalk } from "react-icons/tb";

import ThirdSlide from "../../../../assets/images/03.jpg";
import Lezard from "../../../../assets/images/04.jpg";
import SecondSlide from "../../../../assets/images/07.webp";
import FirstSlide from "../../../../assets/images/Madagascar.webp";
import CircuitDayList from "./CircuitDayList";
import CircuitDayPagination from "./CircuitDayPagination";

const items = [
  {
    src: FirstSlide,
    daily: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: SecondSlide,
    daily: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: ThirdSlide,
    daily: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

const days = [
  {
    image: FirstSlide,
    daily: "Jour 1",
    title: "Depart a Tana",
    description: "Description du premier jour de voyage",
  },
  {
    image: SecondSlide,
    daily: "Jour 2",
    title: "Arrive a la premiere itineraire",
    description: "Description du deuxieme jour de voyage",
  },
  {
    image: ThirdSlide,
    daily: "Jour 3",
    title: "Arrive a la deuxieme itineraire",
    description: "Description du troisieme jour de voyage",
  },
  {
    image: Lezard,
    daily: "Jour 4",
    title: "Arrive a la deuxieme itineraire",
    description: "Description du troisieme jour de voyage",
  },
  {
    image: ThirdSlide,
    daily: "Jour 5",
    title: "Arrive a la deuxieme itineraire",
    description: "Description du troisieme jour de voyage",
  },
  {
    image: FirstSlide,
    daily: "Jour 6",
    title: "Arrive a la deuxieme itineraire",
    description: "Description du troisieme jour de voyage",
  },
  {
    image: SecondSlide,
    daily: "Jour 7",
    title: "Arrive a la deuxieme itineraire",
    description: "Description du troisieme jour de voyage",
  },
];

export default function IndexCircuitDetails() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentDays = days.slice(firstItemIndex, lastItemIndex);

  return (
    <React.Fragment>
      <div className="mx-auto max-w-screen-2xl mt-12">
        <div className="grid grid-cols-1 gap-x-0 lg:gap-y-12 lg:grid-cols-2 bg-slate-200/50">
          <div className="pt-10">
            <div className="mx-auto max-w-prose text-start">
              <h1 className="text-5xl font-bold text-slate-700">
                Rencontrer la forêt tropicale de Ranomafana et ses faunes
              </h1>

              <p className="mt-3 text-base text-pretty text-gray-700 lg:text-lg/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                nisi. Natus, provident accusamus impedit minima harum corporis
                iusto.
              </p>
              <div className="space-1">
                <p className="flex items-center text-base text-pretty text-gray-700">
                  <BsCurrencyEuro className="size-12" />
                  <span className="text-lg font-semibold">840</span>
                  <span className="text-slate-500">
                    &nbsp;&nbsp;par personne
                  </span>
                </p>
                <div className="mt-4 flex items-center gap-8 text-sm">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <TbWalk className="size-4 text-rose-600" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Difficulté</p>

                      <p className="font-semibold text-slate-800 lowercase">
                        Moyenne
                      </p>
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
                  {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                    <BiTrip className="size-4 text-rose-600" />

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-slate-700">Thème</p>

                      <p className="font-semibold text-slate-800 lowercase">
                        Découverte - Nature
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="mt-3\u flex item-center justify-start gap-3 lg:mt-3">
                <Link
                  className="inline-block rounded-xl bg-rose-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-rose-700"
                  to="#"
                >
                  Réserver
                </Link>
                <Link
                  className="inline-block rounded-xl border text-rose-600 px-3 py-2 font-medium shadow-sm"
                  to="#"
                >
                  Voir sur carte
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-1">
            <Carousel fade className="w-full" interval={2400}>
              {items.map((item, index) => (
                <Carousel.Item key={index}>
                  <div className="bg-slate-50">
                    <img
                      src={item.src}
                      alt={item.altText}
                      className="w-full h-1/2 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
                      <h3 className="text-3xl font-semibold line-clamp-1">
                        Tour Details
                      </h3>
                      <div className="px-3 py-1 flex items-center gap-1 justify-center bg-slate-500/65 rounded-3xl">
                        <Link
                          to={"/"}
                          className="text-white hover:text-red-600"
                        >
                          Accueil
                        </Link>{" "}
                        <BsSlashLg />
                        <Link
                          to={"/circuits"}
                          className="text-white hover:text-red-600"
                        >
                          Circuits
                        </Link>{" "}
                        <BsSlashLg />
                        <span className="text-rose-600">Tour Details</span>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Points forts */}
        <div className="mx-auto mt-7 p-3 lg:p-7 w-full lg:w-3/4">
          <h2 className="text-slate-700 text-center text-4xl">Points forts</h2>
          <div className="mt-3 grid grid-cols-1 gap-x-0 lg:gap-y-12 lg:grid-cols-3">
            <div className="border h-32 flex items-center justify-start px-3">
              <div>
                <p className="flex items-center font-medium gap-x-1">
                  <BiTrip className="size-7 text-rose-600" />
                  <span className="text-lg text-slate-900">Thème</span>
                </p>
                <p className="text-sm text-slate-700">Découverte - Nature</p>
              </div>
            </div>

            <div className="border-y h-32 flex items-center justify-start px-3">
              <div>
                <p className="flex items-center font-medium gap-x-1">
                  <BsFillCloudSunFill className="size-7 text-rose-600" />
                  <span className="text-lg text-slate-900">Climat</span>
                </p>
                <p className="text-sm text-slate-700">
                  Tropical avec des paysages calmes
                </p>
              </div>
            </div>

            <div className="border h-32 flex items-center justify-start px-3">
              <div>
                <p className="flex items-center font-medium gap-x-1">
                  <ImHappy2 className="size-7 text-rose-600" />
                  <span className="text-lg text-slate-900">Avantages</span>
                </p>
                <p className="text-sm text-slate-700">
                  Piscine naturelle et chaude, faunes
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Points forts */}

        {/* Program Details */}
        <div className="mx-auto max-w-screen-xl px-3 mt-7">
          <div className="space-y-4">
            <CircuitDayList dayList={currentDays} />
            <CircuitDayPagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
              totalItems={days.length}
            />
          </div>
        </div>
        {/* End Program Details */}
      </div>

      {/* MAP */}
      {/* <div className="mt-7 h-[40vh]">
        <CircuitMap />
      </div> */}
      {/* END MAP */}
    </React.Fragment>
  );
}
