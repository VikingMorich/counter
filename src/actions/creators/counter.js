import {
    ADD_COUNTER,
    REMOVE_COUNTER
} from '../types/counter';

export const addCounter = (counterIds) => ({
    type: ADD_COUNTER,
    counterIds
})

export const removeCounter = (counterIds) => ({
    type: REMOVE_COUNTER,
    counterIds
})