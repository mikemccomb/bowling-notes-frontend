import axios from "axios";
import { useState, useEffect } from "react";
import { SessionsIndex } from "./SessionsIndex";
import { SessionsNew } from "./SessionsNew";

export function SessionsContent() {
  const [sessions, setSessions] = useState([]);

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

  useEffect(handleIndexSessions, []);

  return (
    <div>
      <SessionsNew onCreateSession={handleCreateSession} />
      <SessionsIndex sessions={sessions} />
    </div>
  );
}
