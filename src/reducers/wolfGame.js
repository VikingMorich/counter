import {
    ADD_PLAYER,
    REMOVE_PLAYER,
    START_GAME,
    UPDATE_ACTIVE_CHARACTERS,
    RESTART_VARIABLES,
    SET_PLAYER_ROLS,
    UPDATE_PLAYER_INDEX
} from '../actions/types/wolfGame'

export const initialState = {
    players: [],
    characters: [
        {
            name: 'Cazador',
            description: 'Actua como aldeano normal pero quando muere puede disparar a un jugador a su eleccion que tambien muere',
            id: 4
        },
        {
            name: 'Enamorados',
            description: 'Són aldeanos con una regla especial, si uno de los dos enamorados muere, el otro se suicida ante la horrible idea de vivir sin su amor',
            id: 5
        },
        {
            name: 'Bruja',
            description: 'Posee dos pociones que puede usar por la noche, tras el turno de los hombres lobo. la pocion de vida salva a alguien despues del ataque de los hombres lobo y la pocion de muerte matarà a otro personaje a su eleccion',
            id: 6
        },
        {
            name: 'Chaman',
            description: 'Antes de que los lobos ataquen, proporciona un escudo a un jugador a su eleccion que no podrà morir durante esa noche',
            id: 7
        },
        {
            name: 'Cuervo',
            description: 'Señala a un jugador el cual recivirà i mantendra la marca del cuervo hasta la noche siguiente. El jugador con dicha marca tiene automaticamente dos votos negativos durante el turno de dia para ser linchado',
            id: 8
        }
    ],
    fixedCharacters: [
        {
            name: 'Lobo',
            description: 'Eligen por consenso a un jugador a quien quieren matar, señalándolo al Narrador.',
            id: 1
        },
        {
            name: 'Narrador',
            description: 'Es el encargado de narrar la historia',
            id: 2
        },
        {
            name: 'Aldeano',
            description: 'Su papel es descubrir quienes son los hombres lobos del pueblo y eliminarlos',
            id: 3
        },
    ],
    activeCharacters: [],
    start: false,
    playerIndex: 0,
    gameRules: {
        5: 1,
        6: 1,
        7: 2,
        8: 2,
        9: 3,
        10: 3,
        more: 4
    },
    playerRols: []
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
        case SET_PLAYER_ROLS:
            return {
                ...state,
                playerRols: action.playerRols
            }
        case UPDATE_PLAYER_INDEX:
            return {
                ...state,
                playerIndex: action.index 
            }
        default:
            return state;
    }
}