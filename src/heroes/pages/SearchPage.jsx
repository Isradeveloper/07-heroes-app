import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {
  const navigate = useNavigate()

  const location = useLocation()
  // console.log(location)

  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q)

  const { searchtext, onInputChange } = useForm({
    searchtext: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if (searchtext.trim().length <= 1) return
    navigate(`?q=${searchtext.toLowerCase().trim()}`)
  }
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>

        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type='text' name='searchtext' id='searchtext' className='form-control' autoComplete='off' placeholder='Search a hero' value={searchtext} onChange={onInputChange} />
            <div className='col d-flex justify-content-start'>
              <button className='btn btn-outline-primary mt-3'>Search</button>
            </div>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ? <div className='alert alert-primary'>Search a hero</div>
              : (heroes.length === 0) && <div className='alert alert-danger'>No hero with <b>{q}</b></div>
          }

          {
            heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
