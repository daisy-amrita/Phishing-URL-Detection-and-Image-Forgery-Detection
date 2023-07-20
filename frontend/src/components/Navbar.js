
import React from "react";
import { Link } from "react-router-dom";
import "../cssfile/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="list">
          <ul>
            <li>
              <Link to="/" className="homebox">Home</Link>
            </li>
            <li>
              <div className="dropdown">
                <button>Detections</button>
                <div className="dropdown-options">
                  <Link to="/phising">Phising website detection</Link>
                  <Link to="/picture">Image forgery detection</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Link to="/login">
          <div className="btncls">
            <div className="p-2 bd-highlight">
              <button className="button" variant="info">
                Login
              </button>
            </div>
          </div>
        </Link>
      </nav>
    </>
  );
}
