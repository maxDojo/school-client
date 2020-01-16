import React, { Component } from "react";
import styles from "./css/sidebar.module.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`${styles.sidebar} container-fluid`}>
        Sidebar Placeholder
      </div>
    );
  }
}

export default Sidebar;
