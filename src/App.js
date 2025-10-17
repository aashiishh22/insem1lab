// src/App.js
import React from "react";
import "./style.css";

export default function App() {
  // Static example data (so UI always shows something)
  const sample = {
    name: "San Francisco",
    temp: 19,
    humidity: 72,
    condition: "Clouds",
    icon: "☁️",
  };

  return (
    <div className="appRoot">
      <div className="container">
        <h1 className="title">🌦️ Weather — Demo UI</h1>

        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <input
            className="input"
            placeholder="Type city name (UI only)"
            defaultValue=""
            aria-label="city"
          />
          <button className="button">Search</button>
        </form>

        <div className="card">
          <div className="cardHeader">
            <div className="city">{sample.icon} {sample.name}</div>
            <div className="condition">{sample.condition}</div>
          </div>

          <div className="mainStats">
            <div className="temp">{sample.temp}°C</div>
            <div className="details">
              <div><strong>Humidity</strong><div>{sample.humidity}%</div></div>
              <div><strong>Wind</strong><div>6 km/h</div></div>
              <div><strong>Feels like</strong><div>{sample.temp - 1}°C</div></div>
            </div>
          </div>

          <div className="footerNote">
            This is a static UI mock — no live data.
          </div>
        </div>

        <div className="examples">
          <div className="sampleBtn" onClick={() => alert("UI only. No action.")}>Show Clear</div>
          <div className="sampleBtn" onClick={() => alert("UI only. No action.")}>Show Rain</div>
        </div>
      </div>
    </div>
  );
}
