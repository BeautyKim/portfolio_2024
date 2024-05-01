import React, { useRef } from "react";

import SubTitle from "../shared/SubTitle";
import { Header, Footer } from "../widgets/index";
import "./App.scss";
import { ReactComponent as BodySvg } from "../assets/images/body.svg";
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
        <article className="introduceWrapper">
          <div className="character">
            <BodySvg width={200} height={200} />
          </div>
          <div className="box">
            <div className="introduceText">
              <h1>안녕하세요.</h1>
              <h1>저는 새로운 기술과 UI/UX에 관심이 많은</h1>
              <h1>2년차 웹개발자 김아름입니다.</h1>
            </div>
            <div className="introduceButton">
              <button>깃허브</button>
              <button>노션</button>
              <button>메일</button>
            </div>
          </div>
        </article>
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
