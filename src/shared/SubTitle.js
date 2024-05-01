import React from "react";

function SubTitle(props) {
  const titleStyle = {
    color: "yellow",
    backgroundColor: "black",
  };

  return <h1 style={titleStyle}>{props.text}</h1>;
}

export default SubTitle;
