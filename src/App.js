import React from "react";
import "./App.css";
import BlackButton from "./components/Button";
import Person from "./components/Person";
import Score from "./components/Score";

const urlListPersons = 'https://rickandmortyapi.com/api/character/';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      persons: [],
      curIndex: 0,
      characters: [],
      page: 1,
      error: false
    };
  }

  getCharacters = () => {
    const { page, characters } = this.state
    if(page <= 20){
        fetch(urlListPersons+`?page=${page}`)
        .then(response => response.json())
        .then(res => {
            const r = res.results;
            const newCharacters = characters.concat(r)
            this.setState({
                characters: newCharacters,
                page: page+1,
                error: false
            });
        })
        .catch(err => (
            this.setState({
                error: true
            })
        ))
    }
}

  changeScore(status) {
    this.setState({
      score: this.state.score + (status === 'Alive' ? 1 : -1)
    });
  }

  nextCharacter(status) {
    if(this.state.curIndex <= 20){
    this.setState({
     curIndex: this.state.curIndex + 1
    });
  }
  else  this.setState({
    curIndex: 0
   });
  }

  previousCharacter(status) {
    if(this.state.curIndex > 0) {
    this.setState({
     curIndex: this.state.curIndex - 1
    });
  }  else  this.setState({
    curIndex: 20
   });
  }

  render() {
    const { characters, curIndex } = this.state
    this.getCharacters();
    var arrPosition = Object.keys(characters).filter(function(character, i) { return i === curIndex; });
    return (
      <div className="App">
        <Score count={this.state.score}/>    
        {arrPosition.map(() => (      
            <Person img={characters[curIndex]['image']} namePerson={characters[curIndex]['name']}/>
       ))}
        <div className="buttonsRow">
          <BlackButton caption="Alive" onClick={() => {this.changeScore('Alive'); this.nextCharacter()}}/>
          <div className="subTitle">OR</div>
          <BlackButton caption="Not" onClick={() => {this.changeScore('Not'); this.previousCharacter()}}/>
        </div>
      </div>
    );
  }
}
