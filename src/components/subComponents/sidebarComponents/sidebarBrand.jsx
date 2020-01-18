import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarBrand = props => {
  return (
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      style={{
        textDecoration: "none",
        fontVariant: "small-caps",
        color: "lightgreen",
        fontWeight: "bold",
        marginBottom: "4em"
      }}
    >
      <div className="sidebar-brand-icon rotate-n-15">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="sidebar-brand-text mx-3">{props.children}</div>
    </a>
  );
};

export default SidebarBrand;
