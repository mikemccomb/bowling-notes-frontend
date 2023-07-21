import { SessionsIndex } from "./SessionsIndex";
import { Modal } from "./Modal";
import { useState } from "react";
import { SessionsNew } from "./SessionsNew";
import axios from "axios";
import { SeasonEdit } from "./SeasonEdit";

export function SeasonsIndex(props) {
  const [isSessionsNewVisible, setIsSessionsNewVisible] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [isSeasonEditVisible, setIsSeasonEditVisible] = useState(false);

  const handleShowSessionsNew = () => {
    console.log("handleShowSessionsNew");
    setIsSessionsNewVisible(true);
  };

  const handleCreateSession = (params, successCallback) => {
    console.log("handleCreateSession", params);
    axios.post("http://localhost:3000/league_sessions.json", params).then((response) => {
      setSessions([...sessions, response.data]);
      successCallback();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSessionsNewVisible(false);
    setIsSeasonEditVisible(false);
  };

  const handleEditSeason = () => {
    console.log("handleEditSeason");
    setIsSeasonEditVisible(!isSeasonEditVisible);
  };

  return (
    <div className="card-body">
      <h2 className="card-title">Seasons</h2>
      {props.seasons.map((season) => (
        <div key={season.id}>
          <h3 className="mt-3">{season.name}</h3>
          <p>
            Starts: {season.start_date} | Ends: {season.end_date} | {season.number_sessions} sessions
          </p>
          <button className="btn btn-primary" onClick={handleShowSessionsNew}>
            Add session
          </button>
          <button className="btn btn-warning" onClick={handleEditSeason}>
            Edit season
          </button>
          <Modal show={isSeasonEditVisible} onClose={handleClose}>
            <SeasonEdit />
          </Modal>
          <Modal show={isSessionsNewVisible} onClose={handleClose}>
            <SessionsNew onCreateSession={handleCreateSession} />
          </Modal>
          <SessionsIndex sessions={season.league_sessions} />
        </div>
      ))}
    </div>
  );
}