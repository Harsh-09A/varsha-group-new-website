import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        <a className="navbar-brand" href="/">
          <img src="/home1/assets/img/logo_new.png" alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Buyer's Guide
              </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/gst"> GST</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/stamp-duty"> Stamp Duty & Registration</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/loan"> Loans</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pmay"> PMAY</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/nri"> NRI Corner</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/loan-calculator"> Loan Calculator</a>
                  </li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          {/* <div className="nav-side">
            <a href="#" className="icon ms-3">
              <span> EN </span>
            </a>
            <a href="#" className="icon ms-3">
              <span> FR </span>
            </a>
            <a href="#" className="icon ms-5 fsz-21">
              <span>
                <i className="la la-search"></i>{' '}
              </span>
            </a>
            <a href="#" className="icon ms-3 side_menu_btn fsz-21">
              <span>
                <i className="la la-grip-lines"></i>{' '}
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
