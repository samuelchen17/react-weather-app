import React from "react";

function TempDisplay() {
  const highLowClass = "flex mx-4 text-white";
  return (
    <>
      <div className="flex flex-col rounded-xl my-2.5 bg-cyan-500">
        <p className="flex justify-center text-white ">Clear</p>
        <div className="flex flex-row items-center justify-center">
          <img
            className=""
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
          <p className="text-5xl">21°</p>
        </div>
        <div className="flex flex-col justify-center items-center py-8 text-white text-xl">
          <p>feels like 19°</p>
        </div>
        <div className="flex justify-center items-center flex-row">
          <p className={highLowClass}>low: 8°</p>
          <p className={highLowClass}>high: 25°</p>
        </div>
      </div>
    </>
  );
}

export default TempDisplay;
