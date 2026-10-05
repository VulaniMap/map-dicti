import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

import "./Results.css";

export default function Results(props) {
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          <Phonetic phonetic={props.results.phonetic} />
        </section>

        {props.results.meanings.slice(0, 1).map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
