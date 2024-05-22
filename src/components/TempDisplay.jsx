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
    <div className={`flex flex-col ${design} py-6 text-white`}>
      <div className="flex maxWidth:flex-row flex-col justify-between mx-2">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">{conditions}</p>
          <img className="" src={getIcon(icon)} alt="weatherIcon" />
        </div>

        <div className="flex flex-col items-center">
          <p>FEELS LIKE: {feels_like.toFixed()}°C</p>
          <p className="text-6xl">{temp.toFixed()}°C</p>
          <div className="flex flex-row">
            <p className="mr-2">L: {low.toFixed()}°C</p>
            <p className="ml-2">H: {high.toFixed()}°C</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center flex-col maxWidth:pl-0 pl-7 [&_p]:py-0.5">
            <p>sun rise: {sunrise}</p>
            <p>sun set: {sunset}</p>
            <p>humidity: {humidity}%</p>
            <p>wind speed: {wind_speed}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempDisplay;

// function TempDisplay({
//     design,
//     // current: { temp, conditions }
//   }) {
//     const highLowClass = "flex mx-4 text-white";
//     return (
//       <div className={`flex flex-col ${design} py-4 text-white`}>
//         <p className="flex justify-center text-3xl">
//           {/* {conditions} */}
//           CLEAR
//         </p>
//         <div className="flex flex-row items-center justify-center">
//           <img
//             className=""
//             src="http://openweathermap.org/img/wn/01d@2x.png"
//             alt=""
//           />
//           <p className="text-5xl">
//             {/* {temp.toFixed()}°C */}
//             24
//           </p>
//         </div>
//         <div className="flex flex-col justify-center items-center py-8 text-xl">
//           <p>feels like 19°</p>
//         </div>
//         <div className="flex justify-center items-center flex-row">
//           <p className={highLowClass}>low: 8°</p>
//           <p className={highLowClass}>high: 25°</p>
//         </div>
//       </div>
//     );
//   }
