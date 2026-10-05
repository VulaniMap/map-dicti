import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <p>{props.meaning.definition}</p>
      {props.meaning.example && <em>{props.meaning.example}</em>}
      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <div className="Synonyms">
          <strong>Similar:</strong>

          <ul>
            {props.meaning.synonyms.map(function (synonym, index) {
              return <li key={index}>{synonym}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
