import React from "react";

// shared
import SubTitle from "../../shared/SubTitle";
import SkillBox from "../../shared/SkillBox";
import { backend_skills } from "../../entities/skills";

function BackendSkill() {
  return (
    <article className="backend">
      <SubTitle text="Back-end" />
      <SkillBox props={backend_skills} />
    </article>
  );
}

export default BackendSkill;
