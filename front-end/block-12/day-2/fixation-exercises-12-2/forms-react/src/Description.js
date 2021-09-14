import React from 'react'

class Description extends React.Component {
  render() {
    return(
      <label>
        Descrição:
        <textarea name="descrição" value={this.props.value} onChange={this.props.handleInputChange}></textarea>
        <br />
      </label>
    )    
  }
}
export default Description
