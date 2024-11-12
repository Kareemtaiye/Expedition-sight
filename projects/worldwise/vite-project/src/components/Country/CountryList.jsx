import { useCities } from "../../hooks/CityContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

function CountryList() {
  const { cities, isLoading } = useCities();

  const uniqueCountries = [];

  const countries = cities.reduce((city, arr) => {
    const currCountry = arr.country;
    if (!uniqueCountries.map((el) => el.country).includes(currCountry)) {
      uniqueCountries.push(arr);
    }

    if (!city.map((el) => el.country).includes(currCountry)) {
      city.push(arr);
    }
    return city;
  }, []);

  console.log(uniqueCountries);
  console.log(countries);

  if (isLoading) return <p>Loading.......</p>;
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}
export default CountryList;
