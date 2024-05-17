// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=28.0836&lon=-80.6081&appid=d7881d60997d7fe4569ea1041e781487

// https://api.openweathermap.org/data/3.0/onecall?lat=28.0836&lon=-80.6081&appid=d7881d60997d7fe4569ea1041e781487

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// this function gets the open weather api URL
function getWeatherUrl(infoType, searchParams) {
  console.log(API_KEY);
  const url = new URL(BASE_URL + infoType);
  // spreading searchParam here as it is from App.jsx
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  // find out what this line does
  return fetch(url).then((res) => res.json());
}

// format weather data into usable variables
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max },
    name,
    sys: { country, sunrise, sunset },
    dt,
    weather,
    wind: { speed },
  } = data;

  // Need to further destructure weather
  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    name,
    country,
    sunset,
    sunrise,
    dt,
    speed,
    details,
    icon,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherUrl(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  //   const { lat, lon } = formattedCurrentWeather;
  return formattedCurrentWeather;
};

export default getFormattedWeatherData;
