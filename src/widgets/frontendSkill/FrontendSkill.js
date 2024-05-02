import React from "react";

// shared
import SubTitle from "../../shared/SubTitle";
import SkillBox from "../../shared/SkillBox";

function FrontendSkill() {
  return (
    <article className="frontend">
      <SubTitle text="frontend" />
      <div>
        <SkillBox />
      </div>
    </article>
  );
}

export default FrontendSkill;
