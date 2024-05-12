import React from "react";
import "./Career.scss";

function Career() {
  return (
    <article className="career">
      <h1>경력</h1>
      <div className="careerWrapper">
        <div className="date">2023.11. ~ </div>
        <div className="box">
          <h4>지피넷(프리랜서)</h4>
          <ul>
            <li className="subtitle">주요 업무</li>
            <li className="text">
              금융감독원의 MiPlatform, JSP 등 기존 플랫폼을 Nexacro 플랫폼으로
              전환
            </li>
            <li className="subtitle">개발 환경</li>
            <li className="text">
              Nexacro, JSP, Java, eGovFrame, Spring MVC, Oracle DB,iBATIS,
              Mybatis
            </li>
          </ul>
        </div>
      </div>
      <div className="careerWrapper">
        <div className="date">2022.08. ~ 2023.08.</div>
        <div className="box">
          <h4>씨티아이랩(플랫폼개발팀 연구원)</h4>
          <ul>
            <li className="subtitle">주요 업무</li>
            <li className="text">
              프론트엔드(데이터 시각화, 유지보수 등), 기능 리스트 및 제품 매뉴얼
              작성, 팀 노션 관리
            </li>
            <li className="subtitle">개발 환경</li>
            <li>TypeScript, Angular, MySQL, LoopBack</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Career;
