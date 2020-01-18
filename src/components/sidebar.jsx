import React, { Component } from "react";
import styles from "./css/sidebar.module.css";
import SidebarItem from "./subComponents/sidebarComponents/sidebarSelect";
import SidebarBrand from "./subComponents/sidebarComponents/sidebarBrand";
import SidebarCollapse from "./subComponents/sidebarComponents/sidebarCollapse";

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
        <SidebarItem icon="home">Home</SidebarItem>
        <SidebarItem icon="book-reader">Students</SidebarItem>
        <SidebarItem icon="briefcase">Staff</SidebarItem>
        <SidebarItem icon="eye">Parents</SidebarItem>
        <SidebarItem icon="graduation-cap">Academics</SidebarItem>
        <SidebarCollapse
          icon="graduation-cap"
          ddHeader="Academics"
          ddItems={[
            { name: "Courses" },
            { name: "Programs" },
            { name: "Extras" }
          ]}
        >
          Academics
        </SidebarCollapse>
        <SidebarItem icon="clock">Attendance</SidebarItem>
        <SidebarItem icon="pen-alt">Exam</SidebarItem>
        <SidebarItem icon="money-check-alt">Payments</SidebarItem>
        <SidebarItem icon="mail-bulk">Mail</SidebarItem>
        <SidebarItem icon="book">Accounting</SidebarItem>
        <SidebarItem icon="bus-alt">Transport</SidebarItem>
        <SidebarItem icon="book-open">Library</SidebarItem>
        <SidebarItem icon="lock">Admin</SidebarItem>
        {/* </ul> */}
      </ul>
    );
  }
}

export default Sidebar;
