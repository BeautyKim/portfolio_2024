import React, { useRef, useState, useEffect } from "react";
import "./Introduce.scss";

// assets
import { ReactComponent as BodySvg } from "../../assets/images/body.svg";
import { ReactComponent as LeftEye } from "../../assets/images/leftEye.svg";
import { ReactComponent as RightEye } from "../../assets/images/rightEye.svg";
import { ReactComponent as LeftEye2 } from "../../assets/images/leftEye2.svg";
import { ReactComponent as RightEye2 } from "../../assets/images/rightEye2.svg";

function Introduce() {
  const [eyes, setEyes] = useState(true);
  const onClick = () => {
    setEyes(false);
  };

  // 눈알 초기값
  const leftEyeStyle = {
    position: "absolute",
    top: 46,
    left: 69,
  };
  const rightEyeStyle = {
    position: "absolute",
    top: 46,
    left: 92,
  };

  const originLeftRef = useRef(leftEyeStyle);
  const originRightRef = useRef(rightEyeStyle);

  useEffect(() => {
    // 마우스 이벤트에 따라 스타일 위치 변경
    originLeftRef.current = leftEyeStyle;
    originRightRef.current = rightEyeStyle;

    // 눈 깜빡임
    setTimeout(() => {
      setEyes(true);
    }, 200);
  });

  const leftEyeStyleRef = originLeftRef.current;
  const rightEyeStyleRef = originRightRef.current;

  return (
    <article className="introduceWrapper">
      <div className="character" onClick={onClick}>
        <BodySvg width={200} height={200} />
        {eyes ? (
          <>
            <LeftEye style={leftEyeStyleRef} width={7} height={7} />
            <RightEye style={rightEyeStyleRef} width={7} height={7} />
          </>
        ) : (
          <>
            <LeftEye2 style={leftEyeStyleRef} width={7} height={7} />
            <RightEye2 style={rightEyeStyleRef} width={7} height={7} />
          </>
        )}
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
