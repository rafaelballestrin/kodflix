import React from 'react';

import coverBlackMirror from './images/coverBlackMirror.jpg'
import coverBreakingBad from './images/coverBreakingBad.jpg'
import coverDeathNote from './images/coverDeathNote.jpg'
import coverGameOfThrones from './images/coverGameOfThrones.jpg'
import coverTheWalkingDead from './images/coverTheWalkingDead.jpg'
import coverTheWire from './images/coverTheWire.jpg'

export default function getGallery() {
    return [
      { id: 'BlackMirror', name: 'Black Mirror', logo: coverBlackMirror },
      { id: 'BreakingBad', name: 'Breaking Bad', logo: coverBreakingBad },
      { id: 'DeathNote', name: 'Death Note', logo: coverDeathNote },
      { id: 'GameOfThrones', name: 'Game of Thrones', logo: coverGameOfThrones },
      { id: 'TheWalkingDead', name: 'The Walking Dead', logo: coverTheWalkingDead },
      { id: 'TheWire', name: 'The Wire', logo: coverTheWire },
    ];
  }