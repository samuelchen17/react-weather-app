import React from "react";

function TempDisplay({
  rounding,
  // current: { temp, conditions }
}) {
  const highLowClass = "flex mx-4 text-white";
  return (
    <div
      className={`flex flex-col ${rounding} my-2 py-4 bg-sky-500/[.30] shadow-xl text-white`}
    >
      <p className="flex justify-center">
        {/* {conditions} */}
        clear day
      </p>
      <div className="flex flex-row items-center justify-center">
        <img
          className=""
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
        />
        <p className="text-5xl">
          {/* {temp.toFixed()}°C */}
          24
        </p>
      </div>
      <div className="flex flex-col justify-center items-center py-8 text-xl">
        <p>feels like 19°</p>
      </div>
      <div className="flex justify-center items-center flex-row">
        <p className={highLowClass}>low: 8°</p>
        <p className={highLowClass}>high: 25°</p>
      </div>
    </div>
  );
}

export default TempDisplay;
