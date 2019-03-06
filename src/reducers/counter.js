import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  CHANGE_INITIAL_VALUE,
  ENABLE_DEAD_MODE,
  DISABLE_DEAD_MODE,
  TOGGLE_MODAL,
  ENABLE_CUSTOM_NAMES,
  DISABLE_CUSTOM_NAMES
} from '../actions/types/counter'

export const initialState = {
  count: 0,
  playerIds: ['Player1'],
  deadMode: false,
  modalActive: false,
  customNames: false
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
    case CHANGE_INITIAL_VALUE:
      return {
        ...state,
        count: action.value
      }
    case ENABLE_DEAD_MODE:
      return {
        ...state,
        deadMode: true
      }
    case DISABLE_DEAD_MODE:
      return {
        ...state,
        deadMode: false
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        modalActive: !state.modalActive
      }
    case ENABLE_CUSTOM_NAMES:
      return {
        ...state,
        customNames: true
      }
    case DISABLE_CUSTOM_NAMES:
      return{
        ...state,
        customNames: false
      }
    default:
      return state;
  }
}