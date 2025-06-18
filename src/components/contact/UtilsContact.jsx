import React from "react";
import PropTypes from "prop-types";

import { BsFillTelephoneFill } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosMail } from "react-icons/io";

UtilsContact.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default function UtilsContact({ isScrolled }) {
  return (
    <React.Fragment>
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-rose-800 py-3" : "bg-transparent py-7"
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex text-xs lg:text-sm text-slate-100 items-center justify-center lg:justify-start gap-1 lg:gap-3">
          <div className="flex text-sm items-center gap-1">
            <BsFillTelephoneFill />
            <span>+261 34 12 34 56</span>
          </div>
          <RxDividerVertical />
          <div className="flex text-sm items-center gap-1">
            <IoIosMail />
            <span>mada.nomads@gmail.com</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
