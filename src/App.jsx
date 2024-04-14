import { useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";

function getDistance(date, period) {
  if (period === "week") {
    const str = formatDistanceToNowStrict(date, {
      unit: "day",
      roundingMethod: "floor",
    });

    const split = str.split(" ");
    const day = parseInt(split[0]);
    const week = Math.floor(day / 7);
    return `${week} week${week > 1 ? "s" : ""}`;
  }

  return formatDistanceToNowStrict(date, {
    unit: period,
    roundingMethod: "floor",
  });
}

function App() {
  const [period, setPeriod] = useState("years");
  const [date, setDate] = useState(new Date());

  function handlePeriodChange(e) {
    setPeriod(e.currentTarget.value);
  }
  function handleDateChange(e) {
    setDate(e.currentTarget.value);
  }

  const distance = getDistance(date, period);

  return (
    <div className="fullscreen">
      <header>
        <h1>How old am I?</h1>
      </header>

      <div className="maincontainer">
        <div className="child">
          <h3 className="age" id="birthday">
            My Birthday:
          </h3>

          <input
            type="date"
            className="selectors"
            id="calender"
            onChange={handleDateChange}
            value={date}
          ></input>
        </div>

        <div className="child">
          <h3 className="age" id="age">
            My Age in:
          </h3>

          <select
            className="selectors"
            id="dropdown"
            onChange={handlePeriodChange}
            value={period}
          >
            <option value="year">Years</option>
            <option value="month">Months</option>
            <option value="week">Weeks</option>
            <option value="day">Days</option>
            <option value="hour">Hours</option>
            <option value="minute">Minutes</option>
            <option value="second">Seconds</option>
          </select>
        </div>

        <div className="child" id="last">
          <h3 className="results" id="im">
            I am
          </h3>
          <h2 className="results" id="result">
            {distance}
          </h2>
          <h3 className="results" id="old">
            old
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
