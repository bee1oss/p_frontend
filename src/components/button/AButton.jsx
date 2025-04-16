import React from 'react';
import '../../styles/Button.css';

function AButton(props) {
  return (
    <button
      type={props.type || "button"}
      className={props.className}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

export default AButton;
