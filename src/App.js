import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import RouteGenerator from "./Components/Hooks/RouteGenerator";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PollData } from "./Components/Home/PollData/PollData";
import { ChoosePoll } from "./Components/Home/Pool Chooser/ChoosePoll";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {RouteGenerator()}
          <Route exact path="/" element={<ChoosePoll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
