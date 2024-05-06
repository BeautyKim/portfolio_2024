import React, { useState, useRef, useEffect } from "react";

// shared
import SubTitle from "../../shared/SubTitle";
import { ReactComponent as Close } from "../../assets/images/close.svg";

// entities
import { projects } from "../../entities/projects";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const modalBackground = useRef("");

  useEffect(() => {
    // 처음 렌더링 될 때 빈 값인 경우 호출 x
    if (projectIndex !== "") {
      const project = projects.find((project) => project.id === projectIndex);
      setSelectedProject(project);
    }
  }, [projectIndex]);

  const projectHandler = (value) => {
    setProjectIndex(value);
  };

  return (
    <article>
      <SubTitle text="Projects" />
      {projects.map((project, index) => (
        <div
          key={index}
          className="projectWrapper"
          onClick={() => {
            setModalOpen(true);
            projectHandler(project.id);
          }}
        >
          <div className="imgBox">
            <img src={project.cover} alt={`${project.title} 이미지`} />
          </div>
          <div className="textBox">
            <h4>{project.title}</h4>
            <hr />
            <p>{project.description}</p>
          </div>
        </div>
      ))}

      {modalOpen && selectedProject && (
        <div
          className="modalBox"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className="modal">
            <div className="modealHeader">
              <Close className="close" onClick={() => setModalOpen(false)} />
            </div>
            <div className="modalContent">
              <div className="imgBox">
                <img
                  src={selectedProject.image}
                  height={23}
                  alt={`${selectedProject.title} 이미지`}
                />
              </div>
              <hr />
              <div className="textBox">
                <div>
                  <span className="title">{selectedProject.title}</span>
                  <span className="date"> {selectedProject.date}</span>
                </div>
                <p className="description">{selectedProject.description}</p>
                <span className="subtitle">주요 기술: </span>
                <span>{selectedProject.tack}</span>
                <br />
                <span className="subtitle">개발 환경: </span>
                <span>{selectedProject.env}</span>
                <div className="link">
                  {selectedProject.gitUrl === "" ? (
                    ""
                  ) : (
                    <button>
                      <a
                        href={selectedProject.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        깃허브 보러가기
                      </a>
                    </button>
                  )}
                  {selectedProject.notionUrl === "" ? (
                    ""
                  ) : (
                    <button>
                      <a
                        href={selectedProject.notionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        개발로그 보러가기
                      </a>
                    </button>
                  )}
                  {selectedProject.url === "" ? (
                    ""
                  ) : (
                    <button>
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        프로젝트 보러가기
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default Projects;
