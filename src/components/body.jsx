import React, { Component } from "react";
import Card from "./subComponents/bodyComponents/card";
import styles from "./css/body.module.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <div className={`container-fluid ${styles.gridContainer}`}>
              <Card icon="home">Home</Card>
              <Card icon="book-reader">Students</Card>
              <Card icon="briefcase">Staff</Card>
              <Card icon="eye">Parents</Card>
              <Card icon="graduation-cap" onClick={this.selectAcademics}>Academics</Card>
              <Card icon="clock">Attendance</Card>
              <Card icon="pen-alt">Exam</Card>
              <Card icon="money-check-alt">Payments</Card>
              <Card icon="mail-bulk">Mail</Card>
              <Card icon="book">Accounting</Card>
              <Card icon="bus-alt">Transport</Card>
              <Card icon="book-open">Library</Card>
              <Card icon="lock">Admin</Card>
            </div>
          </div>
          <div className="col-md-2">Secondary Content Area</div>
        </div>
      </div>
    );
  }
  selectAcademics=()=>{
    
  }
}

export default Body;
