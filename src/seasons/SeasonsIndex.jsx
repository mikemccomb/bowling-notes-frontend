/* eslint-disable react/prop-types */
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { SessionsIndex } from "../leagueSessions/SessionsIndex";

export function SeasonsIndex(props) {
  return (
    <div className="container-flex">
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
    </div>
  );
}
