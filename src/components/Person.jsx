import React from "react";
import "./Person.css";

export default class Person extends React.Component {
  render() {
    return (
      <div className="person-container">
        <img className="person-image" src={this.props.img} alt="Example" />
        <div className="person-name">{this.props.namePerson}</div>
      </div>
    );
  }
}
