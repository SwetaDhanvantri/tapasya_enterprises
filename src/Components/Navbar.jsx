import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      {/* <!-- Navbar Start --> */}
  
      <div className=" nav-bar bg-transparent sticky-top">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4 nav-pills">
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className=" p-2 me-2">
              <img
                className="img-fluid"
                src="/assets/img/logo.jpg"
                alt="Icon"
                style={{ width: "100%", height: "50px" }}
              />
            </div>
            <h1 className="m-0 text-primary">Tapasya Enterprises</h1>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <NavLink to="/" className="nav-item nav-link ">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="property-list.html" className="dropdown-item">Property List</a>
                                <a href="property-type.html" className="dropdown-item">Property Type</a>
                                <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Error</a>
                            </div>
                        </div> */}
              <NavLink to="/contact" className="nav-item nav-link ">
           Contact
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
}
