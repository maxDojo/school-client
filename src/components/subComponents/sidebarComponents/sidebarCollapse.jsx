import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../css/sidebar.module.css";

const SidebarCollapse = props => {
  return (
    <li className={`nav-item ${styles.selectItem}`}>
      <a
        className="nav-link collapsed"
        dataToggle="collapse"
        dataTarget="#collapseUtilities"
        ariaExpanded="true"
        ariControls="collapseUtilities"
      >
        <i className="fas fa-fw fa-wrench"></i>
        <FontAwesomeIcon icon={props.icon} />
        <span>{props.children}</span>
      </a>
      <div
        id="collapseUtilities"
        className="collapse"
        ariaLabelledby="headingUtilities"
        dataParent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">{props.ddHeader};</h6>

          {props.ddItems.map(item => (
            <a className="collapse-item">{item.name}</a>
          ))}
        </div>
      </div>
    </li>
  );
};

export default SidebarCollapse;
