import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
      <Link to={`/${props.id}`} className='item'>
        <img src={require(`./images/${props.id}.jpg`)} alt={`${props.name} Cover`} />
        <div className='overlay'>
          <h1>{props.name}</h1>
        </div>
      </Link>
    );
  }