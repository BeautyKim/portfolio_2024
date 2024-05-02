import React from "react";
import "./Introduce.scss";

// assets
import { ReactComponent as BodySvg } from "../../assets/images/body.svg";

function Introduce() {
  return (
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
          <button>Github</button>
          <button>노션</button>
          <button>메일</button>
        </div>
      </div>
    </article>
  );
}

export default Introduce;
