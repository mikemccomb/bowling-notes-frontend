/* eslint-disable react/prop-types */
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { SessionsIndex } from "./SessionsIndex";
import { useState } from "react";
import { Modal } from "./Modal";
import { SessionsNew } from "./SessionsNew";

export function SeasonList(props) {
  const [isSessionsNewVisible, setIsSessionsNewVisible] = useState(false);

  const handleShowSessionsNew = () => {
    console.log("handleShowSessionsNew");
    setIsSessionsNewVisible(true);
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
              <button onClick={handleShowSessionsNew}>SessionsNew</button>
              <button>Edit Season</button>
              <button>Delete Season</button>
              <Modal show={isSessionsNewVisible} onClose={handleClose}>
                <SessionsNew />
              </Modal>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
