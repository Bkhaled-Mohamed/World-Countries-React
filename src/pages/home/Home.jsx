import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { AllCountry } from "../../services/CountryApi";
import "./home.css";
import Search from "../../components/search/Search";
import { Link } from "react-router-dom";

function Home({ darkMode }) {
  const [country, setCountry] = useState([]);
  const [searchParams, setSearchParams] = useState([]);

  function getSearchParams(data) {
    setSearchParams(data);
  }

  useEffect(() => {
    // Fetch all countries
    AllCountry().then((result) => {
      const countries = result.data;

      // Filter countries based on searchParams
      const filteredCountries = countries.filter((country) => {
        const [countryName, regionSelected] = searchParams;

        // Apply filters if provided
        if (
          countryName &&
          !country.name.common.toLowerCase().includes(countryName.toLowerCase())
        ) {
          return false; // Filter out if name doesn't match
        }
        if (
          regionSelected &&
          country.region.toLowerCase() !== regionSelected.toLowerCase()
        ) {
          return false; // Filter out if region doesn't match
        }

        return true;
      });

      setCountry(filteredCountries);
    });
  }, [searchParams]);

  return (
    <div className={`home ${darkMode ? "dark" : ""}`}>
      <Search getSearchParams={getSearchParams} darkMode={darkMode} />
      <div className="homeContainer">
        {country.map((country) => (
          <Link
            to={`/country/${country.cioc}`}
            key={country.cioc}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card
              darkMode={darkMode}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.png}
              key={country.cioc}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
