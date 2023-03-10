import React from "react";
import "./Button.css";

const Button = ({ text, url, ariaLabel }) => {
  if (url) {
    return (
      <a href={url} className="mc-button mc-button--link" aria-label={ariaLabel}>
        {text}
      </a>
    )
  }

  return (
    <button className="mc-button">
      {text}
    </button>
  )
};

export default Button;