import React from "react";
import "./Footer.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          En iyi gezi rehberleri için takip et
        </p>
        <p className="footer-subscription-text">
          İstediğin zaman iptal edebilirsin.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Email"
            />
            <Button buttonStyle="btn--outline">Abone Ol</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Nasıl Çalışır</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
          </div>
          <div class="footer-link-items">
            <h2>Lorem</h2>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Lorem</h2>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
            <Link to="/">Lorem</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              BURA
              <i class="fab fa-accusoft"></i>
            </Link>
          </div>
          <small class="website-rights">BURA © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
