const API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

export const GEO_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const geoOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};
