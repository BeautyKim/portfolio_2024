import React from "react";

function SubTitle(props) {
  const titleStyle = {
    color: "black",
  };

  return (
    <div>
      <h4 style={titleStyle}>{props.text}</h4>
    </div>
  );
}

export default SubTitle;
