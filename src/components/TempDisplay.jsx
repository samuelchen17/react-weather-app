import React from "react";

function TempDisplay({
  design,
  getIcon,
  current: {
    conditions,
    icon,
    feels_like,
    temp,
    low,
    high,
    sunrise,
    sunset,
    humidity,
    wind_speed,
  },
}) {
  return (
    <div className={`flex flex-col ${design} py-6 text-white h-full`}>
      <p className="flex justify-center text-xl font-bold pb-4">{conditions}</p>

      <div className="flex maxWidth:flex-row maxWidth:justify-center flex-col mx-2">
        <div className="flex flex-col items-center maxWidth:mr-6">
          <p>Feels like {feels_like.toFixed()}°</p>
          <p className="text-6xl py-2">{temp.toFixed()}°C</p>
          <div className="flex flex-row">
            <p className="mr-2">L: {low.toFixed()}°</p>
            <p className="ml-2">H: {high.toFixed()}°</p>
          </div>
        </div>
        <div className="flex flex-col items-center maxWidth:ml-6">
          <img className="size-32" src={getIcon(icon)} alt="weatherIcon" />
        </div>

        <div className="flex flex-col items-center"></div>
      </div>
      <div className="flex items-center flex-col maxWidth:pl-0 maxWidth:pt-4">
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {wind_speed.toFixed(1)} km/h</p>
      </div>
    </div>
  );
}

export default TempDisplay;
