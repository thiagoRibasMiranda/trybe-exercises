import React from 'react';
import ValidEmail from './ValidEmail';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEMail: '',
    }
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: ''});
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={(e) => this.changeEmail(e.target.value)}
          />
        </label>
        <input
          id="btn-send"
          type="button"
          value="Enviar"
          data-testid="id-send"
          onClick={ () => this.changeSaveEmail(email)}
        />
        <input id="btn-back" type="button" value="Voltar" />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
