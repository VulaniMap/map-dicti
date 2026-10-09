import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <h2>{props.phonetic.text}</h2>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
