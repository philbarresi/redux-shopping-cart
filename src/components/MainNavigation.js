import React from "react";
import DropdownCart from "./DropdownCart";

export default function MainNavigation({}) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Phil's Shop
      </a>
      <div
        className="collapse navbar-collapse d-flex flex-row-reverse"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#">
            <DropdownCart />
          </a>
        </div>
      </div>
    </nav>
  );
}
