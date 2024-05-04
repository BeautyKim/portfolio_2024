import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// shared
import SubTitle from "../../shared/SubTitle";
import SkillBox from "../../shared/SkillBox";
import { frontend_skills } from "../../entities/skills";

function FrontendSkill() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article
      className="frontend"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100"
      data-aos-duration="3000"
    >
      <SubTitle text="Front-end Tech Stack" />
      <SkillBox props={frontend_skills} />
    </article>
  );
}

export default FrontendSkill;
