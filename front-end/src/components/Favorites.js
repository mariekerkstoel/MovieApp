import React, { Component } from 'react';
import List from './List';
import { Link } from 'react-router-dom';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {favorites: []};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    let self = this
    fetch('http://localhost:5000/api/favorites')
    .then(function(response){
      return response.json()
    })
    .then(function(jsonData){
      self.setState({favorites: jsonData})
    })
  }

  handleClick(event){
    let self = this
    fetch('http://localhost:5000/api/favorites/' + event.id, {
      method: 'delete'
    }).then(function(response) {
      let favorites = self.state.favorites
      let index = favorites.indexOf(event)
      favorites.splice(index, 1)
      self.setState({favorites: favorites})
    })
  }

  render(){
    return(
      <div>
      <Link to='/'>Home</Link>
      <List movies={this.state.favorites} buttonText={'Delete from favorites'} handleClick={this.handleClick} />
      </div>
    )
  }
}
export default Favorites;
