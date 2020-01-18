import React, { Component } from "react";
import styles from "./css/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./subComponents/headerComponents/profile";
import Notification from "./subComponents/headerComponents/notification";
import Search from "./subComponents/headerComponents/search";
import SearchXs from "./subComponents/headerComponents/searchXs";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow nav-fill">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <FontAwesomeIcon icon="bars" />
        </button>

        {/* <!-- Topbar Search --> */}
        <Search />

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <SearchXs />
          {/* Notification Icons */}
          <Notification icon="bell" />
          <Notification icon="envelope" />
          <Notification icon="star" />
          <Profile
            name="Name Placeholder"
            image="https://source.unsplash.com/QAB-WJcbgJk/60x60"
          />
        </ul>
      </nav>
    );
  }
}

export default Header;
