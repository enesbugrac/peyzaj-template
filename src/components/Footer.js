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
            <h2>Hakkımızda</h2>
            <Link to="/sign-up">Nasıl Çalışır</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
          </div>
          <div class="footer-link-items">
            <h2>Yardımcı Linkler</h2>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>İletişim</h2>
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
              <i class="fab fa-facebook-f" style={{ color: "#b7e4c7" }} />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" style={{ color: "#b7e4c7" }} />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" style={{ color: "#b7e4c7" }} />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" style={{ color: "#b7e4c7" }} />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" style={{ color: "#b7e4c7" }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
