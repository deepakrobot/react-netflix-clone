import React, { useEffect, useState } from "react";
import avatar from "./avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img className="nav_avatar" src={avatar} alt="Avatar" />
    </div>
  );
}
export default Nav;
