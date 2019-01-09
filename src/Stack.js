import React from 'react';

export default function Stack(props) {
    return (
      <div className='item'>
        <img src={props.logo} alt={`${props.name} Cover`} />
        <div className='overlay'>
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  }