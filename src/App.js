import React from "react";
import "./App.css";
import BlackButton from "./components/Button";
import Person from "./components/Person";
import Score from "./components/Score";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      persons: [],
      curIndex: 0
    };
  }

  changeScore(status) {
    this.setState({
      score: this.state.score + (status === 'Alive' ? 1 : -1)
    });
  }

  render() {
    return (
      <div className="App">
        <Score count={this.state.score}/>
        <Person />
        <div className="buttonsRow">
          <BlackButton caption="Alive" onClick={() => this.changeScore('Alive')}/>
          <div className="subTitle">OR</div>
          <BlackButton caption="Not" onClick={() => this.changeScore('Not')}/>
        </div>
      </div>
    );
  }
}
