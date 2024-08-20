import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFDB1D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "Beginners",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "Beginners",
    color: "#60DAFB",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="images/front-end.jpg"
      alt="front-end-image"
      className="avatar"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Okonkwo Vivian</h1>
      <p>
        Front End developer and student at Covenant University. When coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Lekki sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginners" && "😌"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "😁"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
