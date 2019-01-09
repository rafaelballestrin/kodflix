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
          <Stack name='Black Mirror' logo={coverBlackMirror} />
          <Stack name='Breaking Bad' logo={coverBreakingBad} />
          <Stack name='Death Note' logo={coverDeathNote} />
        </div>
        <div className="container">
          <Stack name='Game of Thrones' logo={coverGameOfThrones} />
          <Stack name='The Walking Dead' logo={coverTheWalkingDead} />
          <Stack name='The Wire' logo={coverTheWire} />
        </div>
      </div >
    )
  }