import { createContext, useReducer } from 'react'
import { new_ActiveItem, reset_ActiveItem } from '../constants/actionTypes'

const INITIAL_STATE = {
  activeItem: 'AC Source',
}

export const ActiveItemContext = createContext(INITIAL_STATE)

const ActiveItemReducer = (state, action) => {
  switch (action.type) {
    case new_ActiveItem:
      return { activeItem: action.payload }
    case reset_ActiveItem:
      return INITIAL_STATE
    default:
      return state
  }
}

export const ActiveItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ActiveItemReducer, INITIAL_STATE)

  return (
    <ActiveItemContext.Provider
      value={{
        activeItem: state.activeItem,
        dispatch,
      }}
    >
      {children}
    </ActiveItemContext.Provider>
  )
}
