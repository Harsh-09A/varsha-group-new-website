"use client";

import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const buyerGuideRoutes = [
    "/gst",
    "/stamp-duty",
    "/loan",
    "/pmay",
    "/nri",
    "/loan-calculator",
  ];

  const isBuyerGuideActive = buyerGuideRoutes.includes(pathname);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark tc-navbar-style1 section-padding-x">
      <div className="container-fluid content">
        <a className="navbar-brand me-lg-5" href="/">
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
              <a
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                aria-current={pathname === "/" ? "page" : undefined}
                href="/"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  pathname === "/projects" ? "active" : ""
                }`}
                href="/projects"
              >
                Projects
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${
                  isBuyerGuideActive ? "active" : ""
                }`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Buyer's Guide
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className={`dropdown-item ${
                      pathname === "/gst" ? "active" : ""
                    }`}
                    href="/gst"
                  >
                    GST
                  </a>
                </li>

                <li>
                  <a
                    className={`dropdown-item ${
                      pathname === "/stamp-duty" ? "active" : ""
                    }`}
                    href="/stamp-duty"
                  >
                    Stamp Duty & Registration
                  </a>
                </li>

                <li>
                  <a
                    className={`dropdown-item ${
                      pathname === "/loan" ? "active" : ""
                    }`}
                    href="/loan"
                  >
                    Loans
                  </a>
                </li>

                <li>
                  <a
                    className={`dropdown-item ${
                      pathname === "/pmay" ? "active" : ""
                    }`}
                    href="/pmay"
                  >
                    PMAY
                  </a>
                </li>

                <li>
                  <a
                    className={`dropdown-item ${
                      pathname === "/nri" ? "active" : ""
                    }`}
                    href="/nri"
                  >
                    NRI Corner
                  </a>
                </li>

                <li>
                  <a
                    className={`dropdown-item ${
                      pathname === "/loan-calculator" ? "active" : ""
                    }`}
                    href="/loan-calculator"
                  >
                    Loan Calculator
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${pathname === "/blogs" ? "active" : ""}`}
                href="/"
              >
                Blogs
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${pathname === "/career" ? "active" : ""}`}
                href="/career"
              >
                Career
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${pathname === "/gallery" ? "active" : ""}`}
                href="/gallery"
              >
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
