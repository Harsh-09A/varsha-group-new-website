"use client";

import { useState } from "react";
import FullScreenMenu from "./FullScreenMenu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
        <div className="container-fluid content d-flex align-items-center justify-content-between">
          <a className="navbar-brand" href="/">
            <img src="/varsha/logo/varsha-new-logo.jpeg" alt="" className="logo" />
          </a>

          <button
            type="button"
            className="hamburger-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <style jsx>{`
        .hamburger-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          background: transparent;
          border: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .hamburger-btn span {
          display: block;
          width: 26px;
          height: 2px;
          background: #fff;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .hamburger-btn:hover span {
          background: #c9a24b;
        }
      `}</style>
    </>
  );
}

export default Navbar;
