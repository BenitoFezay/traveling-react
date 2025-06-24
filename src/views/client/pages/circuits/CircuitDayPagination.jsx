import React from "react";
import PropType from "prop-types";

CircuitDayPagination.propTypes = {
  totalPosts: PropType.number,
  postsPerPage: PropType.number,
  setCurrentPage: PropType.any,
  currentPage: PropType.number,
};

export default function CircuitDayPagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
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
                className={`p-2 w-12 h-12 text-white font-semibold rounded-xl ${
                  page == currentPage ? "bg-rose-600" : "bg-rose-400"
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
