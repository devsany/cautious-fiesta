import React, { useState } from "react";

const Skills = ({ skill }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <header>Skill list below</header>
      <ul>
        {skill.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <div>
        {show ? (
          <div>
            <button onClick={() => setShow(false)}>Login</button>
          </div>
        ) : (
          <div>
            <button>Start learning</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
