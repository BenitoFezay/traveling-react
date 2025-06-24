import React from "react";
import PropType from "prop-types";

CircuitDayDetails.propTypes = {
  title: PropType.string,
  description: PropType.string,
  daily: PropType.any,
  image: PropType.any,
};

export default function CircuitDayDetails({
  title,
  daily,
  description,
  image,
}) {
  return (
    <React.Fragment>
      <article className="group">
        <img
          alt=""
          src={image}
          className="h-60 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-1">
          <div className="flex items-center justify-start gap-x-2">
            <p className="text-sm font-mono text-rose-600 rounded-md">
              {daily}
            </p>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </div>

          <p className="line-clamp-4 text-xs lg:text-sm text-gray-500">
            {description}
          </p>
        </div>
      </article>
    </React.Fragment>
  );
}
