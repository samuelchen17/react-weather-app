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
  return (
    <div className="flex justify-center mx-auto h-dvh my-auto bg-gradient-to-br from-yellow-200 to-blue-700 shadow-xl shadow-gray-400">
      <div className="w-3/12">
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
