import React, { Component } from 'react';

class Movie extends Component {

  render(){
    return(
      <div>
          <h1>{this.props.movie.title}</h1>
          <button className='addToFavorites' onClick={(event)=> {this.props.handleClick(this.props.movie, event)}}>{this.props.buttonText}</button>
          <img src={'https://image.tmdb.org/t/p/w500'+this.props.movie.poster_path} style={{width: '100px'}} />
          <button className='rankButton' onClick={(event)=> {this.props.handleRankUp(this.props.movie, event)}}>▲</button>
          <button className='rankButton' onClick={(event)=> {this.props.handleRankDown(this.props.movie, event)}}>▼</button>
          <p>{this.props.movie.overview}</p>
      </div>
    );
  }
}

export default Movie;
