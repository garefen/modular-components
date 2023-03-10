import React from "react";
import "./Image.css";

const Hero = ({ url, altText }) => {
  return (
    <img className="mc-hero" src={url} alt={altText} />
  )
};

export default Hero;