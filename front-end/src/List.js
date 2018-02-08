import React, { Component } from 'react';
import Movie from './Movie'

class List extends Component {
  render(){
    let receivedMovies

      receivedMovies = this.props.searchedMovies.map(movie => {
          return(
            <Movie key={movie.id} movie={movie}/>
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
