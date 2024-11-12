import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./City.module.css";
import ButtonBack from "../Button/ButtonBack";
import { useCities } from "../../hooks/CityContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { city, getCity, isLoading, errorMsg } = useCities();

  // const [currentCity, setCurrentCity] = useState({});

  const { cityName, emoji, date, notes } = city;

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <p>Loading.....</p>;

  if (errorMsg) return <p>{errorMsg}</p>;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack onClick={() => navigate(-1)}>Back</ButtonBack>
      </div>
    </div>
  );
}

export default City;
