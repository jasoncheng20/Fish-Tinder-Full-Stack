import React, { Component } from 'react'
import {
  Col,
  Container,
  Row,
  ListGroup,
  Card
} from 'react-bootstrap';
import '../App.css'

export default class Fishes extends Component {
  render(){
    return(
        <Container>
          <Row>
            <ListGroup>
              {this.props.fishes.map((fish, index) => {
                return (
                  <Col sm>
                  <Card key = {index} text = "white" bg = "success">
                  <ListGroup.Item key = {index}>
                      <h5>
                        <Card.Header>
                        <span className = 'fish-name'>{fish.name}</span> - <small className = 'fish-age'>{fish.age} years old</small>
                        <br/>
                        </Card.Header>
                        <Card.Body>
                        <span className = 'fish-enjoys'>Likes: {fish.enjoys}</span>
                        <br/>
                        <br/>
                        <span className = 'fish-species'>Species: {fish.species}</span>
                        </Card.Body>
                      </h5>
                  </ListGroup.Item>
                  </Card>
                  </Col>
                )
              })}
            </ListGroup>
          </Row>
        </Container>
    )
  }
}
