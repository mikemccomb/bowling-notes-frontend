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
import { SeasonsEdit } from "./SeasonsEdit";

export function SeasonList(props) {
  const [isSessionsNewVisible, setIsSessionsNewVisible] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [isSeasonsEditVisible, setIsSeasonsEditVisible] = useState(false);
  const [seasons, setSeasons] = useState([]);
  const [currentSeason, setCurrentSeason] = useState({});

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

  const handleShowSeasonsEdit = (season) => {
    console.log("handleShowSeasonsEdit");
    setIsSeasonsEditVisible(true);
    setCurrentSeason(season);
  };

  const handleUpdateSeason = (id, params, successCallback) => {
    console.log("handleUpdateSeason", params);
    axios.patch(`http://localhost:3000/seasons/${id}.json`, params).then((response) => {
      setSeasons(
        seasons.map((season) => {
          if (season.id === response.data.id) {
            return response.data;
          } else {
            return season;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroySeason = (season) => {
    console.log("handleDestroySeason", season);
    axios.delete(`http://localhost:3000/seasons/${season.id}.json`).then((response) => {
      setSeasons(seasons.filter((s) => s.id !== season.id));
      handleClose();
    });
  };

  const handleClose = () => {
    setIsSessionsNewVisible(false);
    setIsSeasonsEditVisible(false);
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
                SessionsNew
              </button>
              <Modal show={isSessionsNewVisible} onClose={handleClose}>
                <SessionsNew onCreateSession={handleCreateSession} />
              </Modal>
              <button onClick={handleShowSeasonsEdit}>Edit Season</button>
              <Modal show={isSeasonsEditVisible} onClose={handleClose}>
                <SeasonsEdit
                  season={currentSeason}
                  onUpdateSeason={handleUpdateSeason}
                  onDestroySeason={handleDestroySeason}
                />
              </Modal>
              <button>Delete Season</button>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
