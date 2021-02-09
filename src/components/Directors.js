import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => {
        return (
          <div>
            <h4>{director.name}</h4>
            <ul>
              <strong>Movies:</strong>
              {director.movies.map((movie) => {
                return <li>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Directors;
