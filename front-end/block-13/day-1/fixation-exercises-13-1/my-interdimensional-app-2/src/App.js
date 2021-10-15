import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }
  
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Rick and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image}) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}></img>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
