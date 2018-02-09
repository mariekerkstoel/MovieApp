import React, { Component } from 'react';
import List from './List';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {favorites: []};
  }

  componentDidMount(){
    let self = this
    fetch('http://localhost:5000/api/favorites')
    .then(function(response){
      return response.json()
    })
    .then(function(jsonData){
      self.setState({favorites: jsonData})
      console.log(self.state.favorites)
    })
  }

  render(){
    return(
      <List movies={this.state.favorites} />
    )
  }
}
export default Favorites;
