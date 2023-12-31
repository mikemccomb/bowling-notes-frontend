import { useState, useEffect } from "react";
import { SeasonsIndex } from "./SeasonsIndex";
import axios from "axios";

export function SeasonsContent() {
  const [seasons, setSeasons] = useState([]);

  const handleIndexSeasons = () => {
    console.log("handleIndexSeasons");
    axios.get("/seasons.json").then((response) => {
      console.log("Response Data", response.data);
      setSeasons(response.data);
    });
  };

  useEffect(handleIndexSeasons, []);

  return (
    <div>
      <SeasonsIndex seasons={seasons} />
    </div>
  );
}
