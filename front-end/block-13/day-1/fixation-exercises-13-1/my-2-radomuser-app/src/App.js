import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userObj: undefined,
      loading: true,
      userImg: '',
      userName: '',
      userEmail: '',
      userAge: '',
    };
  }

  async fetchApi() {
    this.setState(
      {loading: true },
      async () => {
        const requestReturn = await fetch ('https://api.randomuser.me/');
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          userObj: requestObject
        });
      }
    );
  }
  
  componentDidMount() {
    this.fetchApi();
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
