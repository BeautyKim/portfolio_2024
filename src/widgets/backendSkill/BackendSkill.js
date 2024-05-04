import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// shared
import SubTitle from "../../shared/SubTitle";
import SkillBox from "../../shared/SkillBox";
import { backend_skills } from "../../entities/skills";

function BackendSkill() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article
      className="backend"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="100"
      data-aos-duration="3000"
    >
      <SubTitle text="Back-end Tech Stack" />
      <SkillBox props={backend_skills} />
    </article>
  );
}

export default BackendSkill;
