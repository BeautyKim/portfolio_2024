import React from "react";

// shared
import SubTitle from "../../shared/SubTitle";
import SkillBox from "../../shared/SkillBox";
import { tools } from "../../entities/skills";

function ToolSkill() {
  return (
    <article className="tools">
      <SubTitle text="Tools" />
      <SkillBox props={tools} />
    </article>
  );
}

export default ToolSkill;
