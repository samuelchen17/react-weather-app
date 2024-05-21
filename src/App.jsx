import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import LocationDateTime from "./components/LocationDateTime";
import TempDisplay from "./components/TempDisplay";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import { getIconFromURL, weatherData } from "./services/weatherService";

function App() {
  const [search, setSearch] = useState({ q: "melbourne" });
  const [weather, setWeather] = useState(null);

  // runs on first render and anytime search changes
  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     // const data = await weatherData({ q: "melbourne" });
  //     // console.log(data);
  //     await weatherData({ ...search }).then((data) => {
  //       setWeather(data);
  //     });
  //   };

  //   fetchWeather();
  // }, [search]);

  // console.log(weather.current.conditions);

  const containerRounding = "rounded-xl";

  const dayTime =
    "bg-gradient-to-br from-yellow-100 from-5% to-blue-400 to-90%";
  const nightTime =
    "bg-gradient-to-br from-gray-400 from-5% to-gray-900 to-90%"; // gray 800 for child elements

  return (
    <div className={`flex justify-center min-h-dvh ${dayTime}`}>
      <div className="flex flex-col h-fit w-dvw max-w-lg my-4 px-2 outline-dotted outline-green-500 overflow-auto">
        <SearchBar rounding={containerRounding} />

        {/* if weather is not null, then load */}
        {/* {weather && (
          <div> */}
        <LocationDateTime rounding={containerRounding} />
        <TempDisplay
          // current={weather.current}
          rounding={containerRounding}
        />

        <HourlyForecast
          // items={weather.hourly}
          rounding={containerRounding}
        />
        <WeeklyForecast
          // items={weather.daily}
          rounding={containerRounding}
        />
        {/* </div>
        )} */}
      </div>
    </div>
  );
}

export default App;
