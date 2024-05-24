import React from "react";

function HourlyForecast({ design, getIcon, hourly }) {
  return (
    <div className={`py-2 px-3 ${design} text-white`}>
      <div className="flex items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <p className="text-xl">HOURLY FORECAST</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row overflow-x-auto">
        {hourly.map((data) => (
          <div
            key={data.time}
            className="flex flex-col items-center pl-2 pr-14"
          >
            <p className="text-sm whitespace-nowrap">{data.time}</p>
            <img
              className="size-12"
              src={getIcon(data.icon)}
              alt="weather icon"
            />
            <p className="text-sm">{data.temp.toFixed()}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
