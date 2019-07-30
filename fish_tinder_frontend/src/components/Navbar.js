import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class Navigation extends Component{
  render(){
    return(
      <Navbar>
        <Navbar.Brand href = "home">Plenty of Fish</Navbar.Brand>
        <Nav.Link href = "/fishes">AQUAintances</Nav.Link>
        <Nav.Link href = "/new">Find a New Fishy Friend</Nav.Link>
        <Nav.Link href = "/about">About Me</Nav.Link>
      </Navbar>
    )
  }
}
