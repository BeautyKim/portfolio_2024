import React from "react";

// shared
import SubTitle from "../../shared/SubTitle";

function Projects() {
  return (
    <article>
      <SubTitle text="Projects" />
      <div className="box">
        <div>이미지</div>
        <div>
          <h4>프로젝트명</h4>
          <p>설명</p>
        </div>
      </div>
    </article>
  );
}

export default Projects;
