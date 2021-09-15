import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';

class App extends React.Component {
  render() {
    return (
      <main>
        <section>
          <Cronometer />
        </section>
          <button type="button" onClick={ () => {} }> 
            Desligar cronômetro
          </button>
      </main>
    );
    
  }
    
}

export default App;
