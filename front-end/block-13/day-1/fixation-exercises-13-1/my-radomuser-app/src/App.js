import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      api: '',     
      loading: true,
      name: ''
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
    this.setState({ api: dataJson.results, name: dataJson.results[0].name.first })
  }

  render() {
    // const { api, loading } = this.state;
    // const name = api.name;
    // const firstName = name.first;
    return(
        <>
        <div>
          {/* <h3>loading...</h3> */}
          {/* <p>{ api.name.first }</p> */}
          {/* { !loading ? <p>loading...</p> : <p> { name } </p>} */}
        </div>
        </>
    )

  }
}

export default App;
