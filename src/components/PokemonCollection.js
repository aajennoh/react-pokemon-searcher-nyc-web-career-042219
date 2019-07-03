import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  filterPokemon = () => {
    const matched = this.props.allPokemon.filter(pokeObj => pokeObj.name.includes(this.props.searchTerm))
    return matched.map(pokemon => < PokemonCard pokemon={pokemon} />)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1><br></br> */}

        {this.props.searchTerm ? this.filterPokemon() : this.props.allPokemon.map(pokemon => < PokemonCard pokemon={pokemon}/> )}
      </Card.Group>
    )
  }
}

export default PokemonCollection
