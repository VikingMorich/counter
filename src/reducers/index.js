import { combineReducers } from 'redux'
import counter from './counter'
import launchpad from './launchpad'

export default combineReducers({
  counter,
  launchpad
})
