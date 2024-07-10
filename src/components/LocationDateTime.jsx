import React from "react";

function LocationDateTime({
  design,
  current: { date, time },
  cityInfo: { country, name },
}) {
  return (
    <div className={`${design} md:py-1`}>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-3xl m-4">
          {name}, {country}
        </p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-lg mb-4">{date}</p>
        <p className="text-white text-lg mb-4">Time: {time}</p>
      </div>
    </div>
  );
}

export default LocationDateTime;
