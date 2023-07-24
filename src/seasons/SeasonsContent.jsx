import { useState, useEffect } from "react";
import { SeasonsIndex } from "./SeasonsIndex";
import axios from "axios";
import { SeasonsNew } from "./SeasonsNew";
import { Modal } from "../Modal";
import { SeasonsShow } from "./SeasonsShow";

export function SeasonsContent() {
  const [seasons, setSeasons] = useState([]);
  const [isSeasonsShowVisible, setIsSeasonsShowVisible] = useState(false);
  const [currentSeason, setCurrentSeason] = useState({});

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

  const handleShowSeason = (season) => {
    console.log("handleShowSeason", season);
    setIsSeasonsShowVisible(true);
    setCurrentSeason(season);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSeasonsShowVisible(false);
  };

  useEffect(handleIndexSeasons, []);

  return (
    <div>
      <SeasonsNew onCreateSeason={handleCreateSeason} />
      <SeasonsIndex seasons={seasons} onShowSeason={handleShowSeason} />
      <Modal show={isSeasonsShowVisible} onClose={handleClose}>
        <SeasonsShow season={currentSeason} />
      </Modal>
    </div>
  );
}
