import React from "react";
import "./Score.css";

export default class Score extends React.Component {
  render() {
    return <div className="score-main">Score: {this.props.count}</div>;
  }
}
