import React, { Component } from "react";
import styles from "../../css/body.module.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card border-primary mb-3" style={{ maxWidth: "20%" }}>
        {/* <div className="card-header">Header</div> */}
        <div className="card-body text-primary">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
