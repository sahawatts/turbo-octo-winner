import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const randomNumber = () => {
    return Math.floor(Math.random() * 100000) + 1;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      maximumFractionDigits: 0,
      useGrouping: true,
    });
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.instagram.com/antony00/?hl=en" target="_blank">
          <img
            src={
              "https://media.tenor.com/NHLvSvpnDi4AAAAM/antony-antony-santos.gif"
            }
            className="logo antony"
            alt="Antony logo"
          />
        </a>
      </div>
      <h1>Vite + React + Antony</h1>
      <div className="card">
        <button onClick={() => setCount(randomNumber())}>
          count is {formatNumber(count)}
        </button>
        {count > 0 && (
          <p>
            I know you clicked but just dont care, I want to give you this value
          </p>
        )}
        <p></p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, and Antony logos to learn more
      </p>
    </>
  );
}

export default App;
