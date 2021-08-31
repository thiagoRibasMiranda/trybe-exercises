// import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map((element) => Task(element)) }</ul>
    );
  }
  
}

export default App;
