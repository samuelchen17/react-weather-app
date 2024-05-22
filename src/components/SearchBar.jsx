import React, { useState } from "react";

function SearchBar({ setSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") setSearch({ q: city });
  };

  const iconClass =
    "w-12 h-12 text-white cursor-pointer transition ease-out hover:scale-125";
  return (
    <div className="flex flex-row w-full items-center justify-center my-2 space-x-2 ">
      <input
        type="text"
        placeholder="city name"
        className={`text-xl font-light p-2 w-full shadow-xl focus:outline-none rounded-xl capitalize placeholder:lowercase`}
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
      />
      {/* search icon */}
      <svg
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
      </svg>
    </div>
  );
}

export default SearchBar;
