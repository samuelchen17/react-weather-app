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
                <div className="maxWidth:pr-9 space-y-1">
                  <p>Sunrise: </p>
                  <p>Sunset: </p>
                  <p>Temperature: </p>
                </div>
                <div className="space-y-1">
                  <p>20%</p>
                  <p>20deg</p>
                  <p>30km/h</p>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="space-y-1">
                  <p>Feels like:</p>
                  <p>Humidity: </p>
                  <p>Wind: </p>
                </div>
                <div className="maxWidth:pl-16 space-y-1">
                  <p>8:00am</p>
                  <p>8pm</p>
                  <p>40km/h</p>
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
