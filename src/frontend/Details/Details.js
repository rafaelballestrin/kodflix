import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getGallery from './Gallery-get';
import './Details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      gallery: {}
    };
  }

  componentDidMount() {
    fetch('/rest/movies')
      .then(response => {
        return response.json();
      })
      .then(galleries => {
        let galleryId = this.props.match.params.galleryId;
        let gallery = galleries.find(function(gallery) {
          return gallery.id === galleryId;
        });
        this.setState({
          gallery: gallery
        });
      });
  }
  render() {
    let gallery = this.state.gallery;
    if (this.state.gallery === undefined) {
      return <Redirect to='/not-found' />;
    } else if (this.state.gallery.id) {
      return (
        <div className='Details'>
          <h1 className='DetailsName'>{gallery.name}</h1>
          <div className='container'>
            <div className = 'synopsis'>{this.state.gallery.synopsis}</div>
            <img
              src={require(`../images/${gallery.id}.jpg`)}
              alt='gallery pictures'
            />
          </div>
          <Link to='/'>Back to home page</Link>
        </div>
      );
    } else {
      return (
        <div className='details'>
          <div className='content'>While loading page...</div>
          <div class='loader'></div>
        </div>
      );
    }
  }
}