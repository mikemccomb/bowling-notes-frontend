import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

export function SeasonsIndex(props) {
  return (
    <div>
      <h1>All Seasons</h1>
      {props.seasons.map((season) => (
        <Accordion key={season.id} defaultActiveKey={0}>
          <AccordionItem>
            <AccordionHeader>
              {season.name} ({season.start_date} thru {season.end_date})
            </AccordionHeader>
            <AccordionBody>
              <p>CONTENT</p>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
        // <div key={season.id}>
        //   <h2>{season.name}</h2>
        //   <p>
        //     {season.start_date} thru {season.end_date}
        //   </p>
        //   <p>{season.number_sessions} sessions</p>
        //   <button onClick={() => props.onShowSeason(season)}>Show Season</button>
        // </div>
      ))}
    </div>
  );
}
