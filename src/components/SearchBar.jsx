import React from "react";

function SearchBar() {
  const iconClass =
    "w-12 h-12 text-white cursor-pointer transition ease-out hover:scale-125";
  return (
    <div className="flex flex-row justify-start my-6">
      <div className="flex flex-row w-full items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="city name"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        {/* search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={iconClass}
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* <div className="flex flex-row w-1/4 items-center justify-center">°</div> */}
    </div>
  );
}

export default SearchBar;
