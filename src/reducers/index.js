import { combineReducers } from 'redux'
import counter from './counter'
import wolfGame from './wolfGame'
import food from './food'

export default combineReducers({
  counter,
  wolfGame,
  food
})
