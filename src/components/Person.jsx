import React from "react";
import "./Person.css";

export default class Person extends React.Component {
  render() {
    return (
      <div className="person-container">
        <img className="person-image" src="./img/game.png" alt="Example" />
        <div className="person-name">Mr.Poopybackhole</div>
      </div>
    );
  }
}
