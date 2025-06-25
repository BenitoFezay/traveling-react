import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

import { IoIosMail } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import LogoShort from "../logo/LogoShort";
import { utilsNavigationConfig } from "../navigations/utilsNavigationConfig";

export default function IndexHeader() {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <header
        className={
          "fixed top-0 z-50 transition-all duration-300 w-full bg-slate-50"
        }
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="lg:flex lg:items-center lg:gap-7">
              <LogoShort />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center mt-3 gap-6 text-sm">
                  {utilsNavigationConfig.map((navigation, index) => (
                    <li key={index}>
                      <NavLink
                        className={`${
                          pathname === navigation.path
                            ? "text-rose-600"
                            : "text-slate-800"
                        } transition active:text-rose-800 hover:text-rose-600 font-semibold`}
                        to={navigation.path}
                      >
                        {navigation.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 text-slate-800">
                <div className="flex text-sm items-center gap-1">
                  <AiOutlineWhatsApp className="text-rose-600" />
                  <span>+261 34 12 334 56</span>
                </div>
                <RxDividerVertical className="hidden lg:flex" />
                <div className="lg:flex text-sm items-center gap-1 hidden">
                  <IoIosMail className="text-rose-600" />
                  <span>mada.nomads@gmail.com</span>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-slate-800 transition hover:text-slate-800/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
