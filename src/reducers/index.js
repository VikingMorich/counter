import { combineReducers } from 'redux'
import counter from './counter'
import wolfGame from './wolfGame'

export default combineReducers({
  counter,
  wolfGame
})
