import React, { useState, useEffect } from "react";
import Button from "./Button";
import Image from "../images/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.style.css";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  let history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    window.scrollTo(0, 0);
    history.push("/detaylar");
    setClick(false);
  };

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={navbar ? "navbar active" : "navbar"} id={"navbar"}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {navbar ? "PERGE" : <img className="logo-img" src={Image} alt="" />}
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
              <HomeIcon fontSize="large" />
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
            <Link
              to="/urunlerimiz"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ÜRÜNLERİMİZ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hizmetlerimiz"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              HİZMETLERİMİZ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/referanslar"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Referanslar{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/iletisim"
              className="nav-linksson"
              onClick={closeMobileMenu}
            >
              İLETİŞİM
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
