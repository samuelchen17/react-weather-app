import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import LocationDateTime from "./components/LocationDateTime";
import TempDisplay from "./components/TempDisplay";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import { getIconFromURL, weatherData } from "./services/openWeatherApi";

function App() {
  const [search, setSearch] = useState({
    cityName: "Sydney",
    country: "AU",
    lat: -33.86785,
    lon: 151.20732,
  });
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState("");

  // runs on first render and anytime search changes
  useEffect(() => {
    const fetchWeather = async () => {
      await weatherData({ ...search }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [search]);

  const containerDesign = "rounded-xl bg-sky-500/[.30] shadow-xl my-3";
  const dayTime =
    "bg-gradient-to-br from-yellow-100 from-5% to-blue-400 to-90%";
  const nightTime =
    "bg-gradient-to-br from-gray-400 from-5% to-gray-900 to-90%"; // gray 800 for child elements

  // change background colour depending on day or night
  useEffect(() => {
    if (weather) {
      if (
        weather.current.dt >= weather.current.riseDt &&
        weather.current.dt <= weather.current.setDt
      ) {
        setBackground(dayTime); // could make this into an object to change element backgrounds
      } else {
        setBackground(nightTime);
      }
    }
  }, [weather]);

  return (
    <div className={`flex justify-center min-h-dvh ${background}`}>
      <div className="flex flex-col h-fit w-dvw max-w-lg px-2 overflow-auto">
        <SearchBar setSearch={setSearch} />
        {/* if weather is not null, then load */}
        {weather && (
          <div>
            <LocationDateTime
              timezone={weather.timezone}
              current={weather.current}
              design={containerDesign}
              location={search}
            />
            <TempDisplay
              current={weather.current}
              design={containerDesign}
              getIcon={getIconFromURL}
            />
            <HourlyForecast
              hourly={weather.hourly}
              design={containerDesign}
              getIcon={getIconFromURL}
            />
            <WeeklyForecast daily={weather.daily} design={containerDesign} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
