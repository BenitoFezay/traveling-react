import React, { useEffect, useState } from "react";
import Madagascar from "../../../../../assets/images/Madagascar.webp";
import { Link } from "react-router-dom";

const ParallaxSection = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <section
        className="h-[70vh] bg-fixed bg-center bg-cover text-white flex items-center justify-center text-3xl"
        style={{
          backgroundImage: `url('${Madagascar}')`,
        }}
      >
        <div className="w-full h-full bg-black/50">
          <div className="mx-auto mt-24 text-center max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-50 lg:text-5xl">
              Understand flow
              <strong className="text-rose-600"> increase </strong>
            </h2>

            <p className="mt-4 text-base font-semibold text-pretty text-slate-300 sm:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              iusto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSection;
