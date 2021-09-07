import './App.css';
import React from 'react'

function handleClick() {
  console.log('Texto qualquer');
}

function handleClick2() {
  console.log('Texto qualquer 2');
}

function handleClick3() {
  console.log('Texto qualquer 3');
}
class App extends React.Component {
  render() {
    return (
      <>
      <button onClick={handleClick}>Botao1</button>
      <button onClick={handleClick2}>Botao2</button>
      <button onClick={handleClick3}>Botao3</button>
      </>
    )
  }
}

export default App;
