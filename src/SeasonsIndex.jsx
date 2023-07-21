/* eslint-disable react/prop-types */
import { SessionsIndex } from "./SessionsIndex";
import { Modal } from "./Modal";
import { useState } from "react";
import { SessionsNew } from "./SessionsNew";
import axios from "axios";
import { SeasonsShow } from "./SeasonsShow";

export function SeasonsIndex(props) {
  const [isSessionsNewVisible, setIsSessionsNewVisible] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [isSeasonEditVisible, setIsSeasonEditVisible] = useState(false);
  const [isSessionsShowVisible, setIsSessionsShowVisible] = useState(false);
  const [currentSession, setCurrentSession] = useState({});

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

  const handleShowSession = (session) => {
    console.log("handleShowSession", session);
    setIsSessionsShowVisible(!isSessionsShowVisible);
    setCurrentSession(session);
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
            SessionsNew
          </button>
          <button className="btn btn-warning">SeasonsShow</button>
          {/* This is the Edit Season button modal */}
          <Modal show={isSeasonEditVisible} onClose={handleClose}>
            <SeasonsShow />
          </Modal>
          {/* This is the Add session button modal */}
          <Modal show={isSessionsNewVisible} onClose={handleClose}>
            <SessionsNew onCreateSession={handleCreateSession} />
          </Modal>

          {/* This is the modal from Content  */}
          <SessionsIndex sessions={season.league_sessions} onShowSession={handleShowSession} />
        </div>
      ))}
    </div>
  );
}
