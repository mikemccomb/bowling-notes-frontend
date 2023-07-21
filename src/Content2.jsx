import axios from "axios";
import { useEffect, useState } from "react";
import { SeasonList } from "./SeasonList";

export function Content2() {
  const [seasons, setSeasons] = useState([]);

  const handleIndexSeasons = () => {
    console.log("handleIndexSeason");
    axios.get("http://localhost:3000/seasons.json").then((response) => {
      console.log(response.data);
      setSeasons(response.data);
    });
  };

  useEffect(handleIndexSeasons, []);

  return (
    <div className="card mt-3">
      <h1 className="card-header">League Name</h1>
      <div className="card-body">
        <h2 className="card-title">League Information</h2>
        <p className="card-text">Day, Time, Center, Other Info</p>
      </div>
      <div className="card-body">
        <button>Edit League Info</button>
        <button>Add Season</button>
      </div>
      <div className="card-body">
        <h2 className="card-title">Season Information</h2>
        <SeasonList className="card-text" seasons={seasons} />
      </div>
    </div>
  );
}
