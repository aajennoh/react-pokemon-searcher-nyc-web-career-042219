import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
      name: '',
      stats: [{
        value: 0,
        name: 'hp'
      }],
      sprites: {
        front: '',
        back: ''
      }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        stats: [{
          value: e.target.hp.value,
          name: 'hp'
        }],
        sprites: {
          front: e.target.frontUrl.value,
          back: e.target.backUrl.value
        }
      })
    })
    .then(res => res.json())
    .then(data => {

      // console.log(data)
      this.props.renderAdded(data)
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm