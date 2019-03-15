import {
    ADD_PLAYER,
    REMOVE_PLAYER,
    START_TOURNAMENT
} from '../types/tournament';

export const addPlayer = (playerIds) => ({
    type: ADD_PLAYER,
    playerIds
})

export const removePlayer = (playerIds) => ({
    type: REMOVE_PLAYER,
    playerIds
})

export const startTournament = () => ({
    type: START_TOURNAMENT
})