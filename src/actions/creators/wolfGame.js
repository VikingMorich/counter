import {
    ADD_PLAYER,
    REMOVE_PLAYER,
    START_GAME,
    UPDATE_ACTIVE_CHARACTERS,
    RESTART_VARIABLES
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