import axios from "axios";
import { useState, useEffect } from "react";
import { SessionsIndex } from "./SessionsIndex";
import { SessionsNew } from "./SessionsNew";
import { SessionsShow } from "./SessionsShow";
import { Modal } from "./Modal";

export function Content() {
  const [sessions, setSessions] = useState([]);
  const [isSessionsShowVisible, setIsSessionsShowVisible] = useState(false);
  const [currentSession, setCurrentSession] = useState({});

  const handleIndexSessions = () => {
    console.log("handleIndexSessions");
    axios.get("http://localhost:3000/league_sessions.json").then((response) => {
      console.log(response.data);
      setSessions(response.data);
    });
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

  const handleClose = () => {
    console.log("handleClose");
    setIsSessionsShowVisible(false);
  };

  useEffect(handleIndexSessions, []);

  return (
    <div>
      <SessionsNew onCreateSession={handleCreateSession} />
      <SessionsIndex sessions={sessions} onShowSession={handleShowSession} />
      <Modal show={isSessionsShowVisible} onClose={handleClose}>
        <SessionsShow session={currentSession} onUpdateSession={handleUpdateSession} />
      </Modal>
    </div>
  );
}
