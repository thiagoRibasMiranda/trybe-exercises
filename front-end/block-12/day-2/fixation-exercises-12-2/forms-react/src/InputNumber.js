import React from 'react'

class ImputNumber extends React.Component {
  render() {
    return(
      <label>
        Ano:
        <input type="number" name="ano" value={this.props.ano} onChange={this.props.handleInputChange}></input> <br/>
      </label>
    )    
  }
}
export default ImputNumber