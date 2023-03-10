import React from "react";
import Button from "../../modules/Button/Button";
import "./Navbar.css";

const Navbar = ({ logo, ctas }) => {
  return (
    <div className="mc-navbar">
      {logo}
      {ctas.map(cta => {
        return (
          <Button text={cta.text} url={cta.url} ariaLabel={cta.ariaLabel}/>
        )
      })}
    </div>
  )
};

export default Navbar;