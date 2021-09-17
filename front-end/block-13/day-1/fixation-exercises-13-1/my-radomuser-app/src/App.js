import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      api: '',     
      loading: true,
      name: '',
      email: '',
      age: ''
    };
    this.changeDataJson = this.changeDataJson.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    try {
      const url = `https://api.randomuser.me`;
      const response = await fetch(url);
      const dataJson = await response.json();
      this.changeDataJson(dataJson);
    } catch (error) {
      console.log(error);
    }
  }
  
  changeDataJson(dataJson) {
    this.setState({ 
      api: dataJson.results[0], 
      name: dataJson.results[0].name.first, 
      email: dataJson.results[0].email,
      age: dataJson.results[0].dob.age,
      loading: false
    })
  }
  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState);
    const idade = 50;
    if (nextState.age > idade) {
      return false;
    }
    return true;
  }

  render() {
    const { name, loading, email, age } = this.state;
    return(
        <>
        <div>
          { loading ? <p>loading...</p> : <p> Nome: { name }, idade: { age }, email: { email } </p>}
        </div>
        </>
    )

  }
}

export default App;
