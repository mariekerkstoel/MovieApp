import React, { Component } from 'react';
import List from './List';
import { Link } from 'react-router-dom';


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
      <div>
      <Link to='/'>Home</Link>
      <List movies={this.state.favorites} />
      </div>
    )
  }
}
export default Favorites;
