import React, { useState, useEffect } from "react";
import "./Header.scss";

function Header({ aboutRef, skillsRef, projectsRef }) {
  // 특정 영역 도착 이벤트
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const skillsPosition = skillsRef.current.offsetTop;
      const projectsPosition = projectsRef.current.offsetTop;
      const scrollPosition = window.scrollY;
      console.log("skillsPosition:    " + skillsPosition);
      console.log("projectsPosition:    " + projectsPosition);
      console.log("scrollPosition:    " + scrollPosition);
      if (scrollPosition < skillsPosition) {
        setActiveMenu("about");
      } else if (
        scrollPosition >= skillsPosition &&
        scrollPosition < projectsPosition - 50
      ) {
        setActiveMenu("skills");
      } else {
        setActiveMenu("projects");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef, skillsRef, projectsRef]);

  // 메뉴 이동
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li className={activeMenu === "about" ? "active" : ""}>
            <p onClick={() => scrollToSection(aboutRef)}>about</p>
          </li>
          <li>
            <p>/</p>
          </li>
          <li className={activeMenu === "skills" ? "active" : ""}>
            <p onClick={() => scrollToSection(skillsRef)}>skills</p>
          </li>
          <li>
            <p>/</p>
          </li>
          <li className={activeMenu === "projects" ? "active" : ""}>
            <p onClick={() => scrollToSection(projectsRef)}>projects</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
