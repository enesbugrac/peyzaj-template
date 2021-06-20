import React, { useState, useEffect } from "react";
import Button from "./Button";
import Image from "../images/logo.jpg";
import { Link } from "react-router-dom";
import "./Navbar.style.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
    <nav className="navbar">
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
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
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
              to="/services"
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
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Ürünler
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
