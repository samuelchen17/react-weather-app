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
        <p>Rise: {sunrise}</p>
        <p>Set: {sunset}</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {wind_speed.toFixed(1)} km/h</p>
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
