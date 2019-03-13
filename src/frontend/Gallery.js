import React, { Component } from 'react'
import Stack from './Stack.js';
import './App.css'
//import getGallery from './Gallery-get.js'

export default class Gallery extends Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch('/rest/movies')
      .then(function(response) {
        return response.json();
      })
      .then(movies => {
        this.setState({ movies: movies });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.movies.map(movies => (
              <Stack id={movies.id} name={movies.name} />
            ))}
        </div>
      </div >
    );
  }

}

