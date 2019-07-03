import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flip: false
  }

  handleToggle = () => {
    this.setState({
      flip: !this.state.flip
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="" src={this.state.flip ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} onClick={this.handleToggle}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard