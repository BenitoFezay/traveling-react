import React from "react";
import PropType from "prop-types";

CircuitDayPagination.propTypes = {
  totalItems: PropType.number,
  itemsPerPage: PropType.number,
  setCurrentPage: PropType.any,
  currentPage: PropType.number,
};

export default function CircuitDayPagination({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <React.Fragment>
      <div className="mx-auto max-w-52">
        <div className="flex items-center justify-center gap-x-1">
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={`p-2 w-9 h-9 text-white font-semibold rounded-xl transition-all duration-700 ease-linear ${
                  page == currentPage
                    ? "bg-rose-600 flex items-center justify-center"
                    : "bg-rose-400"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
