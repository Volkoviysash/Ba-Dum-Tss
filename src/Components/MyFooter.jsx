import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MyFooter = () => {
  return (
    <footer className="myFooter">
      by{" "}
      <a href="https://github.com/Volkoviysash" target="_blank">
        <FontAwesomeIcon icon={faGithub} /> volkovich alexandr
      </a>
    </footer>
  );
};

export default MyFooter;
