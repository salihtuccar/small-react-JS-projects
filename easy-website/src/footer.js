import React from "react";
import "./footer.css";

import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

export default function footer() {
  return (
    <footer>
      <div className="container">
        <div className="social">
          <div className="soci">
            <FaInstagram />
          </div>
          <div className="soci">
            <FaFacebook />
          </div>
          <div className="soci">
            <FaGithub />
          </div>
          <div className="soci">
            <FaTwitter />
          </div>
          <div className="soci">
            <FaTelegram />
          </div>
        </div>
        <div className="copyright">Copyright &copy; 2022. AkinFeev</div>
      </div>
    </footer>
  );
}
