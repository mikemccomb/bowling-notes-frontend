/* eslint-disable react/prop-types */
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { SessionsIndex } from "../leagueSessions/SessionsIndex";
// import { useState } from "react";

export function SeasonsIndex(props) {
  // const [isSessionsShowVisible, setIsSessionsShowVisible] = useState(false);
  // const [currentSession, setCurrentSession] = useState({});

  // const handleShowSession = (session) => {
  //   console.log("handleShowSession", session);
  //   setIsSessionsShowVisible(true);
  //   setCurrentSession(session);
  // };

  return (
    <div className="card body">
      <h1 className="card-header">All Seasons</h1>
      {props.seasons.map((season) => (
        <Accordion key={season.id} defaultActiveKey={0}>
          <AccordionItem>
            <AccordionHeader>
              {season.name} ({season.start_date} thru {season.end_date})
            </AccordionHeader>
            <AccordionBody>
              <SessionsIndex season={season} />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
