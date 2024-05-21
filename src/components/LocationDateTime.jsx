import React from "react";

function LocationDateTime({ design }) {
  return (
    <div className={`${design}`}>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-3xl m-4">Melbourne, AU</p>
      </div>
      <div className="flex justify-center flex-col items-center">
        <p className="text-white text-lg mb-4">Monday, 20 May 2024</p>
        <p className="text-white text-lg mb-4">Time: 11:12 AM</p>
      </div>
    </div>
  );
}

export default LocationDateTime;
