import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean bg-light-blue">
      <div className="container">
        <a className="navbar-brand" href="#">
          Company Name
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Benifits
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Some Numbers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
