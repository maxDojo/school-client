import React, { Component } from "react";
import styles from "../../css/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarItem = props => {
  return (
    <React.Fragment>
      {/* <div className={`${styles.selectItem}`}>
        <span className={styles.selectItemIcon}>
          <FontAwesomeIcon icon={props.icon} />
        </span>
        {props.children}
      </div>
      <hr className="sidebar-divider my-0" />
    </React.Fragment> */}
      {/* <React.Fragment> */}
      <li className="nav-item-active">
        <a className="nav-link">
          <FontAwesomeIcon icon={props.icon} />
          <span>{props.children}</span>
        </a>
      </li>
    </React.Fragment>
  );
};

export default SidebarItem;
