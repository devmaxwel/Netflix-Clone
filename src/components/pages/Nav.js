import React, { useEffect, useState } from "react";
import "./nav.css";
const Nav = () => {
  const netflixLogo =
    "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png";
  const avatarLogo =
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117";

  const [show, handleShow] = useState(false);
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
      <img className="nav_logo" src={netflixLogo} alt="netflix- logo" />
      <img className="nav_avatar" src={avatarLogo} alt="netflix- logo" />
    </div>
  );
};

export default Nav;
