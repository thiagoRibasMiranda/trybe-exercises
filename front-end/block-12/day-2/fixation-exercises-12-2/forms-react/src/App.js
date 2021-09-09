// import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAno = this.handleChangeAno.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    this.handleChangeMarca = this.handleChangeMarca.bind(this);

    this.state = {
      descrição: '',
      ano: 0,
      isChecked: false,
      marca: '',
    };
  }
    handleChange(event) {
      this.setState({
        descrição: event.target.value,
      });
    }
    handleChangeAno(event) {
      this.setState({
        ano: event.target.value,
      })
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    handleChangeMarca(event) {
      this.setState({
        marca: event.target.value,
      })
    }
  render() {    
    return (
      <>
      <label>
        Marca:
        <select value={this.state.marca} onChange={this.handleChangeMarca}>
          <option>Volvo</option>
          <option>Audi</option>
          <option>Mercedes</option>
        </select> <br/>
      </label>
      
      <label>
        Ano:
        <input type="number" name="ano" value={this.state.ano} onChange={this.handleChangeAno}></input> <br/>
      </label>
      
      <label>
        Gasolina:
        <input type="checkbox" name="gasolina" checked={this.state.isChecked} onChange={this.toggleChange}></input> <br/>
      </label>

      <label>
        Descrição:
        <textarea name="descrição" value={this.state.descrição} onChange={this.handleChange}></textarea>
      </label>
      
    </>
    )
    
  }
}

export default App;
