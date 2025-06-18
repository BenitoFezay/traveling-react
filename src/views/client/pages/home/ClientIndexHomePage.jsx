import React from "react";
import { Link } from "react-router-dom";

import MakiMada from "../../../../assets/images/03.jpg";
import BaobabSunSet from "../../../../assets/images/baobab5.jpg";
import Tsingy from "../../../../assets/images/tsingy.jpg";
import Lezard from "../../../../assets/images/05.jpg";

import ClientHomeSectionBanner from "./ClientHomeSectionBanner";
import ClientHomeHeroSection from "./ClientHomeHeroSection";
import ClientHomeSearchSection from "./search/ClientHomeSearchSection";
import ClientHomeCircuitSection from "./ClientHomeCircuitSection";
import ClientHomePresentationSection from "./ClientHomePresentationSection";
import HomeHeroSection from "./section/HomeHeroSection";
import ParallaxSection from "./section/ParallaxSection";

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
      {/* <ClientHomeHeroSection /> */}
      {/* END HERO SECTION */}

      {/* BANER SECTION */}
      {/* <ClientHomeSectionBanner /> */}
      {/* END BANER SECTION */}

      <div className="mx-auto max-w-screen-2xl mt-7 px-4 lg:px-7">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4">
          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg p-4 shadow-xs shadow-indigo-100"
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

                    <dd className="text-sm text-gray-500">À partir de $440</dd>
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
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Parking</p>

                      <p className="font-semibold text-slate-800">2 spaces</p>
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Bathroom</p>

                      <p className="font-semibold text-slate-800">2 rooms</p>
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
                      <p className="text-gray-500">Bedroom</p>

                      <p className="font-semibold text-slate-800">4 rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg p-4 shadow-xs shadow-indigo-100"
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

                    <dd className="text-sm text-gray-500">À partir de $440</dd>
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
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Parking</p>

                      <p className="font-semibold text-slate-800">2 spaces</p>
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Bathroom</p>

                      <p className="font-semibold text-slate-800">2 rooms</p>
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
                      <p className="text-gray-500">Bedroom</p>

                      <p className="font-semibold text-slate-800">4 rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg p-4 shadow-xs shadow-indigo-100"
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

                    <dd className="text-sm text-gray-500">À partir de $440</dd>
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
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Parking</p>

                      <p className="font-semibold text-slate-800">2 spaces</p>
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Bathroom</p>

                      <p className="font-semibold text-slate-800">2 rooms</p>
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
                      <p className="text-gray-500">Bedroom</p>

                      <p className="font-semibold text-slate-800">4 rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="mx-auto max-w-screen-2xl mt-7 px-4 lg:px-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded">
            <Link to="#" className="group relative block bg-black">
              <img
                alt=""
                src={MakiMada}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                  Maki
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  Tony Wayne
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="rounded">
            <article className="group">
              <img
                alt=""
                src={BaobabSunSet}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <Link to="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </div>

          <div className="rounded">
            <Link
              to="#"
              className="block rounded-lg p-4 shadow-xs shadow-indigo-100"
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

                    <dd className="text-sm text-gray-500">$240,000</dd>
                  </div>

                  <div>
                    <dt className="sr-only">Address</dt>

                    <dd className="font-medium">
                      123 Wallaby Avenue, Park Road
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
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
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Parking</p>

                      <p className="font-medium">2 spaces</p>
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>

                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Bathroom</p>

                      <p className="font-medium">2 rooms</p>
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
                      <p className="text-gray-500">Bedroom</p>

                      <p className="font-medium">4 rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link to="#" className="block">
              <img
                alt=""
                src={Lezard}
                className="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
              />

              <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong className="font-medium">Company Name</strong>

                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}
