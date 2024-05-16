import React from "react";

function HourlyForecast({ rounding }) {
  return (
    <div className={`bg-red-700 my-2 pb-2 pt-2 px-3 ${rounding}`}>
      <div className="flex items-center justify-start">
        <p className="text-white text-xl">HOURLY FORECAST</p>
      </div>
      <hr className="text-white"></hr>
      <div className="flex flex-row items-center justify-between text-white">
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
