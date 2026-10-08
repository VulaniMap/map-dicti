import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState({});
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "aofcd5541add57c0396398488b47at43";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}&_gl=1*1w60qyg*_up*MQ..*_ga*MTYyMTMzNDE0OS4xNzkwODYyOTg1*_ga_HB45F6ZNE6*czE3OTA4NjI5ODQkbzEkZzEkdDE3OTA4NjMwMjIkajIyJGwwJGgw`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label> What word would you like to search?</label>
            <input
              type="search"
              placeholder="Search for a word"
              className="form-control search-input"
              value={keyword}
              onChange={handleKeywordChange}
            />
          </form>
          <small className="hint">i.e. travel, food</small>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
