import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat, lng);

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h2>Position</h2>

      <span>
        {lat} {lng}
      </span>
      <button onClick={() => setSearchParams({ lat: 500, lng: 500 })}>
        Change Positions
      </button>
    </div>
  );
}

export default Map;
