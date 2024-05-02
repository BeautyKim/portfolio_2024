import React, { useRef } from "react";

import "./App.scss";
import SubTitle from "../shared/SubTitle";
import { Header, Footer, Introduce } from "../widgets/index";

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
        <article className="career"></article>
      </section>
      <section className="skills" ref={skillsRef}>
        <article className="frontend">
          <SubTitle text="frontend" />
        </article>
        <article className="backend">
          <SubTitle text="backend" />
        </article>
        <article className="tools">
          <SubTitle text="tools" />
        </article>
      </section>
      <section className="projects" ref={projectsRef}></section>
      <Footer />
    </div>
  );
}

export default App;
