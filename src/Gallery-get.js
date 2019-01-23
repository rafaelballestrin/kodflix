

import coverBlackMirror from './images/coverBlackMirror.jpg'
import coverBreakingBad from './images/coverBreakingBad.jpg'
import coverDeathNote from './images/coverDeathNote.jpg'
import coverGameOfThrones from './images/coverGameOfThrones.jpg'
import coverTheWalkingDead from './images/coverTheWalkingDead.jpg'
import coverTheWire from './images/coverTheWire.jpg'

export default function getGallery() {
    return [
      { id: 'blackMirror', name: 'Black Mirror', logo: coverBlackMirror },
      { id: 'breakingBad', name: 'Breaking Bad', logo: coverBreakingBad },
      { id: 'deathNote', name: 'Death Note', logo: coverDeathNote },
      { id: 'gameOfThrones', name: 'Game of Thrones', logo: coverGameOfThrones },
      { id: 'theWalkingDead', name: 'The Walking Dead', logo: coverTheWalkingDead },
      { id: 'theWire', name: 'The Wire', logo: coverTheWire },
    ];
  }