import React, { Component } from "react";

class InfoUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card" style="width: 18rem;">
        <img className="card-img-top" src={this.props.image} alt="Picture" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {this.props.details.map(detail => (
            <li className="list-group-item">detail</li>
          ))}
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    );
  }
}

export default InfoUnit;
