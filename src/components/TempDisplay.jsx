import React from "react";

function TempDisplay({
  design,
  // current: { temp, conditions }
}) {
  return (
    <div className={`flex flex-col ${design} py-6 text-white`}>
      <div className="flex maxWidth:flex-row flex-col justify-between mx-2">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">CLEAR</p>
          <img
            className=""
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center">
          <p>FEELS LIKE: 20</p>
          <p className="text-6xl">25</p>
          <div className="flex flex-row">
            <p className="mr-2">L: 25</p>
            <p className="ml-2">H: 15</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-center flex-col maxWidth:pl-0 pl-7 [&_p]:py-0.5">
            <p>sun rise</p>
            <p>sun set: 25°</p>
            <p>humidity: 8°</p>
            <p>wind speed: 25°</p>
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
