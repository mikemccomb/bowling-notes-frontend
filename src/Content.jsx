import axios from "axios";
import { useState, useEffect } from "react";
import { SessionsIndex } from "./SessionsIndex";
import { SessionsNew } from "./SessionsNew";
import { Modal } from "./Modal";

export function Content() {
  const [sessions, setSessions] = useState([]);

  const handleIndexSessions = () => {
    console.log("handleIndexSessions");
    axios.get("http://localhost:3000/league_sessions.json").then((response) => {
      console.log(response.data);
      setSessions(response.data);
    });
  };

  useEffect(handleIndexSessions, []);

  return (
    <div>
      <SessionsNew />
      <SessionsIndex sessions={sessions} />
      <Modal show={true}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
