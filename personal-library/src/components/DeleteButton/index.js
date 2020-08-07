import React from "react";
import "./style.css";

function DeleteButton(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      X
    </span>
  );
}

export default DeleteButton;
