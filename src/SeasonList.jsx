/* eslint-disable react/prop-types */
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { SessionsIndex } from "./SessionsIndex";

export function SeasonList(props) {
  return (
    <>
      {props.seasons.map((season) => (
        <Accordion key={season.id}>
          <AccordionItem>
            <AccordionHeader>{season.name}</AccordionHeader>
            <AccordionBody>
              Starts: {season.start_date} | Ends: {season.end_date} | {season.number_sessions} sessions
              <SessionsIndex sessions={season.league_sessions} />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
