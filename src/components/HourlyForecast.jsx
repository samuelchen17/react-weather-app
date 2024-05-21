import React from "react";

function HourlyForecast({ rounding }) {
  return (
    <div
      className={`bg-sky-500/[.30] shadow-xl my-2 py-2 px-3 ${rounding} text-white`}
    >
      <div className="flex items-center justify-start">
        <p className="text-xl">HOURLY FORECAST</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
