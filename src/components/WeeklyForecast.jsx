import React from "react";

function WeeklyForecast({ design, getIcon, daily }) {
  return (
    <div className={`py-2 px-3 ${design} text-white `}>
      <div className="flex flex-row items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        <p className="text-white text-xl"> DAILY FORECAST</p>
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
