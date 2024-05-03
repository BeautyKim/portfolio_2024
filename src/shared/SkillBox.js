import React from "react";

function SkillBox({ props }) {
  const skilsStyle = {
    margin: 3,
  };

  return (
    <div className="box">
      {props.map((skill, index) => (
        <img
          key={index}
          src={`https://img.shields.io/badge/${skill.title}-${skill.color}?style=flat&logo=${skill.slug}&logoColor=white`}
          height={23}
          alt={`${skill.title}_Logo`}
          style={skilsStyle}
        />
      ))}
    </div>
  );
}

export default SkillBox;
