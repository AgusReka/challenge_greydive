import React from "react";
import data from "../../Hooks/JsonFile/db.json";
import { Link } from "react-router-dom";
import "./ChoosePoll.scss"
export const ChoosePoll = () => {
  return (
    <div className="ChoosePool">
      <header className="choose-header">
        <h1>Choose Poll Information</h1>
      </header>
      <div className="choose-links">
        {data.map((data, id) => {
          return (
            <Link key={id} to={"/Poll/" + id}>
              Poll {id+1}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
