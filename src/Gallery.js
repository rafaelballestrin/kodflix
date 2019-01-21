import React from 'react'

import Stack from './Stack.js';
import coverBlackMirror from './images/coverBlackMirror.jpg'
import coverBreakingBad from './images/coverBreakingBad.jpg'
import coverDeathNote from './images/coverDeathNote.jpg'
import coverGameOfThrones from './images/coverGameOfThrones.jpg'
import coverTheWalkingDead from './images/coverTheWalkingDead.jpg'
import coverTheWire from './images/coverTheWire.jpg'

export default function Gallery() {
    return (
      <div>
        <div className="container">
          <Stack id='BlackMirror' name='Black Mirror' logo={coverBlackMirror} />
          <Stack id='BreakingBad' name='Breaking Bad' logo={coverBreakingBad} />
          <Stack id='DeathNote' name='Death Note' logo={coverDeathNote} />
        </div>
        <div className="container">
          <Stack id='GameOfThrones' name='Game of Thrones' logo={coverGameOfThrones} />
          <Stack id='TheWalkingDead' name='The Walking Dead' logo={coverTheWalkingDead} />
          <Stack id='TheWire' name='The Wire' logo={coverTheWire} />
        </div>
      </div >
    )
  }