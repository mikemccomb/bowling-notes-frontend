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
        <Accordion key={season.id} defaultActiveKey="0">
          <AccordionItem>
            <AccordionHeader>
              {season.name} ({season.start_date} thru {season.end_date})
            </AccordionHeader>
            <AccordionBody>
              <SessionsIndex sessions={season.league_sessions} />
              <button>SessionsNew</button>
              <button>Edit Season</button>
              <button>Delete Season</button>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
