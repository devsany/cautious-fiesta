import React from "react";

const Skills = ({ skill }) => {
  return (
    <div>
      <header>Skill list below</header>
      <ul>
        {skill.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
