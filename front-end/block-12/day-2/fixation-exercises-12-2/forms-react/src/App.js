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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fileInput = React.createRef();

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
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name] : value
      });
    }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Selected file - ${this.fileInput.current.files[0].name}`
      );
    }
  render() {    
    return (
      <>
      <form onSubmit={this.handleSubmit}> 
      <label>
        Marca:
        <select value={this.state.marca} onChange={this.handleInputChange}>
          <option>Volvo</option>
          <option>Audi</option>
          <option>Mercedes</option>
        </select> <br/>
      </label>
      
      <label>
        Ano:
        <input type="number" name="ano" value={this.state.ano} onChange={this.handleInputChange}></input> <br/>
      </label>
      
      <label>
        Gasolina:
        <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleInputChange}></input> <br />
      </label>

      <label>
        Descrição:
        <textarea name="descrição" value={this.state.descrição} onChange={this.handleInputChange}></textarea>
        <br />
      </label>
      
      <label>
        Envie o arquivo:
        <input type="file" ref={this.fileInput}></input>
      </label>
      </form>
    </>
    )
    
  }
}

export default App;
