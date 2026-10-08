import React from "react";
import Synonyms from "./Synonyms.js";

import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div className="Definition">{props.meaning.definition}</div>
      <div className="Example">{props.meaning.example}</div>

      <Synonyms meaning={props.meaning} />
    </div>
  );
}
