import {
    ADD_PLAYER,
    REMOVE_PLAYER,
    START_GAME,
    UPDATE_ACTIVE_CHARACTERS,
    RESTART_VARIABLES
} from '../actions/types/wolfGame'

export const initialState = {
    players: ['Morich', 'Romo', 'Carlos', 'Xavi', 'Anusky'],
    characters: [
        {
            name: 'Cazador',
            description: 'Actua como aldeano normal pero quando muere puede disparar a un jugador a su eleccion que tambien muere'
        },
        {
            name: 'Aldeano',
            description: 'Su papel es descubrir quienes son los hombres lobos del pueblo y eliminarlos'
        }
    ],
    fixedCharacters: [
        {
            name: 'Lobo',
            description: 'Eligen por consenso a un jugador a quien quieren matar, señalándolo al Narrador.'
        },
        {
            name: 'Narrador',
            description: 'Es el encargado de narrar la historia'
        },
    ],
    activeCharacters: ['Lobo', 'Narrador'],
    start: false,
    playerIndex: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER:
            return {
                ...state,
                players: action.playerIds
            }
        case REMOVE_PLAYER:
            return {
                ...state,
                players: action.playerIds
            }
        case START_GAME:
            return {
                ...state,
                start: true
            }
        case UPDATE_ACTIVE_CHARACTERS:
            return{
                ...state,
                activeCharacters: action.newCharacters
            }
        case RESTART_VARIABLES:
            return{
                ...state,
                playerIndex: 0
            }
        default:
            return state;
    }
}