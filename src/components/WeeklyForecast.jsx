import React from "react";

function WeeklyForecast({ rounding }) {
  return (
    <div
      className={`bg-sky-500/[.30] shadow-xl my-2 py-2 px-3 ${rounding} text-white`}
    >
      <div className="flex items-center justify-start">
        <p className="text-white text-xl">WEEKLY FORECAST</p>
      </div>
      <div className="flex flex-row justify-between my-2">
        <p>DAY</p>
        <p>ICON</p>
        <p>LOW</p>
        <p>HIGH</p>
      </div>
      <hr className=""></hr>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center rounded-md my-1">
          <p className="text-sm">MON</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm">12</p>
          <p className="text-sm">16</p>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default WeeklyForecast;
