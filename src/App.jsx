import { useState } from "react";
import SearchBar from "./components/SearchBar";
import LocationDateTime from "./components/LocationDateTime";
import TempDisplay from "./components/TempDisplay";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import { getIconFromURL, weatherData } from "./services/weatherService";

function App() {
  const [search, setSearch] = useState("");

  const fetchWeather = async () => {
    const data = await weatherData({ q: "melbourne" });
    console.log(data);
  };

  fetchWeather();

  const containerRounding = "rounded-xl";
  return (
    <div className="flex justify-center mx-auto h-dvh my-auto bg-gradient-to-br from-yellow-200 to-blue-700 shadow-xl shadow-gray-400">
      <div className="w-3/12">
        <SearchBar rounding={containerRounding} />
        <LocationDateTime rounding={containerRounding} />
        <TempDisplay rounding={containerRounding} />
        <HourlyForecast rounding={containerRounding} />
        <WeeklyForecast rounding={containerRounding} />
      </div>
    </div>
  );
}

export default App;
