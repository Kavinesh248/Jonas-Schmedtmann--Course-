import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img src="jonas.png" alt="jonas picture" />
      <AuthorDetails />
    </div>
  );
}

function AuthorDetails() {
  return (
    <div className="author-container">
      <h1>Jonas Schemdtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course , I like to play board games, to cook (to eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
      <SkillStack />
    </div>
  );
}

function SkillStack() {
  return (
    <div className="stack-container">
      <Skill skill="HTML + CSS" emoji="💪" bgColor="red" />
      <Skill skill="Javascript" emoji="💪" bgColor="yellow" />
      <Skill skill="Web Design" emoji="💪" bgColor="cyan" />
      <Skill skill="Git and Github" emoji="💪" bgColor="orangered" />
      <Skill skill="React" emoji="💪" bgColor="lightblue" />
      <Skill skill="Svelte" emoji="👶" bgColor="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <span style={{ backgroundColor: props.bgColor }} className="skill">
      {props.skill} {props.emoji}
    </span>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
