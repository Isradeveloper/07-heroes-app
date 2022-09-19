import { HeroCard } from './HeroCard'
import { getHeroesByPublisher } from '../helpers'

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  // Se pude optimizar con un memo, para sólo renderizar cuando se modifique

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  )
}