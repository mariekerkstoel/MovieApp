import React, { Component } from 'react';
import List from './List';
import { Link } from 'react-router-dom';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {favorites: []};
    this.handleClick = this.handleClick.bind(this);
    this.handleRankDown = this.handleRankDown.bind(this);
    this.handleRankUp = this.handleRankUp.bind(this);
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

  swapElement(array, indexA, indexB) {
    var temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
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

  handleRankUp(event){
    let self = this
    let favorites = this.state.favorites
      for(var i = 0; i<favorites.length; i++){
        if(favorites[i]===event){
          this.swapElement(favorites, i - 1, i)
          self.setState({favorites: favorites}) 
        }
      }
  }

  handleRankDown(event){
    let self = this
    let favorites = this.state.favorites 
    for(var i = 0; i<favorites.length; i++){
      if (favorites[i] === event) {
        let newFavorites = favorites.slice()
        this.swapElement(newFavorites, i , (i + 1))
        self.setState({favorites: newFavorites})
      }
    }
  }

  render(){
    return(
      <div>
      <Link to='/'>Home</Link>
      <List movies={this.state.favorites} buttonText={'Delete from favorites'} handleClick={this.handleClick} handleRankUp={this.handleRankUp} handleRankDown={this.handleRankDown} />
      </div>
    )
  }
}
export default Favorites;
