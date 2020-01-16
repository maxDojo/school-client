import React, { Component } from "react";
import styles from "./css/sidebar.module.css";
import SidebarSelect from "./subComponents/sidebarSelect";
import SidebarBrand from "./subComponents/sidebarBrand";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul
        className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${styles.sidebar}`}
      >
        {/* <ul className="d-flex flex-column"> */}
        <SidebarBrand icon="school">School Administration</SidebarBrand>
        <SidebarSelect icon="home">Home</SidebarSelect>
        <SidebarSelect icon="book-reader">Students</SidebarSelect>
        <SidebarSelect icon="briefcase">Staff</SidebarSelect>
        <SidebarSelect icon="eye">Parents</SidebarSelect>
        <SidebarSelect icon="graduation-cap">Academics</SidebarSelect>
        <SidebarSelect icon="clock">Attendance</SidebarSelect>
        <SidebarSelect icon="pen-alt">Exam</SidebarSelect>
        <SidebarSelect icon="money-check-alt">Payments</SidebarSelect>
        <SidebarSelect icon="mail-bulk">Mail</SidebarSelect>
        <SidebarSelect icon="book">Accounting</SidebarSelect>
        <SidebarSelect icon="bus-alt">Transport</SidebarSelect>
        <SidebarSelect icon="book-open">Library</SidebarSelect>
        <SidebarSelect icon="lock">Admin</SidebarSelect>
        {/* </ul> */}
      </ul>
    );
  }
}

export default Sidebar;
