import React from "react";

function WeeklyForecast({ design, getIcon, daily }) {
  return (
    <div className={`py-2 px-3 ${design} text-white `}>
      <div className="flex items-center justify-start">
        <p className="text-white text-xl">calendar icon Daily FORECAST</p>
      </div>

      <div className="flex flex-row justify-between my-2">
        <p>DAY</p>
        <p>ICON</p>
        <p>LOW</p>
        <p>HIGH</p>
      </div>
      <hr />

      <div className="flex flex-col">
        {daily.map((data) => (
          <>
            <div className="flex flex-row justify-between items-center rounded-md my-1">
              <p className="text-sm ">{data.day}</p>
              <img className="size-12 " src={getIcon(data.icon)} alt="" />
              <p className="text-sm px-3 pr-7">{data.low.toFixed()}°</p>
              <p className="text-sm pr-3">{data.high.toFixed()}°</p>
            </div>
            <hr></hr>
          </>
        ))}
      </div>
    </div>
  );
}

export default WeeklyForecast;
