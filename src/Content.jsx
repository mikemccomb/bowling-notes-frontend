import axios from "axios";
import { useEffect, useState } from "react";
import { SeasonList } from "./SeasonList";
import { Modal } from "./Modal";
import { SeasonsNew } from "./SeasonsNew";

export function Content() {
  const [seasons, setSeasons] = useState([]);
  const [isSeasonsNewVisible, setIsSeasonsNewVisible] = useState(false);

  const handleShowSeasonsNew = () => {
    console.log("handleShowSeasonsNew");
    setIsSeasonsNewVisible(true);
  };

  const handleCreateSeason = (params, successCallback) => {
    console.log("handleCreateSeason", params);
    axios.post("http://localhost:3000/seasons.json", params).then((response) => {
      setSeasons([...seasons, response.data]);
      successCallback();
      setIsSeasonsNewVisible(false);
    });
  };

  const handleIndexSeasons = () => {
    console.log("handleIndexSeason");
    axios.get("http://localhost:3000/seasons.json").then((response) => {
      console.log(response.data);
      setSeasons(response.data);
    });
  };

  const handleClose = () => {
    setIsSeasonsNewVisible(false);
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
        <button className="btn btn-primary" onClick={handleShowSeasonsNew}>
          Add Season
        </button>
        <Modal show={isSeasonsNewVisible} onClose={handleClose}>
          <SeasonsNew onCreateSeason={handleCreateSeason} />
        </Modal>
      </div>
      <div className="card-body">
        <h2 className="card-title">Season Information</h2>
        <SeasonList className="card-text" seasons={seasons} />
      </div>
    </div>
  );
}
