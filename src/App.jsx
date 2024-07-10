import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import LocationDateTime from "./components/LocationDateTime";
import TempDisplay from "./components/TempDisplay";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import { getIconFromURL, weatherData } from "./services/openWeatherApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [search, setSearch] = useState({
    lat: -33.86785,
    lon: 151.20732,
  });
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState({});

  // runs on first render and anytime search changes
  useEffect(() => {
    const fetchWeather = async () => {
      toast.info("Fetching weather data.");
      await weatherData({ ...search }).then((data) => {
        toast.success("Weather data fetched.");
        setWeather(data);
      });
    };
    fetchWeather();
  }, [search]);

  const dayTheme = {
    backgroundTheme:
      "bg-gradient-to-br from-yellow-100 from-5% to-blue-400 to-90%",
    elementTheme: "rounded-xl bg-sky-500/[.30] shadow-xl my-3",
  };
  const nightTheme = {
    backgroundTheme:
      "bg-gradient-to-br from-gray-400 from-5% to-gray-900 to-90%",
    elementTheme: "rounded-xl bg-sky-800/[.30] shadow-xl my-3",
  };

  // change background colour depending on day or night
  useEffect(() => {
    if (weather) {
      if (
        weather.current.dt >= weather.current.riseDt &&
        weather.current.dt <= weather.current.setDt
      ) {
        setBackground(dayTheme); // could make this into an object to change element backgrounds
      } else {
        setBackground(nightTheme);
      }
    }
  }, [weather]);

  return (
    <div
      className={`flex justify-center min-h-dvh ${background.backgroundTheme} md:items-center`}
    >
      <div className="flex flex-col h-fit w-full max-w-[1000px] px-2 flex-wrapp outline">
        <SearchBar setSearch={setSearch} />
        {/* if weather is not null, then load */}
        {weather && (
          <div className="outline md:flex md:justify-between gap-4">
            <div className="md:w-[500px]">
              <LocationDateTime
                timezone={weather.timezone}
                current={weather.current}
                design={background.elementTheme}
                cityInfo={weather.cityInfo}
              />
              <TempDisplay
                current={weather.current}
                design={background.elementTheme}
                getIcon={getIconFromURL}
              />
            </div>
            <div className="md:w-[500px] outline outline-red-500">
              <HourlyForecast
                hourly={weather.hourly}
                design={background.elementTheme}
                getIcon={getIconFromURL}
              />
              <WeeklyForecast
                daily={weather.daily}
                design={background.elementTheme}
              />
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        limit={2}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
