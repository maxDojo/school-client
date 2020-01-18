import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
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
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
