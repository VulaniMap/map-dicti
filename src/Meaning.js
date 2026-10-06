import React from "react";
import Synonyms from "./Synonyms.js";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <p>
        <strong>Definition:</strong>
        {props.meaning.definition}
        <br />

        <strong>Example:</strong>
        <em> {props.meaning.example}</em>
      </p>
      <Synonyms meaning={props.meaning} />
    </div>
  );
}
