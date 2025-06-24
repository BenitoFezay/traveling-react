import React from "react";
import PropType from "prop-types";

TripDetailsCard.propTypes = {
  dayNumber: PropType.any,
  children: PropType.node,
  className: PropType.string,
  desc: PropType.string,
};

export default function TripDetailsCard({
  dayNumber,
  children,
  className = "",
  desc = "",
}) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white ${className}`}>
      {/* Card Header */}
      <div className="px-6 py-1">
        <p className="text-base font-medium text-gray-800">{dayNumber}</p>
        {desc && <p className="mt-1 text-sm text-gray-500">{desc}</p>}
      </div>

      {/* Card Body */}
      <div className="p-4 border-t border-gray-100 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}
