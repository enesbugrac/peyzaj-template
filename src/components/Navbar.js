import React, { useState, useEffect } from "react";
import Button from "./Button";
import Image from "../images/logo.jpg";
import { Link } from "react-router-dom";
import "./Navbar.style.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [show, setShow] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
      console.log(show);
    } else {
      console.log(show);
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar" id={"navbar"}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo-img" src={Image} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i
            style={{ color: "#74c69d" }}
            className={click ? "fas fa-times" : "fas fa-bars"}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hakkımızda"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Hakkımızda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Ürünlerimiz
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hizmetlerimiz"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Hizmetlerimiz
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Referanslar{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
