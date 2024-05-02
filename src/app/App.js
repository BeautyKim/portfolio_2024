import React, { useRef } from "react";

import "./App.scss";
import {
  Header,
  Footer,
  Introduce,
  Career,
  FrontendSkill,
  BackendSkill,
  ToolSkill,
} from "../widgets/index";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div>
      <Header
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <section className="about" ref={aboutRef}>
        <Introduce />
        <Career />
      </section>
      <section className="skills" ref={skillsRef}>
        <FrontendSkill />
        <BackendSkill />
        <ToolSkill />
      </section>
      <section className="projects" ref={projectsRef}></section>
      <Footer />
    </div>
  );
}

export default App;
