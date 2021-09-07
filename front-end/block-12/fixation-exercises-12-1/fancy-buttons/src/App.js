import './App.css';
import React from 'react'

class App extends React.Component {
  handleClick() {
    console.log('Texto qualquer', this);
  }

  handleClick2() {
    console.log('Texto qualquer 2', this);
  }

  handleClick3() {
    console.log('Texto qualquer 3', this);
  }

  render() {
    return (
      <>
      <button onClick={this.handleClick}>Botao1</button>
      <button onClick={this.handleClick2}>Botao2</button>
      <button onClick={this.handleClick3}>Botao3</button>
      </>
    )
  }
}

export default App;
