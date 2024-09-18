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
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleClick(e) {
    e.preventDefault();
    setCount(count + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
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
      <form className="count" onSubmit={handleClick}>
        <button>-</button>
        <input
          type="text"
          placeholder="Count..."
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button>+</button>
      </form>
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
