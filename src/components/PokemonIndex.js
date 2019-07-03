import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    searchTerm: '',
    allPokemon: []
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => {
        this.setState({
          allPokemon: data
        })
      })
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  renderAdded = (newPoke) => {
    this.setState({
      allPokemon: [...this.state.allPokemon, newPoke]
      // allPokemon: this.state.allPokemon.push(newPoke)
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonForm renderAdded={this.renderAdded}/>
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon} searchTerm={this.state.searchTerm} />

      </div>
    )
  }
}

export default PokemonPage