import React, { Component } from 'react';
import Movie from './Movie'

class List extends Component {
  render(){
    let receivedMovies

      receivedMovies = this.props.movies.map(movie => {
          return(
            <Movie key={movie.id} movie={movie} handleClick={this.props.handleClick} buttonText={this.props.buttonText} handleRankUp={this.props.handleRankUp} handleRankDown={this.props.handleRankDown}/>
          )
      })
    return(
      <div>
        {receivedMovies}
      </div>
    )
  }
}

export default List;
