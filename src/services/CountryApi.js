import axios from "axios";

const COUNTRY_API = "https://restcountries.com/v3.1/all";

export function AllCountry() {
  return axios
    .get(`${COUNTRY_API}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getInformation(countryCode) {
  const API_ENDPOINT = "https://restcountries.com/v3.1/alpha/";
  return axios.get(`${API_ENDPOINT}${countryCode}`);
}
