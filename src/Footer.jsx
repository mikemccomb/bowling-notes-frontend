import { useState } from "react";
import { About } from "./About";
import {Modal} from "./Modal"

export function Footer() {

  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(true);
  }

  const handleClose = () => {
    setShowAbout(false);
  }


  return (
    <footer className="container-flex">
      <div className="d-inline-flex p-2">
        <p>Copyright 2023</p>
      </div>
      <div className="d-inline-flex">
        <button className="btn btn-info btn-sm" onClick={handleShowAbout}>About</button>
      </div>
      <Modal show={showAbout} onClose={handleClose}>
        <About />
      </Modal>
    </footer>
  );
}
