import React from "react";
import "./Hero.css";
import Image from '../../modules/Image';

const Hero = ({ headline, description, image }) => {
  return (
    <div className="mc-hero">
      <div className="mc-hero__headline">
        {headline}
      </div>
      <div className="mc-hero__description">
        {description}
      </div>
      <Image url={image.url} altText={image.altText}/>
    </div>
  )
};

export default Hero;