import React from "react";

function LocationDateTime({ rounding }) {
  return (
    <div className={`bg-cyan-800 my-2 ${rounding}`}>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-3xl m-4">Location</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-lg mb-4">
          Monday, 20 May 2024 | Time: 11:12 AM
        </p>
      </div>
    </div>
  );
}

export default LocationDateTime;
