import React, { Component } from "react";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">Main Content Area</div>
          <div className="col-md-2">Secondary Content Area</div>
        </div>
      </div>
    );
  }
}

export default Body;
