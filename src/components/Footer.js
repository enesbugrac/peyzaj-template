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
            <Link>Fax: +90 242 322 55 72</Link>
            <Link>Santral: +90 533 154 03 72</Link>
            <Link>Adres: Başköy Mah. Narçiçeği Sok. No:26 Kepez/ANTALYA</Link>
            <Link>Email: info@pergepeyzaj.com</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/pergepeyzaj.1/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" style={{ color: "#283618" }} />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/perge.peyzaj/?hl=tr"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" style={{ color: "#283618" }} />
            </a>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" style={{ color: "#283618" }} />
            </Link>

            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/in/perge-peyzaj-in%C5%9Faat-sanayi-ve-ticaret-anonim-%C5%9Firketi-899a8a112/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" style={{ color: "#283618" }} />
            </a>
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
