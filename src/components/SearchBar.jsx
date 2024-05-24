import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_URL, geoOptions } from "../services/geoDbApi";

function SearchBar({ setSearch }) {
  const [city, setCity] = useState(null);

  const handleSearch = (searchData) => {
    setCity(searchData);
    setSearch(formatCityData(searchData));
  };

  const formatCityData = (searchData) => {
    const [lat, lon] = searchData.value.split(" ").map(Number);
    const [cityName, country] = searchData.label
      .split(", ")
      // trim to remove any remaining white space
      .map((str) => str.trim());
    const cityData = {
      cityName: cityName,
      country: country,
      lat: lat,
      lon: lon,
    };
    return cityData;
  };

  const loadOptions = async (userInput) => {
    const URL = `${GEO_URL}?minPopulation=1000000&namePrefix=${userInput}`;
    try {
      const response = await fetch(URL, geoOptions);
      const result = await response.json();
      // console.log(result);
      return {
        options: result.data.map((city) => ({
          label: `${city.name}, ${city.countryCode}`,
          value: `${city.latitude} ${city.longitude}`,
        })),
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row w-full items-center justify-center my-2 space-x-2 ">
      <AsyncPaginate
        className={`text-xl font-light p-2 w-full`}
        placeholder="city name"
        debounceTimeout={700}
        value={city}
        onChange={handleSearch}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default SearchBar;
