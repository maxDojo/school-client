import React, { Component } from "react";
import Header from "./notificationHeader";
import DropdownItem from "./dropdownItem";

class NotificationList extends Component {
  render() {
    return (
      <div
        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
        ariaLabelledby="alertsDropdown"
      >
        <Header header="Header Placeholder" />
        <DropdownItem
          icon="file-alt"
          date="date placeholder"
          body="This is the body placeholder"
        />
        <DropdownItem
          icon="file-alt"
          date="date placeholder"
          body="This is the body placeholder"
        />
        <DropdownItem
          icon="file-alt"
          date="date placeholder"
          body="This is the body placeholder"
        />
        <DropdownItem
          icon="file-alt"
          date="date placeholder"
          body="This is the body placeholder"
        />

        <div className="dropdown-item text-center small text-gray-500">
          Show All Alerts
        </div>
      </div>
    );
  }
}

export default NotificationList;
