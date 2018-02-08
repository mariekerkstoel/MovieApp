import React, { Component } from 'react';

class Movie extends Component {
  render(){
    console.log(this.props.movie)
    return(
      <div>
        <li>
          {this.props.movie.title}
        </li>
      </div>
    );
  }
}

export default Movie;
