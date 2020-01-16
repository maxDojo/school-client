import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarBrand = props => {
  return (
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      style={{
        textDecoration: "none",
        fontVariant: "small-caps",
        color: "lightgreen",
        fontWeight: "bold",
        marginBottom: "4em"
      }}
    >
      <div class="sidebar-brand-icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div class="sidebar-brand-text mx-3">{props.children}</div>
    </a>
  );
};

export default SidebarBrand;
