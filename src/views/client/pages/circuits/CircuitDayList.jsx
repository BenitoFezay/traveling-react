import React from "react";
import PropType from "prop-types";
import CircuitDayDetailsCard from "./CircuitDayDetailsCard";

CircuitDayList.propTypes = {
  dayList: PropType.any,
};

export default function CircuitDayList({ dayList }) {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-4 lg:gap-7 md:grid-cols-2 lg:grid-cols-3">
        {dayList.map((day, index) => {
          return (
            <CircuitDayDetailsCard
              key={index}
              daily={day?.daily}
              image={day?.image}
              description={day?.description}
              title={day?.title}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
