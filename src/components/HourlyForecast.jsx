import React from "react";

function HourlyForecast({ design, getIcon, hourly }) {
  return (
    <div className={`py-2 px-3 ${design} text-white`}>
      <div className="flex items-center justify-start">
        <p className="text-xl">time icon HOURLY FORECAST</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row overflow-x-auto">
        {hourly.map((data) => (
          <div className="flex flex-col items-center pr-16">
            <p className="text-sm whitespace-nowrap">{data.time}</p>
            <img className="size-12" src={getIcon(data.icon)} alt="" />
            <p className="text-sm">{data.temp.toFixed()}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
