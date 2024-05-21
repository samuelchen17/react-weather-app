import React from "react";

function WeeklyForecast({ design }) {
  return (
    <div className={`py-2 px-3 ${design} text-white `}>
      <div className="flex items-center justify-start">
        <p className="text-white text-xl">calendar icon WEEKLY FORECAST</p>
      </div>

      <div className="flex flex-row justify-between my-2">
        <p>DAY</p>
        <p>ICON</p>
        <p>LOW</p>
        <p>HIGH</p>
      </div>
      <hr />

      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center rounded-md my-1">
          <p className="text-sm ">MON</p>
          <img
            className="size-12 "
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm px-3 pr-7">12</p>
          <p className="text-sm pr-3">16</p>
        </div>
        <hr></hr>
        <div className="flex flex-row justify-between items-center rounded-md my-1">
          <p className="text-sm ">MON</p>
          <img
            className="size-12 "
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm px-3 pr-7">12</p>
          <p className="text-sm pr-3">16</p>
        </div>
        <hr></hr>
        <div className="flex flex-row justify-between items-center rounded-md my-1">
          <p className="text-sm ">MON</p>
          <img
            className="size-12 "
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm px-3 pr-7">12</p>
          <p className="text-sm pr-3">16</p>
        </div>
        <hr></hr>
        <div className="flex flex-row justify-between items-center rounded-md my-1">
          <p className="text-sm ">MON</p>
          <img
            className="size-12 "
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-sm px-3 pr-7">12</p>
          <p className="text-sm pr-3">16</p>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default WeeklyForecast;
