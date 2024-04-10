import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div>
      <header>
        <h1>How old am I?</h1>
      </header>

      <div>
        <h3 className="age" id="birthday">
          My Birthday:
        </h3>
        <input type="date" className="selectors" id="calender"></input>
      </div>
      <div>
        <h3 className="age" id="age">
          My Age in:
        </h3>
        <select className="selectors" id="dropdown">
          <option value="years">Years</option>
          <option value="months">Months</option>
          <option value="weeks">Weeks</option>
          <option value="days">Days</option>
          <option value="hours">Hours</option>
          <option value="minutes">Minutes</option>
          <option value="seconds">Seconds</option>
        </select>
      </div>
      <div>
        <h3 className="results" id="im">
          I am
        </h3>
        <h2 className="results" id="result">
          ___________
        </h2>
        <h3 className="results" id="old">
          old
        </h3>
      </div>
    </div>
  );
}

export default App;
