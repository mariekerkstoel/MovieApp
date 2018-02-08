import React, { Component } from 'react';

class Movie extends Component {
  render(){
    console.log(this.props.movie)
    return(
      <div>
          <h1>{this.props.movie.title}</h1>
          <img src={'https://image.tmdb.org/t/p/w500'+this.props.movie.poster_path} style={{width: '100px'}} />
          <p>{this.props.movie.overview}</p>
      </div>
    );
  }
}

export default Movie;
