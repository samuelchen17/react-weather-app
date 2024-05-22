import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/";

// get api URL
function getWeatherUrl(version, apiName, searchParams) {
  const url = new URL(BASE_URL + version + "/" + apiName);
  // spreading searchParam here as it is from App.jsx
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
}

// get coordinates of the city
const getLatLon = (data) => {
  const {
    coord: { lat, lon },
  } = data;

  return { lat, lon };
};

// Format data
const formatWeatherData = (data) => {
  let { timezone, current, hourly, daily } = data;

  current = {
    date: formatDateTime(current.dt, timezone, "cccc, dd LLL yyyy"),
    time: formatDateTime(current.dt, timezone, "hh:mm a"),
    temp: current.temp,
    sunrise: formatDateTime(current.sunrise, timezone, "hh:mm a"),
    sunset: formatDateTime(current.sunset, timezone, "hh:mm a"),
    feels_like: current.feels_like,
    conditions: current.weather[0].main,
    icon: current.weather[0].icon,
    low: daily[0].temp.min,
    high: daily[0].temp.max,
    humidity: current.humidity,
    wind_speed: current.wind_speed,
  };

  hourly = hourly.slice(1, 24).map((d) => {
    return {
      time: formatDateTime(d.dt, timezone, "hh:mm a"),
      icon: d.weather[0].icon,
      temp: d.temp,
    };
  });

  daily = daily.slice(1, 7).map((d) => {
    return {
      day: formatDateTime(d.dt, timezone, "ccc"),
      icon: d.weather[0].icon,
      temp: d.temp.day,
      low: d.temp.min,
      high: d.temp.max,
    };
  });

  return { timezone, current, hourly, daily };
};

const formatDateTime = (
  seconds,
  timezone,
  format = "cccc, dd LLL yyyy hh:mm a"
) => DateTime.fromSeconds(seconds).setZone(timezone).toFormat(format);

// Get weather icon from URL
const getIconFromURL = (iconID) =>
  `http://openweathermap.org/img/wn/${iconID}@2x.png`;

// Get the weather data from the API using coordinates
const weatherData = async (searchParams) => {
  // get coordinates based on city name search
  const cityCoord = await getWeatherUrl("2.5", "weather", searchParams).then(
    getLatLon
  );

  // format the weather data
  const formattedWeatherData = getWeatherUrl("3.0", "onecall", {
    lat: cityCoord.lat,
    lon: cityCoord.lon,
    exclude: "minutely,alerts",
    appid: API_KEY,
    units: "metric",
  }).then(formatWeatherData);

  //   console.log(formattedWeatherData);
  return formattedWeatherData;
};

export { getIconFromURL, weatherData };
