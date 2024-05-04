import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// shared
import SubTitle from "../../shared/SubTitle";
import SkillBox from "../../shared/SkillBox";
import { tools } from "../../entities/skills";

function ToolSkill() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article
      className="tools"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100"
      data-aos-duration="3000"
    >
      <SubTitle text="Tools" />
      <SkillBox props={tools} />
    </article>
  );
}

export default ToolSkill;
