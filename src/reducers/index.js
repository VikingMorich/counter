import { combineReducers } from 'redux'
import counter from './counter'
import tournament from'./tournament'

export default combineReducers({
  counter,
  tournament
})
