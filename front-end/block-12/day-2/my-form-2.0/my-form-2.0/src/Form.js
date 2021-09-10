import React from 'react';

const states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

class Form extends React.Component {
  // constructor() {
  //   super();
  //   // this.props ={
  //   //   upperCase: "text-transform:uppercase",
  //   // }
  // }
  verifyCity = (event) => {
    if(event.target.value.match(/^\d/) === true) {
      event.target.value = '';
    }
  }
  render() {
    return (
      <fieldset>
        <label> Nome: <br/>
          <input type="text" required maxLength="40" style={{textTransform: "uppercase"}} ></input>
        </label><br/>

        <label> Email: <br/>
          <input type="text" required maxLength="50"></input>
        </label><br/>

        <label> Cpf: <br/>
          <input type="text" required maxLength="11"></input>
        </label><br/>

        <label> Endereço: <br/>
          <input type="text" required maxLength="200"></input>
        </label><br/>

        <label> Cidade: <br/>
          <input type="text" required maxLength="28" onBlur={this.verifyCity}></input>
        </label><br/>

        <label> Estado:
          <select>
            {states.map((state) => <option value={state}>{state}</option>)}
          </select>
        </label><br/>

        
        <input type="radio" name="tipoCasa" required></input>
        <label>Apartamento</label>
        <input type="radio" name="tipoCasa"></input>
        <label>Casa</label><br/>
        
      </fieldset>
    );
 }
  
}

export default Form;