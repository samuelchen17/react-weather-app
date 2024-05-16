import { useState } from "react";
import SearchBar from "./components/SearchBar";
import LocationDateTime from "./components/LocationDateTime";
import TempDisplay from "./components/TempDisplay";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-yellow-200 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <SearchBar />
      <LocationDateTime />
      <TempDisplay />
      <HourlyForecast />
      <HourlyForecast />
    </div>
  );
}

export default App;
