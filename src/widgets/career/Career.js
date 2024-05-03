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
            <li>111111</li>
            <li>111111</li>
            <li>111111</li>
          </ul>
        </div>
      </div>
      <div className="careerWrapper">
        <div className="date">2022.00. ~ 2023.00.</div>
        <div className="box">
          <h4>ooooo</h4>
          <ul>
            <li>111111</li>
            <li>111111</li>
            <li>111111</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Career;
