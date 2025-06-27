import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { BsCurrencyEuro, BsFillSunFill } from "react-icons/bs";
import { TbWalk } from "react-icons/tb";

CircuitCard.propTypes = {
  circuit: PropType.object,
};

export default function CircuitCard({ circuit }) {
  return (
    <React.Fragment>
      <div className="rounded">
        <Link
          to={`/circuits/${circuit?.slug}/${circuit?.id}`}
          className="block rounded-lg shadow-xs shadow-indigo-100 group"
        >
          <img
            alt=""
            src={circuit?.image}
            className="h-56 w-full rounded-xl object-cover shadow-xl"
          />

          <div className="relative -mt-11 text-center md:w-2/5 w-3/6">
            <p className="text-xs lg:text-sm font-bold tracking-widest rounded-r-xl bg-slate-950/65 py-2 text-slate-50 flex items-center justify-center">
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
    </React.Fragment>
  );
}
