import React from "react";

function WeeklyForecast({ rounding }) {
  return (
    <div className={`bg-red-700 my-2 pb-2 pt-2 px-3 ${rounding}`}>
      <div className="flex items-center justify-start">
        <p className="text-white text-xl">WEEKLY FORECAST</p>
      </div>
      <div className="flex flex-row justify-between">
        <p>DAY</p>
        <p>ICON</p>
        <p>LOW</p>
        <p>HIGH</p>
      </div>
      <hr className="text-white"></hr>
      <div className="flex flex-col justify-between text-white">
        <div className="flex flex-row justify-between bg-black rounded-md my-1">
          <p className="text-sm">MON</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm">12</p>
          <p className="text-sm">16</p>
        </div>
        <div className="flex flex-row justify-between bg-black rounded-md my-1">
          <p className="text-sm">MON</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm">12</p>
          <p className="text-sm">16</p>
        </div>
      </div>
    </div>
  );
}

export default WeeklyForecast;
