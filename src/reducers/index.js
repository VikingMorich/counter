import { combineReducers } from 'redux'
import counter from './counter'
import wolfGame from './wolfGame'
import food from './food'
import time from './time'

export default combineReducers({
  counter,
  wolfGame,
  food,
  time
})
