import { useState } from "react";
import { Modal } from "../Modal";
import { SeasonsNew } from "../seasons/SeasonsNew";
import axios from "axios";

export function LeagueInfo() {
  const [showCreateSeason, setShowCreateSeason] = useState(false);
  const [seasons, setSeasons] = useState([]);

  const handleShowCreateSeason = () => {
    setShowCreateSeason(true);
  };

  const handleClose = () => {
    setShowCreateSeason(false);
  };

  const handleCreateSeason = (params, successCallback) => {
    console.log("handleCreateSeason", params);
    axios.post("/seasons.json", params).then((response) => {
      setSeasons([...seasons, response.data]);
      successCallback();
    });
    handleClose();
    window.location.reload(false);
  };

  return (
    <div className="container-flex">
      <div className="card mt-3">
        <h1 className="card-header">League Name</h1>
        <div className="card-body">
          <h2 className="card-title">League Information</h2>
          <p className="card-text">Day, Time, Center, Other Info</p>
        </div>
        <div className="card-body">
          <button className="btn btn-success" onClick={handleShowCreateSeason}>
            Add Season
          </button>
        </div>
        <Modal show={showCreateSeason} onClose={handleClose}>
          <SeasonsNew onCreateSeason={handleCreateSeason} />
        </Modal>
      </div>
    </div>
  );
}
