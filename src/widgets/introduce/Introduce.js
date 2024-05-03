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
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const onClick = () => {
    setEyes(false);
  };
  const handleMouseMove = (e) => {
    setXY({ x: e.clientX, y: e.clientY });
  };

  const tooltipXY = { left: `${xy.x}px`, top: `${xy.y}px` };

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
    }, 300);
  });

  const leftEyeStyleRef = originLeftRef.current;
  const rightEyeStyleRef = originRightRef.current;

  return (
    <article className="introduceWrapper">
      <div className="character" onClick={onClick}>
        <div className="tooltip" onMouseMove={(e) => handleMouseMove(e)}>
          <BodySvg className="bodySvg" width={200} height={200} />
          <span className="tooltiptext" style={tooltipXY}>
            Blink~😉✨
          </span>
        </div>
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
          <button>
            <a href={"https://github.com/BeautyKim"}>깃허브</a>
          </button>
          <button>
            <a
              href={
                "https://www.notion.so/ahreumi/HOME-18e78ba9144742b1a361cb5f7cbfbef3?pvs=4"
              }
            >
              노션
            </a>
          </button>
          <button> 메일</button>
        </div>
      </div>
    </article>
  );
}

export default Introduce;
