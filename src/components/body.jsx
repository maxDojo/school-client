import React, { Component } from "react";
import Card from "./subComponents/bodyComponents/card";

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
            <div className="card-deck">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="card-deck">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="card-deck">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="card-deck">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="col-md-2">Secondary Content Area</div>
        </div>
      </div>
    );
  }
}

export default Body;
