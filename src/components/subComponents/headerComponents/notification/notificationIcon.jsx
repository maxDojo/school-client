import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NotificationIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 3 };
  }
  render() {
    return (
      <a
        className="nav-link dropdown-toggle"
        id="alertsDropdown"
        role="button"
        dataToggle="dropdown"
        ariaHaspopup="true"
        ariaExpanded="false"
      >
        <FontAwesomeIcon icon={this.props.icon} />
        <span className="badge badge-danger badge-counter">
          {this.state.counter}
        </span>
      </a>
    );
  }
}

export default NotificationIcon;
