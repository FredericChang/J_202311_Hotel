import { createContext, useReducer } from 'react'
import { new_ActiveItem, reset_ActiveItem } from '../constants/actionTypes'

const INITIAL_STATE = {
  activeItem: 'AC Source',
  group1Item1: '',
  group2Item1: '',
  group3Item1: '',
}

export const ActiveItemContext = createContext(INITIAL_STATE)

const ActiveItemReducer = (state, action) => {
  switch (action.type) {
    case new_ActiveItem:
      return { activeItem: action.payload }
    case 'SET_GROUP1_ITEM':
      return { ...state, group1Item1: action.payload }
    case 'SET_GROUP2_ITEM':
      return { ...state, group2Item1: action.payload }
    case 'SET_GROUP3_ITEM':
      return { ...state, group3Item1: action.payload }
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
        ...state,
        dispatch,
      }}
    >
      {children}
    </ActiveItemContext.Provider>
  )
}
