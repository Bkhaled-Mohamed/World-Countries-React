import { useNavigate } from "react-router-dom";
import "./country.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getInformation } from "../../services/CountryApi";

function Country(props) {
  const { countryCode } = useParams();
  const { darkMode } = props;
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    getInformation(countryCode)
      .then((response) => {
        const countries = response.data[0];
        setCountryInfo(countries);
      })
      .catch((error) => {});
  }, [countryCode]);

  const navigate = useNavigate();
  return (
    <div className="country">
      <div className="countryContainer">
        <button
          className={`backBtn ${darkMode ? "dark" : ""}`}
          onClick={() => navigate("/")}
        >
          Back
        </button>
        {
          <div className="countryInfo">
            <img
              className="imgInfo"
              src={countryInfo.flags?.png}
              alt={countryInfo.name?.common}
            />
            <div className="textInfo">
              <h2> {countryInfo.name?.common}</h2>
              <p>Population : {countryInfo.population}</p>
              <p>Region : {countryInfo.region}</p>
              <p>Capital : {countryInfo.capital}</p>
              <p>area : {countryInfo.area}</p>

              <p>independent : {countryInfo.independent ? "Yes" : "No"}</p>
              <p>timezones : {countryInfo.timezones}</p>
              <p>startOfWeek : {countryInfo.startOfWeek}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Country;
