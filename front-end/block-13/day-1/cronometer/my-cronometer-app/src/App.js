import React from 'react';
import './App.css';
import Cronometer from './components/Cronometer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showCronometer: true,
    }
  }

  toggleDisplayCronometer = () => {
    this.setState((prevState) => ({
      showCronometer: !prevState.showCronometer,
    }))
  }

  render() {
    const { showCronometer } = this.state;
    return (
      <main>
        <section>
          { showCronometer ? <Cronometer /> : '' }
        </section>
          <button type="button" onClick={ this.toggleDisplayCronometer }> 
          { showCronometer ? 'Desligar cronometro' : 'Ligar cronometro' }
          </button>
      </main>
    );
    
  }
    
}

export default App;
