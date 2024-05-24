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

// format country and city name
const getCityInfo = (data) => {
  const {
    sys: { country },
    name,
  } = data;
  return { country, name };
};

// Format data
const formatWeatherData = (data, cityInfo) => {
  let { timezone, current, hourly, daily } = data;
  current = {
    date: formatDateTime(current.dt, timezone, "cccc, dd LLL yyyy"),
    time: formatDateTime(current.dt, timezone, "hh:mm a"),
    dt: current.dt,
    riseDt: current.sunrise,
    setDt: current.sunset,
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
      sunrise: formatDateTime(d.sunrise, timezone, "hh:mm a"),
      sunset: formatDateTime(d.sunset, timezone, "hh:mm a"),
      feels_like: d.feels_like.day,
      humidity: d.humidity,
      wind_speed: d.wind_speed,
    };
  });

  return { timezone, current, hourly, daily, cityInfo };
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
  const cityInfo = await getWeatherUrl("2.5", "weather", {
    lat: searchParams.lat,
    lon: searchParams.lon,
    appid: API_KEY,
    units: "metric",
  }).then(getCityInfo);

  // format the weather data
  const formattedWeatherData = await getWeatherUrl("3.0", "onecall", {
    lat: searchParams.lat,
    lon: searchParams.lon,
    exclude: "minutely,alerts",
    appid: API_KEY,
    units: "metric",
  }).then((data) => formatWeatherData(data, cityInfo));

  return formattedWeatherData;
};

export { getIconFromURL, weatherData };
