import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.meaning.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Similar:</strong>
        <ul>
          {props.meaning.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
