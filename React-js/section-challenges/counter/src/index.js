import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState("");

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount("");
  }

  return (
    <div className="container">
      <div className="steps">
        <input
          type="range"
          id="step"
          name="step"
          min="1"
          max="10"
          step="1"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <label htmlFor="step">{step}</label>
      </div>
      <div className="count">
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>{count === 0 ? "Today is " : ""}</span>
        <span>{date.toDateString()}</span>
      </p>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
