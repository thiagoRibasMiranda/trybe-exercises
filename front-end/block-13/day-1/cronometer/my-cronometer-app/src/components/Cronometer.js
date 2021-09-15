import React from 'react';


class Cronometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    } 
  }

  componentDidMount() {
    const ONE_SECOND = 1000;

    setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, ONE_SECOND)
  }

  componentDidUpdate(prevProps, prevState) {
    const TIME_LIMIT = 10;
    if(prevState.seconds === TIME_LIMIT){
      this.setState({ seconds: 0 })
    }
  }

  render() {
    const { seconds } = this.state;
    return(
      <h2>
        { seconds }
      </h2>
    )
  }
}

export default Cronometer
