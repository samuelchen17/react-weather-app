const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/";

// this function gets the open weather api URL
function getWeatherUrl(version, apiName, searchParams) {
  const url = new URL(BASE_URL + version + "/" + apiName);
  // spreading searchParam here as it is from App.jsx
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  // find out what this line does
  return fetch(url).then((res) => res.json());
}

// const getCoord = (data) => {
//   const {
//     coord: { lat, lon },
//   } = data;

//   return { lat, lon };
// };

// Get the weather data from the API using coordinates
const formattedWeatherData = async (searchParams) => {
  // get coordinates based on city name search
  const cityCoord = await getWeatherUrl("2.5", "weather", searchParams).then(
    (data) => {
      const {
        coord: { lat, lon },
      } = data;

      return { lat, lon };
    }
  );

  // format the weather data
  const formatWeatherData = getWeatherUrl("3.0", "onecall", {
    lat: cityCoord.lat,
    lon: cityCoord.lon,
    appid: API_KEY,
  }).then((data) => {
    let { lat, lon } = data;
    // slice the data here
  });

  console.log(formatWeatherData);
  return formatWeatherData;
};

// format weather data into usable variables
// const formatCurrentWeather = (data) => {
//   const {
//     coord: { lat, lon },
//     main: { temp, feels_like, temp_min, temp_max },
//     name,
//     sys: { country, sunrise, sunset },
//     dt,
//     weather,
//     wind: { speed },
//   } = data;

//   // Need to further destructure weather
//   const { main: details, icon } = weather[0];

//   return {
//     lat,
//     lon,
//     temp,
//     feels_like,
//     temp_min,
//     temp_max,
//     name,
//     country,
//     sunset,
//     sunrise,
//     dt,
//     speed,
//     details,
//     icon,
//   };
// };

// const getFormattedWeatherData = async (searchParams) => {
//   const formattedCurrentWeather = await getWeatherUrl(
//     "weather",
//     searchParams
//   ).then(formatCurrentWeather);

//   //   const { lat, lon } = formattedCurrentWeather;
//   return formattedCurrentWeather;
// };

export default formattedWeatherData;
