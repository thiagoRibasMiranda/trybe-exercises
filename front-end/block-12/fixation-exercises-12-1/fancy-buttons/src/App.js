import './App.css';
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroCliques1: 0,
      numeroCliques2: 0,
      numeroCliques3: 0,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques1: estadoAnterior.numeroCliques1 + 1,
    }));
  }

  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques2: estadoAnterior.numeroCliques2 + 1
    }));
  }

  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques3: estadoAnterior.numeroCliques3 + 1
    }))
  }

  render() {
    return (
      <>
      <button onClick={this.handleClick}>Botao1 | {this.state.numeroCliques1}</button>
      <button onClick={this.handleClick2}>Botao2 | {this.state.numeroCliques2}</button>
      <button onClick={this.handleClick3}>Botao3 | {this.state.numeroCliques3}</button>
      </>
    )
  }
}

export default App;
