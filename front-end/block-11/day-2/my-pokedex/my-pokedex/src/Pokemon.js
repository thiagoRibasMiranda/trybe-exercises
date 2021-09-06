import React from 'react';
// import pokemons from './data';


class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, moreInfo } } = this.props;
    return (
      <div>
        <ul>
          <li>{ name }</li>
          <li>{ type }</li>
          <li>{ averageWeight.value } { averageWeight.measurementUnit }</li>
        </ul>
        <img src={ image } alt={ moreInfo } />
      </div>
    )
  }
}

export default Pokemon;