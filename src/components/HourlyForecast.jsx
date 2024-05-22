import React from "react";

function HourlyForecast({ design }) {
  return (
    <div className={`py-2 px-3 ${design} text-white`}>
      <div className="flex items-center justify-start">
        <p className="text-xl">time icon HOURLY FORECAST</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row overflow-x-auto [&_div]:mr-20">
        <div className="flex flex-col items-center">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm">20</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm">20</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm">20</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm">20</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">11:00pm</p>
          <img
            className="size-12"
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm">20</p>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
