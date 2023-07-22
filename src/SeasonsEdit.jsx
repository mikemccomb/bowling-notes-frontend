import axios from "axios";
import { useState } from "react";

export function SeasonsEdit() {
  const [seasons, setSeasons] = useState([]);

  const handleUpdateSeason = (id, params, successCallback) => {
    console.log("handleUpdateSeason", params);
    axios.patch(`http://localhost:3000/seasons/${id}.json`, params).then((response) => {
      setSeasons(
        seasons.map((season) => {
          if (season.id === response.data.id) {
            return response.data;
          } else {
            return season;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };
  return (
    <div>
      <h1>Edit season</h1>
      <button onClick={handleUpdateSeason}>No Click</button>
    </div>
  );
}
