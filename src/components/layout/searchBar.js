import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "./searchBar.css";

import Names from "./MOCK_DATA.json";
import classes from "./MainNavigation.module.css";

export default function BarraPesquisa({ placeholder, data }) {
  const [search, setSearch] = useState("");
  return (
    <div className="pesquisa">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Pesquisa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {search.length > 0 && (
        <div className="dataResult">
          {Names.filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return (
              <div className="results" key={key}>
                <a className="dataItem" href={val.link} target="_blank">
                  <p> {val.first_name} </p>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
