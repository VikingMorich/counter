import {
    ADD_PLAYER,
    REMOVE_PLAYER,
    START_GAME
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