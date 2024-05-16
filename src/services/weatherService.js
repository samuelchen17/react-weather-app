// Function to get weather data
// inside the function https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_KEY = "d7881d60997d7fe4569ea1041e781487";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// this function gets the open weather api URL
function getWeatherUrl(infoType, searchParams) {
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

  return formattedCurrentWeather;
};

export default getFormattedWeatherData;
