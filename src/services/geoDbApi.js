const API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

export const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const geoOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
