import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends Component {
  state = {};
  render() {
    return (
      <li className="nav-item dropdown no-arrow">
        <a
          className="nav-link dropdown-toggle"
          id="userDropdown"
          role="button"
          dataToggle="dropdown"
          ariaHaspopup="true"
          ariaExpanded="false"
        >
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
            {this.props.name}
          </span>
          <img
            className="img-profile rounded-circle"
            src={this.props.image}
            style={{ width: 32, height: 32 }}
          />
        </a>
        {/* <!-- Dropdown - User Information --> */}
        <div
          className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          ariaLabelledby="userDropdown"
        >
          <a className="dropdown-item" href="#">
            <FontAwesomeIcon icon="user" className="mr-2 text-gray-400" />
            Profile
          </a>
          <a className="dropdown-item" href="#">
            <FontAwesomeIcon icon="cogs" className="mr-2 text-gray-400" />
            {/* <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> */}
            Settings
          </a>
          <a className="dropdown-item" href="#">
            <FontAwesomeIcon icon="list" className="mr-2 text-gray-400" />
            {/* <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> */}
            Activity Log
          </a>
          <div className="dropdown-divider"></div>
          <a
            className="dropdown-item"
            dataToggle="modal"
            dataTarget="#logoutModal"
          >
            <FontAwesomeIcon
              icon="sign-out-alt"
              className="mr-2 text-gray-400"
            />
            {/* <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> */}
            Logout
          </a>
        </div>
      </li>
    );
  }
}

export default Profile;
