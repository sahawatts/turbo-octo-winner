import { useState, useEffect } from "react";
import antonySpin from "/antony-spin-4s.gif";
import "./App.css";

const ANTONY_SPIN_RATE = 1333;

const getInitialSpinCount = () => {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  return Math.floor(((now.getTime() - midnight.getTime()) / 4000) * 3);
};

const formatNumber = (num: number) => {
  return num.toLocaleString("en-US", { minimumIntegerDigits: 2 });
};

const ballPath = [
  { x: 175, y: 370 },
  { x: 230, y: 370 },
  { x: 280, y: 350 },
  { x: 300, y: 340 },
  { x: 320, y: 340 },
  { x: 340, y: 350 },
  { x: 350, y: 370 },
  { x: 320, y: 380 },
  { x: 280, y: 380 },
  { x: 230, y: 380 },
  { x: 180, y: 370 },
  { x: 175, y: 370 },
];

const App = () => {
  const [spinCount, setSpinCount] = useState(getInitialSpinCount());
  const [flare, setFlare] = useState(false);
  const [ballPosition, setBallPosition] = useState(ballPath[0]);
  const [ballPositionIndex, setBallPositionIndex] = useState(0);

  useEffect(() => {
    const spinInterval = setInterval(() => {
      setSpinCount((prev) => prev + 1);
    }, ANTONY_SPIN_RATE);

    const ballInterval = setInterval(() => {
      setBallPositionIndex((prev) => (prev + 1) % ballPath.length);
    }, ANTONY_SPIN_RATE / ballPath.length);

    return () => {
      clearInterval(spinInterval);
      clearInterval(ballInterval);
    };
  }, []);

  useEffect(() => {
    setBallPosition(ballPath[ballPositionIndex]);
  }, [ballPositionIndex]);

  useEffect(() => {
    setFlare(true);
    const timeout = setTimeout(() => setFlare(false), 500);
    return () => clearTimeout(timeout);
  }, [spinCount]);

  return (
    <div className="container">
      <img src={antonySpin} alt="Antony" className="antony-img" />
      <div
        className="ball-box"
        style={{
          top: `${ballPosition.y}px`,
          left: `${ballPosition.x}px`,
        }}
      ></div>
      <h5 className={`flare-text ${flare ? "flare" : ""}`}>
        Respect his hard work! <br />
        Today spin count: {formatNumber(spinCount)}
      </h5>
    </div>
  );
};

export default App;
