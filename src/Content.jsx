import axios from "axios";
import { useState, useEffect } from "react";
import { SessionsIndex } from "./SessionsIndex";
import { SessionsShow } from "./SessionsShow";
import { Modal } from "./Modal";
import { SeasonsIndex } from "./SeasonsIndex";
import { SeasonsNew } from "./SeasonsNew";

export function Content() {
  const [sessions, setSessions] = useState([]);
  const [isSessionsShowVisible, setIsSessionsShowVisible] = useState(false);
  const [currentSession, setCurrentSession] = useState({});
  const [isSeasonsNewVisible, setIsSeasonsNewVisible] = useState(false);

  const [seasons, setSeasons] = useState([]);

  const handleIndexSeasons = () => {
    console.log("handleIndexSeasons");
    axios.get("http://localhost:3000/seasons.json").then((response) => {
      console.log(response.data);
      setSeasons(response.data);
    });
  };

  useEffect(handleIndexSeasons, []);

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

  const handleIndexSessions = () => {
    console.log("handleIndexSessions");
    axios.get("http://localhost:3000/league_sessions.json").then((response) => {
      console.log(response.data);
      setSessions(response.data);
    });
  };

  const handleShowSession = (session) => {
    console.log("handleShowSession", session);
    setIsSessionsShowVisible(true);
    setCurrentSession(session);
  };

  const handleUpdateSession = (id, params, successCallback) => {
    console.log("handleUpdateSession", params);
    axios.patch(`http://localhost:3000/league_sessions/${id}.json`, params).then((response) => {
      setSessions(
        sessions.map((session) => {
          if (session.id === response.data.id) {
            return response.data;
          } else {
            return session;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroySession = (session) => {
    console.log("handleDestroySession", session);
    axios.delete(`http://localhost:3000/league_sessions/${session.id}.json`).then((response) => {
      setSessions(sessions.filter((s) => s.id !== session.id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSessionsShowVisible(false);
    setIsSeasonsNewVisible(false);
  };

  useEffect(handleIndexSessions, []);

  return (
    <div className="card mt-3">
      <h1 className="card-header">League Name</h1>
      <div className="card-body">
        <h2 className="card-title">League Information</h2>
        <p className="card-text">Day, Time, Center, Other Info</p>
        <button onClick={handleShowSeasonsNew} className="btn btn-primary">
          SeasonsNew
        </button>
      </div>
      {/* Create season modal */}
      <Modal show={isSeasonsNewVisible} onClose={handleClose}>
        <SeasonsNew onCreateSeason={handleCreateSeason} />
      </Modal>
      {/* Displays all seasons */}
      <SeasonsIndex seasons={seasons} />
      {/* <SessionsIndex sessions={sessions} onShowSession={handleShowSession} /> */}

      {/* This needs to move to SeasonsIndex */}
      <Modal show={isSessionsShowVisible} onClose={handleClose}>
        <SessionsShow
          session={currentSession}
          onUpdateSession={handleUpdateSession}
          onDestroySession={handleDestroySession}
        />
      </Modal>
    </div>
  );
}
