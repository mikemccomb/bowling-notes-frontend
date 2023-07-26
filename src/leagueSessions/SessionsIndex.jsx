/* eslint-disable react/prop-types */
import { Modal } from "../Modal";
// import { SessionsShow } from "./SessionsShow";

import { useState } from "react";
import { SessionsEdit } from "./SessionsEdit";
import axios from "axios";

export function SessionsIndex(props) {
  const [sessions, setSessions] = useState([]);
  const [isSessionEditOn, setIsSessionEditOn] = useState(false);
  const [editSession, setEditSession] = useState({});

  const handleSessionEditor = (session) => {
    console.log("handleSessionEditor", session);
    setIsSessionEditOn(true);
    setEditSession(session);
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
    setIsSessionEditOn(false);
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
                  {/* <button onClick={() => props.onShowSession(session)}>Edit</button> */}
                  <button onClick={() => handleSessionEditor(session)}>Edit</button>
                </td>
              </tr>
            </tbody>
            {/* <Modal show={props.isSessionsShowVisible} onClose={props.handleClose}>
              <SessionsShow
                session={props.currentSession}
                // onUpdateSession={handleUpdateSession}
                // onDestroySession={handleDestroySession}
              />
            </Modal> */}
          </>
        ))}
      </table>
      <Modal show={isSessionEditOn} onClose={handleClose}>
        <SessionsEdit session={editSession} onUpdateSession={handleUpdateSession} />
      </Modal>
    </div>
  );
}
