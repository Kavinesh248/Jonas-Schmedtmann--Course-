import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

// const skills = [
//   {
//     skill: "Javascript",
//     level: "advanced",
//     color: "red",
//   },
//   {
//     skill: "HTML + CSS",
//     level: "advanced",
//     color: "blue",
//   },
//   {
//     skill: "Web Design",
//     level: "intermediate",
//     color: "green",
//   },
//   {
//     skill: "Git and Github",
//     level: "Beginner",
//     color: "orangered",
//   },
//   {
//     skill: "React",
//     level: "intermediate",
//     color: "lightblue",
//   },
//   {
//     skill: "Svelte",
//     level: "advanced",
//     color: "violet",
//   },
// ];

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [curDate, setDate] = useState(new Date());

  return (
    <div className="container">
      <div className="steps">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <p>
        {count} days {count < 1 ? "ago was" : "from today is "}
        {curDate.toLocaleString("default", { weekday: "short" })}{" "}
        {curDate.toLocaleString("default", { month: "short" })}
      </p>
    </div>
  );
}

// Challenge - 1
// function Card() {
//   return (
//     <div className="card">
//       <img src="jonas.png" alt="jonas" />
//       <AuthorDetails />
//     </div>
//   );
// }

// function AuthorDetails() {
//   return (
//     <div className="author-container">
//       <h1>Jonas Schemdtmann</h1>
//       <p>
//         Full-stack web developer and teacher at Udemy. When not coding or
//         preparing a course , I like to play board games, to cook (to eat), or to
//         just enjoy the Portuguese sun at the beach.
//       </p>
//       <SkillStack />
//     </div>
//   );
// }

// function SkillStack() {
//   return (
//     <div className="stack-container">
//       {skills.map((skill) => {
//         return (
//           <Skill
//             skill={skill.skill}
//             bgColor={skill.color}
//             level={skill.level}
//             key={skill.skill}
//           />
//         );
//       })}
//     </div>
//   );
// }

// function Skill({ skill, level, bgColor }) {
//   return (
//     <span style={{ backgroundColor: bgColor }} className="skill">
//       {skill}{" "}
//       <span>
//         {level === "intermediate" && "👍"}
//         {level === "advanced" && "💪"}
//         {level === "beginner" && "👶"}
//       </span>
//     </span>
//   );
// }

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
