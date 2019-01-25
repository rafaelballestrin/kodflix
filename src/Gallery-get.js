import cPulp from './images/cPulp.jpg'
import cVolver from './images/cVolver.jpeg'
import cClock from './images/cClock.jpg'
import cEdward from './images/cEdward.jpg'
import cHer from './images/cHer.jpg'
import cBuda from './images/cBuda.jpg'


export default function getGallery() {
    return [
      { id: 'pulpFiction', name: 'Pulp Fiction', logo: cPulp, synopsis: 'The paths of various criminals intersect in these three stories of Quentin Tarantino. A gunslinger falls in love with his boss\'s wife, a boxer does not do well in a fight, and a couple tries to execute a theft plan that runs out of control.'},
      { id: 'volver', name: 'Volver', logo: cVolver, synopsis: 'Set in Spain, this is a generational story of three women: a good mother who is desperately in love with a man who is far from being a saint; a young mother carrying a hard life upon her shoulders; and an illegal hairdresser whose shop is the meeting point for all the neighborhood gossips.'},
      { id: 'clockwork', name: 'Clockwork Orange', logo: cClock, synopsis: 'Young Alex spends his nights with a gang of quarrelsome friends. After he is arrested, he undergoes a behavior modification technique in order to gain his freedom.' },
      { id: 'edward', name: 'Edward Scissorhands', logo: cEdward , synopsis:'Peg Boggs is a saleswoman who accidentally discovers Edward, a young woman who lives alone in a castle on the top of a mountain, raised by an inventor who died before giving her hands to the strange being, who has only huge blades in their shoes. This prevents him from being able to approach humans, except to create revolutionary haircuts. However, Edward is a victim of his innocence, and if he is loved by some, he is persecuted and used by others.'},
      { id: 'her', name: 'Her', logo: cHer, synopsis:'In Los Angeles, the solitary writer Theodore develops a special love relationship with the new operating system of his computer. Surprisingly, he ends up falling in love with the voice of this program, an intuitive and sensitive entity, named Samantha.'},
      { id: 'buda', name: 'The Grand Budapest Hotel', logo: cBuda, synopsis:'In the 1930s, the manager of a famous European hotel becomes a close friend of a young co-worker. The two end up getting involved in the robbery of a famous painting of priceless value and in the battle for a family fortune. The film shows the historical changes in Europe that occurred during the 1920s.'}
    ];
  }