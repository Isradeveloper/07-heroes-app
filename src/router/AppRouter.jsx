import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}

// SI EL PATH ES LOGIN ENTRA ACÁ (SIN NAV)
// SI ES DIFERENTE SE VA A LAS RUTAS DE LOS HEROES
