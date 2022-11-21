import React from "react";
import data from "./JsonFile/db.json";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PollData } from "../Home/PollData/PollData";
const RouteGenerator = () => {
  
  return (
    <>
      {data.map((poll, id) => {
        let url = "/Poll/"+id;
        
        return <Route key={id} exact path={url} element={<PollData data={poll}/>} />;
      })}
      
    </>
  );
};
export default RouteGenerator;
