import './App.css';
import React from 'react'

function handleClick() {
  console.log('Texto qualquer');
}
class App extends React.Component {
  render() {
    return (
      <>
      <button onClick={handleClick}>Botao1</button>
      </>
    )
  }
}

export default App;
