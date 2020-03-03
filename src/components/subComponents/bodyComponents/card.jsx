import React, { Component } from "react";
import styles from "../../css/body.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`${styles.gridItem} shadow`}>
        <FontAwesomeIcon icon={this.props.icon} className={styles.gridIcon} />
        <h5 className={styles.gridLabel}>{this.props.children}</h5>
      </div>
    );
  }
}

export default Card;
