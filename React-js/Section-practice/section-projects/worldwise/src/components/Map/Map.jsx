import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../../contexts/CitiesContext";
import { Twemoji } from "react-emoji-render";

function Map() {
  // const navigate = useNavigate();
  const [mapPosition] = useState([40, 0]);
  const { cities } = useCities();

  const [searchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          const {
            position: { lat, lng },
            emoji,
            cityName,
            id,
          } = city;

          return (
            <Marker position={[lat, lng]} key={id}>
              <Popup>
                <Twemoji text={emoji} /> <p>{cityName}</p>
              </Popup>
            </Marker>
          );
        })}
        <ChangeCenter position={[mapLat || 40, mapLng || 0]} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
