import axios from "axios";
import { useState, useEffect } from "react";
import { SessionsIndex } from "./SessionsIndex";
import { SessionsNew } from "./SessionsNew";
import { SessionsShow } from "./SessionsShow";
import { Modal } from "../Modal";

export function SessionsContent() {
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

  const handleShowSession = (session) => {
    console.log("handleShowSession", session);
    setIsSessionsShowVisible(true);
    setCurrentSession(session);
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
    setIsSessionsShowVisible(false);
  };

  useEffect(handleIndexSessions, []);

  return (
    <div>
      <SessionsNew onCreateSession={handleCreateSession} />
      <SessionsIndex sessions={sessions} onShowSession={handleShowSession} />
      <Modal show={isSessionsShowVisible} onClose={handleClose}>
        <SessionsShow session={currentSession} />
      </Modal>
    </div>
  );
}
