import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navbar'

import Fishes from './pages/Fishes'
import NewFish from './pages/NewFish'
import HomePage from './pages/HomePage'

import { getFishes, createFish } from './api'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      fishes: []
    }
  }

  componentDidMount(){
    getFishes()
      .then(APIfishes => {
        this.setState({
          fishes: APIfishes,
        })
      })
  }

  handleNewFish = (newFishInfo) => {
    createFish(newFishInfo)
    .then(JSONresponse => {
      console.log("Success! New fish: ", JSONresponse)
    })
  }

  render () {
    const { fishes, success } = this.state
    return (
      <div>
      <Navigation />
      <Header />
        <Router>
          <Switch>
            <Route exact path = "/fishes" render = {(props) => < Fishes fishes = {fishes} /> } />
            <Route exact path = "/new" render = { (props) => < NewFish handleNewFish = {this.handleNewFish} success = {success} /> } />
            <Route path = "/" component = { HomePage }/>
          </Switch>
        </Router>
      </div>
    )
  }
}
