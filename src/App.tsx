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

const App = () => {
  const [spinCount, setSpinCount] = useState(getInitialSpinCount());
  const [flare, setFlare] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinCount((prev) => prev + 1);
    }, ANTONY_SPIN_RATE);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFlare(true);
    const timeout = setTimeout(() => setFlare(false), 500);
    return () => clearTimeout(timeout);
  }, [spinCount]);

  return (
    <div className="container">
      <img src={antonySpin} alt="Antony" className="antony-img" />
      <h5 className={`flare-text ${flare ? "flare" : ""}`}>
        Respect his hard work! <br />
        Today spin count: {formatNumber(spinCount)}
      </h5>
    </div>
  );
};

export default App;
