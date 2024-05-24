import React, { useState } from "react";
import { getIconFromURL } from "../services/openWeatherApi";

function AccordionDailyForecast({ daily }) {
  // track which accordion is open
  const [openIndex, setOpenIndex] = useState(null);

  // if true, accordion is open so therefore, set to null to close accordion, openIndex != index
  // if false, accordion is closed so set openIndex to index and render the element, openIndex == index
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {daily.map((data, index) => (
        <div key={data.day}>
          <div
            className="flex flex-row justify-between items-center rounded-md my-1 cursor-pointer"
            // defer execution untill onClick event occurs
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-sm">{data.day}</p>
            <img
              className="size-12 ml-2"
              src={getIconFromURL(data.icon)}
              alt="weather icon"
            />
            <p className="text-sm px-3 pr-5">{data.low.toFixed()}°</p>
            <p className="text-sm pr-2">{data.high.toFixed()}°</p>
          </div>
          {/* render only if user clicked the element */}
          {openIndex === index && (
            <div className="flex maxWidth:flex-row mb-4 flex-col justify-between text-sm">
              <div className="flex flex-row justify-between">
                <div className="maxWidth:pr-20 space-y-1">
                  <p>Sunrise: </p>
                  <p>Sunset: </p>
                  <p>Wind: </p>
                </div>
                <div className="space-y-1">
                  <p>{data.sunrise}</p>
                  <p>{data.sunset}</p>
                  <p>{data.wind_speed.toFixed(1)} km/h</p>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="space-y-1">
                  <p>Temperature: </p>
                  <p>Feels like:</p>
                  <p>Humidity: </p>
                </div>
                <div className="maxWidth:pl-16 space-y-1">
                  <p>{data.temp.toFixed()}°</p>
                  <p>{data.feels_like.toFixed()}°</p>
                  <p>{data.humidity}%</p>
                </div>
              </div>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AccordionDailyForecast;
