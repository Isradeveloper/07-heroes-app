import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../../ui/components'
import { MarvelPage, DcPage, SearchPage, Hero } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='hero' element={<Hero />} />
          <Route path='search' element={<SearchPage />} />

          {/* Search, hero by id */}

          <Route path='/*' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  )
}
// SI MARVEL ES ELE
