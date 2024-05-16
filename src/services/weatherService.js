// Function to get weather data
// inside the function https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const API_KEY = "d7881d60997d7fe4569ea1041e781487";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function constructWeatherUrl(cityName, apiKey) {
  const infoType = "/weather";
  const url = new URL(BASE_URL + infoType);
  const searchParams = {
    q: cityName,
    appid: API_KEY,
  };

  url.search = new URLSearchParams(searchParams);

  return fetch(url);
}

// function to get weather API
const getWeatherData = (infoType, searchParams) => {
  // URL constructor
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

// format weather data into usable variables
const formatCurrentWeather = (data) => {
  const {
    // coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max },
    name,
    sys: { country, sunset, sunrise },
    dt,
    wind: { speed },
  } = data;

  // weather is in array format
  const { main: conditions, icon } = weather[0];

  return {
    // lat,
    // lon,
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
    conditions,
    icon,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
};

export default getFormattedWeatherData;
