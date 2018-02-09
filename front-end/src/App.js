import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import { Link } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', movies: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  fetchMovieData(url) {
    let self = this
    fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(jsonData){
      self.setState({movies: jsonData.results})
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    let url = `https://api.themoviedb.org/3/search/movie?api_key=121486b23802e0b6735125ff1892f340&language=en-US&query=${this.state.value}&page=1&include_adult=false`
    this.fetchMovieData(url);
    event.preventDefault();
  }

  componentDidMount(){
    let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=121486b23802e0b6735125ff1892f340'
    this.fetchMovieData(url);
  }

  handleClick(event){
    fetch('http://localhost:5000/api/favorites', {
      method: 'post',
      body: JSON.stringify(event),
      headers: {'Content-Type':'application/json'}
    }).then(function(response) {
      return response.json();
    })
    .then(function(jsonData){
      if(jsonData.status === 'Not full'){
        alert('Added movie to favorites')
      } else {
        alert('You already have 5 favorites')
      }
    })
  }

  render() {
    let movieArray = [{id: 1, title: 'batman'}]
    return (
      <div>
        <div>
          <Link to='/favorites'>Favorites</Link>
        </div>
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        </div>
        <div className='movies'>
        <List movies={this.state.movies} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
