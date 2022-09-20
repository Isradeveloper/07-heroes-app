import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './authContext'
import { authReducer } from './AuthReducer'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init)

  const login = async (name = '') => {
    const user = { id: 'ABC', name }
    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user))

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ login, ...state }}>
      {children}
    </AuthContext.Provider>
  )
}

// Proporciona toda la información del provider a los hijos
