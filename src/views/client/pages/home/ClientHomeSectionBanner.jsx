import React from "react";
import { Link } from "react-router-dom";
import Lemur from "../../../../assets/images/lemur.png";
import SlideSwiper from "../../../../components/carousel/SlideSwiper";

export default function ClientHomeSectionBanner() {
  const slides = [
    {
      title: "Introduction au Projet",
      image: Lemur,
    },
    {
      title: "Objectifs et Problématique",
      image: Lemur,
    },
    {
      title: "Architecture Technique",
      image: Lemur,
    },
  ];

  return (
    <React.Fragment>
      {/* <SlideSwiper /> */}
      <div className="mx-auto">
        <div className="max-w-7xl mx-auto pt-12 lg:pt-24 pb-12 px-6 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Make managing <br />
              your finances <span className="text-purple-500">easier</span>{" "}
              <br />
              with AI
            </h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="#"
                className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-6 py-3 flex items-center border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                <span>See Demo</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute w-40 h-40 bg-yellow-200 rounded-lg top-10 -left-10"></div>
            <div className="absolute w-20 h-20 bg-purple-300 rounded-full top-20 left-32"></div>
            <div className="absolute w-12 h-12 border border-gray-300 rounded-full bottom-10 left-16"></div>
            <div className="absolute w-10 h-10 bg-blue-200 rounded-full bottom-20 right-16"></div>
            <img
              src={Lemur}
              alt="Finance Illustration"
              className="relative size-96 z-10 mx-auto"
            />
          </div>
        </div>

        <section className="bg-slate-50 rounded-3xl lg:grid lg:h-screen lg:place-content-center mb-7">
          {/* BANNER SECETION */}
          <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-prose text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Understand user flow and
                <strong className="text-indigo-600"> increase </strong>
                conversions
              </h1>

              <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                nisi. Natus, provident accusamus impedit minima harum corporis
                iusto.
              </p>

              <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                <Link
                  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                  to="#"
                >
                  Get Started
                </Link>

                <Link
                  className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                  to="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* END BANNER SECETION */}
        </section>
      </div>
    </React.Fragment>
  );
}
