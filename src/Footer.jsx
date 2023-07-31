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
    <footer className="container-fluid mt-2">
      <p>Copyright 2023</p>
      <button onClick={handleShowAbout}>About</button>
      <Modal show={showAbout} onClose={handleClose}>
        <About />
      </Modal>
    </footer>
  );
}
