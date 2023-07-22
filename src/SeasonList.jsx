/* eslint-disable react/prop-types */
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { SessionsIndex } from "./SessionsIndex";
import { useState } from "react";
import { Modal } from "./Modal";
import { SessionsNew } from "./SessionsNew";
import axios from "axios";

export function SeasonList(props) {
  const [isSessionsNewVisible, setIsSessionsNewVisible] = useState(false);
  const [sessions, setSessions] = useState([]);

  const handleShowSessionsNew = () => {
    console.log("handleShowSessionsNew");
    setIsSessionsNewVisible(true);
  };

  const handleCreateSession = (params, successCallback) => {
    console.log("handleCreateSession", params);
    axios.post("http://localhost:3000/league_sessions.json", params).then((response) => {
      setSessions([...sessions, response.data]);
      successCallback();
    });
  };

  const handleClose = () => {
    setIsSessionsNewVisible(false);
  };
  return (
    <>
      {props.seasons.map((season) => (
        <Accordion key={season.id} defaultActiveKey="0">
          <AccordionItem>
            <AccordionHeader>
              {season.name} ({season.start_date} thru {season.end_date})
            </AccordionHeader>
            <AccordionBody>
              <SessionsIndex sessions={season.league_sessions} />
              <button className="btn btn-primary" onClick={handleShowSessionsNew}>
                Add new session
              </button>
              <Modal show={isSessionsNewVisible} onClose={handleClose}>
                <SessionsNew onCreateSession={handleCreateSession} />
              </Modal>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
