import React from "react";

export default function Synonyms(props) {
  if (props.meaning.synonyms) {
    return (
      <div className="Synonyms">
        <h3>Synonyms</h3>

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
