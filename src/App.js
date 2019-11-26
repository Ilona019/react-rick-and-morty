import React from "react";
import "./App.css";
import BlackButton from "./components/Button";
import Person from "./components/Person";
import Score from "./components/Score";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Score />
        <Person />
        <div className="buttonsRow">
          <BlackButton caption="Alive" />
          <div className="subTitle">OR</div>
          <BlackButton caption="Not" />
        </div>
      </div>
    );
  }
}
