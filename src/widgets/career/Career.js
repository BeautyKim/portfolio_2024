import React from "react";
import "./Career.scss";

function Career() {
  return (
    <article className="career">
      <h1>경력</h1>
      <div className="careerWrapper">
        <div className="date">2023.00. ~</div>
        <div className="box">
          <h4>프리랜서</h4>
          <ul>
            <li>주요 업무</li>
            <li>MiPlatform, JSP 등 기존 플랫폼을 Nexacro 플랫폼으로 전환</li>
            <li>개발 환경</li>
            <li>
              Nexacro, JSP, Java, eGovFrame, Spring MVC, Oracle DB,iBATIS,
              Mybatis
            </li>
          </ul>
        </div>
      </div>
      <div className="careerWrapper">
        <div className="date">2022.00. ~ 2023.00.</div>
        <div className="box">
          <h4>씨티아이랩(플랫폼개발팀 연구원)</h4>
          <ul>
            <li className="subtitle">주요 업무</li>
            <li className="text">
              프론트엔드, 기능 리스트 및 제품 매뉴얼 작성, 팀 노션 관리
            </li>
            <li className="subtitle">
              <p>개발 환경</p>
            </li>
            <li>TypeScript, Angular, MySQL, LoopBack</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Career;
