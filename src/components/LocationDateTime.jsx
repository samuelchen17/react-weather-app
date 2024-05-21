import React from "react";

function LocationDateTime({ rounding }) {
  return (
    <div className={`bg-sky-500/[.30] shadow-xl my-2 ${rounding}`}>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-3xl m-4">Location</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-lg mb-4">Monday, 20 May 2024</p>
        <p className="text-white text-lg mb-4">Time: 11:12 AM</p>
      </div>
    </div>
  );
}

export default LocationDateTime;
