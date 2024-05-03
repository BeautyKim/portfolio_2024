import React, { useState, useEffect } from "react";
import "./Header.scss";

function Header({ aboutRef, skillsRef, projectsRef }) {
  // 특정 영역 도착 이벤트
  const [activeMenu, setActiveMenu] = useState(null);
  const [headerBackground, setHeaderBackground] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutPosition = aboutRef.current.offsetTop;
      const skillsPosition = skillsRef.current.offsetTop;
      const projectsPosition = projectsRef.current.offsetTop;
      const scrollPosition = window.scrollY;

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

      if (scrollPosition >= aboutPosition) {
        setHeaderBackground("headerBackground");
      } else {
        setHeaderBackground("");
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
    <header
      className={
        headerBackground === "headerBackground" ? "headerBackground" : ""
      }
    >
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
