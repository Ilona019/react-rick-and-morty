import React from "react";
import "./Button.css";

export default class BlackButton extends React.Component {
  render() {
    return (
      <button className="button" onClick={() => this.props.onClick()}>
        {this.props.caption}
      </button>
    );
  }
}
