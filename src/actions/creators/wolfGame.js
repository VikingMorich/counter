import {
    ADD_PLAYER,
    REMOVE_PLAYER,
    START_GAME,
    UPDATE_ACTIVE_CHARACTERS,
    RESTART_VARIABLES,
    SET_PLAYER_ROLS,
    UPDATE_PLAYER_INDEX
} from '../types/wolfGame';

export const addPlayer = (playerIds) => ({
    type: ADD_PLAYER,
    playerIds
})

export const removePlayer = (playerIds) => ({
    type: REMOVE_PLAYER,
    playerIds
})

export const startGame = () => ({
    type: START_GAME
})

export const updateActiveCharacters = (newCharacters) => ({
    type: UPDATE_ACTIVE_CHARACTERS,
    newCharacters
})

export const restartVariables = () => ({
    type: RESTART_VARIABLES
})

export const setPlayerRols = (playerRols) => ({
    type: SET_PLAYER_ROLS,
    playerRols
})

export const updatePlayerIndex = (index) => ({
    type: UPDATE_PLAYER_INDEX,
    index
})