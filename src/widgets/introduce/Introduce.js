import React, { useRef, useState, useEffect } from "react";
import "./Introduce.scss";

// assets
import { ReactComponent as BodySvg } from "../../assets/images/body.svg";
import { ReactComponent as LeftEye } from "../../assets/images/leftEye.svg";
import { ReactComponent as RightEye } from "../../assets/images/rightEye.svg";
import { ReactComponent as LeftEye2 } from "../../assets/images/leftEye2.svg";
import { ReactComponent as RightEye2 } from "../../assets/images/rightEye2.svg";

function Introduce() {
  const [isBlinking, setIsBlinking] = useState(true);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setEyePosition({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    setIsBlinking(false);
    setTimeout(() => {
      setIsBlinking(true);
    }, 300); // 0.3초 후에 다시 눈 깜빡임 상태로 변경
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
    console.log(`left: ${eyePosition.x}px, top: ${eyePosition.y}px`);

    // 마우스 이벤트에 따라 스타일 위치 변경
    originLeftRef.current = leftEyeStyle;
    originRightRef.current = rightEyeStyle;
  });

  const leftEyeStyleRef = originLeftRef.current;
  const rightEyeStyleRef = originRightRef.current;

  return (
    <article
      className="introduceWrapper"
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <div className="character" onClick={handleClick}>
        <div className="tooltip">
          <BodySvg className="bodySvg" width={200} height={200} />
          <span
            className="tooltiptext"
            style={{ left: `${eyePosition.x}px`, top: `${eyePosition.y}px` }}
          >
            Blink~😉✨
          </span>
        </div>
        {isBlinking ? (
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
            <a
              href={"https://github.com/BeautyKim"}
              target="_blank"
              rel="noreferrer"
            >
              깃허브
            </a>
          </button>
          <button>
            <a
              href={
                "https://ahreumi.notion.site/HOME-18e78ba9144742b1a361cb5f7cbfbef3"
              }
              target="_blank"
              rel="noreferrer"
            >
              노션
            </a>
          </button>
          <button>
            {" "}
            <a href="mailto:shadowbubobubo@gmail.com?subject=안녕하세요.">
              메일
            </a>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Introduce;
