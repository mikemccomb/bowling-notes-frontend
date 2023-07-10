import axios from "axios";
import { useState, useEffect } from "react";
import { SessionsIndex } from "./SessionsIndex";

export function Content() {
  // const sessions = [
  //   { id: 1, date: "2023-04-07", gameone: 198, gametwo: 175, gamethree: 180, notes: "Does this work?" },
  //   { id: 2, date: "2023-07-04", gameone: 198, gametwo: 175, gamethree: 180, notes: "Does this work?" },
  // ];
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
