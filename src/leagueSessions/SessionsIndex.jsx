/* eslint-disable react/prop-types */
import { Modal } from "../Modal";
// import { SessionsShow } from "./SessionsShow";

import { useState } from "react";
import { SessionsEdit } from "./SessionsEdit";

export function SessionsIndex(props) {
  const [isSessionEditOn, setIsSessionEditOn] = useState(false);
  const [editSession, setEditSession] = useState({});

  const handleSessionEdit = (session) => {
    console.log("handleSessionEdit", session);
    setIsSessionEditOn(true);
    setEditSession(session);
  };

  const handleClose = () => {
    setIsSessionEditOn(false);
  };

  return (
    <div className="card-body">
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
                  <button onClick={() => handleSessionEdit(session)}>Edit</button>
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
        <SessionsEdit session={editSession} />
      </Modal>
    </div>
  );
}
