import CityItem from "./CityItem";
import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) return <p>Loading.......</p>;

  return (
    <ul className={styles.citylist}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
