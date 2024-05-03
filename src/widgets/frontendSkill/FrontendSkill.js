import React from "react";

// shared
import SubTitle from "../../shared/SubTitle";
import SkillBox from "../../shared/SkillBox";
import { frontend_skills } from "../../entities/skills";

function FrontendSkill() {
  return (
    <article className="frontend">
      <SubTitle text="Front-end" />
      <SkillBox props={frontend_skills} />
    </article>
  );
}

export default FrontendSkill;
