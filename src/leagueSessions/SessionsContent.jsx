import axios from "axios";
import { SessionsIndex } from "./SessionsIndex";
import { useState, useEffect } from "react";

export function SessionsContent() {
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
      <SessionsIndex sessions={sessions} />
    </div>
  );
}
