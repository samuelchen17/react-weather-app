import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_URL, geoOptions } from "../services/geoDbApi";

function SearchBar({ setSearch, onSearch }) {
  const [city, setCity] = useState(null);

  const handleSearch = (searchData) => {
    setCity(searchData);
    onSearch(searchData);
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

  // const iconClass =
  //   "w-12 h-12 text-white cursor-pointer transition ease-out hover:scale-125";

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
      {/* <input
        type="text"
        placeholder="city name"
        className={`text-xl font-light p-2 w-full shadow-xl focus:outline-none rounded-xl capitalize placeholder:lowercase`}
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
      /> */}
      {/* search icon */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className={iconClass}
        onClick={handleSearch}
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg> */}
    </div>
  );
}

export default SearchBar;
