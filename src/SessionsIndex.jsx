import { Modal } from "./Modal";
import { SessionsShow } from "./SessionsShow";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function SessionsIndex(props) {
  console.log(props);
  const [isSessionsShowVisible, setIsSessionsShowVisible] = useState(false);

  const handleShowSession = (session) => {
    console.log("handleShowSession", session);
    setIsSessionsShowVisible(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSessionsShowVisible(false);
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
            <th></th>
          </tr>
        </thead>
        {props.sessions.map((session) => (
          <tbody key={session.id}>
            <tr>
              <th scope="row">{session.date}</th>
              <td>{session.gameone}</td>
              <td>{session.gametwo}</td>
              <td>{session.gamethree}</td>
              <td>{session.series}</td>
              <td>
                <button onClick={handleShowSession} className="btn btn-warning">
                  SessionsShow
                </button>
                <Modal show={isSessionsShowVisible} onClose={handleClose}>
                  <SessionsShow session={session} />
                </Modal>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
