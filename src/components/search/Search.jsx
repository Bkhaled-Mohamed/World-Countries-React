import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Search({ getSearchParams, darkMode }) {
  const [countryName, setCountryName] = useState("");
  const [regionSelected, setRegionSelected] = useState("");

  const sendDataToParent = () => {
    // Update the childData state with some data
    const newData = [countryName, regionSelected];

    // Call the callback function passed from the parent
    getSearchParams(newData);
  };
  useEffect(() => {
    sendDataToParent(); // eslint-disable-next-line
  }, [countryName, regionSelected]);

  return (
    <div className={`search ${darkMode ? "dark" : ""}`}>
      <div className="filterContiner">
        <div className="searchBar">
          <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
          <input
            className={`inputText2 ${darkMode ? "dark" : ""}`}
            type="text"
            autocomplete="new-password"
            placeholder="Search for a Country"
            onChange={(e) => {
              setCountryName(e.target.value);
            }}
          />
        </div>
        <div className="filters">
          <select
            name="filter"
            onChange={(e) => {
              setRegionSelected(e.target.value);
            }}
          >
            <option value="filter" disabled selected>
              Filter by region
            </option>
            <option value="africa"> Africa</option>
            <option value="europe"> Europe</option>
            <option value="Americas"> America</option>
            <option value="asia"> Asia</option>
            <option value="oceania"> Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
}
