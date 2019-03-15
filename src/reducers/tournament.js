import {
    ADD_PLAYER,
    REMOVE_PLAYER,
    START_TOURNAMENT
} from '../actions/types/tournament'

export const initialState = {
    players: ['Player1', 'Player2', 'Player3'],
    tournamentStart: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER:
            return {
                ...state,
                playerIds: action.playerIds
            }
        case REMOVE_PLAYER:
            return {
                ...state,
                playerIds: action.playerIds
            }
        case START_TOURNAMENT:
            return {
                ...state,
                tournamentStart: true
            }
        default:
            return state;
    }
}