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
          userObj: requestObject,
          userName: requestObject.results[0].name.first,
          userAge: requestObject.results[0].dob.age,
          userEmail: requestObject.results[0].email,
          userImg: requestObject.results[0].picture.medium,
        });
      }
    );
  }

  componentDidMount() {
    this.fetchApi();
  } 
  
  shouldComponentUpdate(_nextProps, nextState) {
    // const { userAge } = this.state
    if( nextState.userAge > 50) {
      return false;
    } return true;
  }

  render() {
    const { loading, userAge, userEmail, userImg, userName } = this.state;
    return (
      <div>
        { loading ? <p> Loading...</p> : <p>{userName}, {userAge}, {userEmail}</p>}
        { loading ? <p> Loading...</p> : <img src={userImg} alt={userName} />}
      </div>
    );
  }
}

export default App;
