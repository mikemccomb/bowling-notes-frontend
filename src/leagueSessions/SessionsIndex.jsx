/* eslint-disable react/prop-types */
import { Modal } from "../Modal";
import { useState } from "react";
import { SessionsEdit } from "./SessionsEdit";
import axios from "axios";
import { SessionsNew } from "./SessionsNew";

export function SessionsIndex(props) {
  const [sessions, setSessions] = useState([]);
  const [isSessionEditOn, setIsSessionEditOn] = useState(false);
  const [editSession, setEditSession] = useState({});
  const [isNewSessionOn, setIsNewSessionOn] = useState(false);

  const handleSessionEditor = (session) => {
    console.log("handleSessionEditor", session);
    setIsSessionEditOn(true);
    setEditSession(session);
  };

  const handleNewSession = () => {
    setIsNewSessionOn(true);
  };

  const handleCreateSession = (params, successCallback) => {
    console.log("handleCreateSession", params);
    axios.post("http://localhost:3000/league_sessions.json", params).then((response) => {
      setSessions([...sessions, response.data]);
      successCallback();
    });
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
      window.location.reload(false);
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
    setIsSessionEditOn(false);
    setIsNewSessionOn(false);
  };

  return (
    <div>
      <h3>League Sessions</h3>

      <table className="table card-text">
        <thead>
          <tr>
            <th>Date</th>
            <th>Game 1</th>
            <th>Game 2</th>
            <th>Game 3</th>
            <th>Series</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        {props.season.league_sessions.map((session) => (
          <>
            <tbody key={session.id}>
              <tr>
                <th scope="row">{session.date}</th>
                <td>{session.gameone}</td>
                <td>{session.gametwo}</td>
                <td>{session.gamethree}</td>
                <td>{session.series}</td>
                <td>{session.notes}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => handleSessionEditor(session)}>
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
      <Modal show={isSessionEditOn} onClose={handleClose}>
        <SessionsEdit
          session={editSession}
          onUpdateSession={handleUpdateSession}
          onDestroySession={handleDestroySession}
        />
      </Modal>
      <button className="btn btn-success" onClick={handleNewSession}>
        Add session
      </button>
      <Modal show={isNewSessionOn} onClose={handleClose}>
        <SessionsNew onCreateSession={handleCreateSession} season_id={props.season.id} />
      </Modal>
    </div>
  );
}
