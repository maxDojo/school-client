import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownItem = props => {
  return (
    <div className="dropdown-item d-flex align-items-center">
      <div className="mr-3">
        <div className="icon-circle bg-primary">
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </div>
      <div>
        <div className="small text-gray-500">{props.date}</div>
        <span className="font-weight-bold">{props.body}</span>
      </div>
    </div>
  );
};

export default DropdownItem;
