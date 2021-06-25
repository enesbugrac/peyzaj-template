import React from "react";
import "./Footer.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <Link to="/">Email: testing@gmail.com</Link>
            <Link to="/">Telefon: 055555555</Link>
            <Link to="/">Adres: Antalya/Kepez</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" style={{ color: "#283618" }} />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" style={{ color: "#283618" }} />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" style={{ color: "#283618" }} />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" style={{ color: "#283618" }} />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" style={{ color: "#283618" }} />
            </Link>
          </div>
        </div>
      </section>
      <section className="social-media">
        <h4 className="haklarisaklidir-title">
          Tüm Hakları Saklıdır. © 2020 | Perge Peyzaj{" "}
        </h4>
      </section>
    </div>
  );
}

export default Footer;
