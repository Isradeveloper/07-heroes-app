import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './authContext'
import { authReducer } from './AuthReducer'

const initialState = {
  logged: false
}
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = async (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name
      }
    }

    dispatch()
  }

  return (
    <AuthContext.Provider value={{ login, state }}>
      {children}
    </AuthContext.Provider>
  )
}

// Proporciona toda la información del provider a los hijos
