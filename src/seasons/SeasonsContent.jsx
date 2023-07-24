import { useState, useEffect } from "react";
import { SeasonsIndex } from "./SeasonsIndex";
import axios from "axios";
import { SeasonsNew } from "./SeasonsNew";

export function SeasonsContent() {
  const [seasons, setSeasons] = useState([]);

  const handleIndexSeasons = () => {
    console.log("handleIndexSeasons");
    axios.get("http://localhost:3000/seasons.json").then((response) => {
      console.log(response.data);
      setSeasons(response.data);
    });
  };

  const handleCreateSeason = (params, successCallback) => {
    console.log("handleCreateSeason", params);
    axios.post("http://localhost:3000/seasons.json", params).then((response) => {
      setSeasons([...seasons, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexSeasons, []);

  return (
    <div>
      <SeasonsNew onCreateSeason={handleCreateSeason} />
      <SeasonsIndex seasons={seasons} />
    </div>
  );
}
