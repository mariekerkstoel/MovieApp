import React, { Component } from 'react';
import './App.css';
import List from './List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', searchedMovies: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  fetchMovieData(title) {
    let self = this
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=121486b23802e0b6735125ff1892f340&language=en-US&query=${title}&page=1&include_adult=false`)
    .then(function(response){
      return response.json()
    })
    .then(function(jsonData){
      self.setState({searchedMovies: jsonData.results})
      console.log(self.state)
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    this.fetchMovieData(this.state.value);
    event.preventDefault();
  }


  render() {
    let movieArray = [{id: 1, title: 'batman'}]
    return (
      <div>
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
        <List searchedMovies= {this.state.searchedMovies} />
        </div>
      </div>
    );
  }
}

export default App;
