
import React from "react";
import "./style.css";

const ClickItem = props => {
  return (
      <div 
        role="img"
        aria-label="click item"
        onClick={() => props.onClick(props.id)}
        style={{ backgroundImage: `url("${props.src}")` }}
        className={`click-item${props.shake ? " shake" : ""}`}
      />
    );
}
export default ClickItem;