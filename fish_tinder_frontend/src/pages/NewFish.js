import React, { Component, Redirect } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class NewFish extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: '',
        species: ''
      }
    }
  }

  handleChange = (event) => {
    let { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({form: form})
  }

  clickNewFish = () => {
    this.props.handleNewFish(this.state.form)
  }

  render(){
    const { name, age, enjoys, species} = this.state.form
    return(
      <div>
      <Form>
        <Form.Group controlId = "form name">
          <Form.Label id = "name">Name:</Form.Label>
          <Form.Control
            type = "text"
            name = "name"
            onChange = {this.handleChange}
            value = {name}
            placeholder = "The name of your piscine bachelor" />
          <Form.Label id = "age">Age:</Form.Label>
          <Form.Control
            type = "text"
            name = "age"
            onChange = {this.handleChange}
            value = {age}
            placeholder = "Number of birthdays" />
          <Form.Label id = "enjoys">Likes:</Form.Label>
          <Form.Control
            type = "text"
            name = "enjoys"
            onChange = {this.handleChange}
            value = {enjoys}
            placeholder = "What does your fish enjoy doing?" />
          <Form.Label id = "species">Species:</Form.Label>
          <Form.Control as = "select"
            type = "text"
            name = "species"
            onChange = {this.handleChange}
            value = {species}
          >
            <option>🐟</option>
            <option>🐠</option>
            <option>🐙</option>
            <option>🦑</option>
            <option>🦈</option>
            <option>🐬</option>
            <option>🐋</option>
            <option>🐳</option>
            <option>🐡</option>
            <option>🦀</option>
            <option>🦐</option>
            <option>🐢</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
      </Form>
      {this.props.success &&
        <Redirect to="/fishes" />
      }
      <Button id = "submit" variant = "info" onClick = {this.clickNewFish}>Create My Fishy Friend</Button>
      </div>
    )
  }

}
