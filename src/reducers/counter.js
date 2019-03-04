import {
  ADD_COUNTER,
  REMOVE_COUNTER
} from '../actions/types/counter'

export const initialState = {
  count: 0,
  playerIds: [1, 2]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        playerIds: action.counterIds
      }
    case REMOVE_COUNTER:
      return {
        ...state,
        playerIds: action.counterIds
      }
    default:
      return state;
  }
}