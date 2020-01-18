import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchXs = () => {
  return (
    <li className="nav-item dropdown no-arrow d-sm-none">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="searchDropdown"
        role="button"
        dataToggle="dropdown"
        ariaHaspopup="true"
        ariaExpanded="false"
      >
        <FontAwesomeIcon icon="search" />
        {/* <i className="fas fa-search fa-fw"></i> */}
      </a>
      {/* <!-- Dropdown - Messages --> */}
      <div
        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
        ariaLabelledby="searchDropdown"
      >
        <form className="form-inline mr-auto w-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              ariaLabel="Search"
              ariaDescribedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
  );
};

export default SearchXs;
