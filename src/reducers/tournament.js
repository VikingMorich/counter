import {
    ADD_PLAYER,
    REMOVE_PLAYER,
    START_TOURNAMENT
} from '../actions/types/tournament'

export const initialState = {
    players: ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6', 'Player7', 'Player8'],
    players2: ['Player1', 'Player3', 'Player5', 'Player7'],
    players3: ['Player1', 'Player5'],
    players4: ['Player1'],
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