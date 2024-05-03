import React from "react";

function SubTitle(props) {
  const titleStyle = {
    color: "black",
  };

  return (
    <div>
      <h1 style={titleStyle}>{props.text}</h1>
    </div>
  );
}

export default SubTitle;
