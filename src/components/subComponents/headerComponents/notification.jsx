import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./notification/notificationIcon";
import List from "./notification/notificationList";
import Popper from "popper.js";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className="nav-item dropdown no-arrow mx-1">
        <Icon icon={this.props.icon} />
        <List />
        <List />
        <List />
      </li>
    );
  }
}

export default Notification;
