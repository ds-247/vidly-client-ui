import React from "react";
import { Link } from "react-router-dom";
import "../componentStyle/title.css";

function Title({ text }) {
  return (
    <Link className="title-anchor" to="movies">
      <h1 className="title-text">{text}</h1>
    </Link>
  );
}

export default Title;
