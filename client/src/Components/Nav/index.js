import React from "react";
import SocialLinks from "../SocialLinks";
import PageLinks from "..//PageLinks";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Nav() {
  return (
    <div className="container-flex">
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <a className="navbar-brand" id="cityName">
          REACT Weather App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">{/* <PageLinks /> */}</ul>
          <span className="navbar-text"></span>
          {/* <SocialLinks /> */}
          <div className="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <input className="form-control form-control-dark w-100" type="text" placeholder="Select a City"
                    aria-label="Search" id="searchSpace"/>
                <button type="submit" className="btn btn-secondary">
                  <i className="icon fa fa-search" id="searchBtn"></i>
                </button>
            </div>
        </div>
        </div>
        
      </nav>
    </div>
  );
}

export default Nav;
